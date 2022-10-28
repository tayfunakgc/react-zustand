import create from 'zustand';
import { devtools, persist } from 'zustand/middleware'

// const store = (set) => ({
//! put initial state here
// })

const numberStore = (set) => ({
    numbers: [],
    addNumber: (number) => set(state => ({ numbers: [...state.numbers, number] })),
    removeNumber: (number) => set(state => ({ numbers: state.numbers.filter(num => num !== number) })),
    clearAllNumbers: () => set(() => ({ numbers: [] })),
    addNumberAsync: (number) => {
        setTimeout(() => {
            set(state => ({ numbers: [...state.numbers, number] }))
        }, 5000)
    }
})

const useNumberStore = create(
    devtools(
        persist(numberStore, {
            name: 'numbers'
        })
    )
)

export default useNumberStore

/*
const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
*/