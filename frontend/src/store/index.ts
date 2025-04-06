import { configureStore } from '@reduxjs/toolkit'
import { apiQuery } from './api.query'

export const store = configureStore({
    reducer: {
        [apiQuery.reducerPath]: apiQuery.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiQuery.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch