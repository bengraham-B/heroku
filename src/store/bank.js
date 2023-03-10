import { createSlice } from "@reduxjs/toolkit"

export const bankSlice = createSlice({
    name: "bank",

    initialState: {
        value: 0
    },

    reducers : {
        deposit: (state, dopsitAmount) => {
            state.value += dopsitAmount.payload
        },

        withdraw: (state, withdrawAmount) => {
            state.value -= withdrawAmount.payload
        },

        addIntrest: (state) => {
            state.value += (state.value * 0.5) //* Increasing the state(balance) by 5%
        },

        charges: (state) => {
            state.value -= (state.value * 0.15) //* Decreasing the state(balance) by 15%
        }
    }
})

export const {deposit, withdraw, addIntrest, charges} = bankSlice.actions
export default bankSlice.reducer