import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBearStore = create(
    persist(
        (set, get) => ({
            user: true,
            token: null,
            login: (user, token) =>
                set(() => {
                    return {
                        user: user,
                        token: token
                    };
                }),
            logout: () =>
                set(() => {
                    localStorage.clear()
                    return {
                        user: null,
                        token: null
                    };
                }),
        }),
        {
            name: 'hass_user',
            storage: createJSONStorage(() => localStorage), 
        }
    )
)