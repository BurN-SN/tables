import { create } from "zustand";

export const useZustand = create((set, get) => ({
  tabs: [],
  activeTab: null,
  newTab: (tab) =>
    set((state) => ({
      tabs: [...state.tabs, tab],
      activeTab: tab.id
    })),
  init: (id, payload) => {
    const exists = get()[id];
    if (exists) return;
    set((state) => ({ [id]: payload }));
  }
  // init: (authorizationId) => set(state => { [authorizationId]: "new table" })
}));
