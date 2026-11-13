import { configureStore, createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employee",
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addEmployee } = employeeSlice.actions;

const store = configureStore({
    reducer: {
        employee: employeeSlice.reducer
    }
});

export default store;
