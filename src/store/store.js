import { configureStore } from "@reduxjs/toolkit"
import bankReducer from "./bank"

export default configureStore({
    reducer: {
        bank: bankReducer,
    },
})