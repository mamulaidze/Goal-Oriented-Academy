import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
  onc: () => void
}

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  onc: () => set((state) => ({ count: state.count - 1 })),
}))

export default function Counter() {
  const { count, inc } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
        <button onClick={() => useStore.getState().onc()}>one down</button>
    </div>
  )
}