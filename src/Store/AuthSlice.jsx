import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
    name: "Author",
    initialState: { isLoggedIn: false, Author: "Lilian" },
    reducers: {
        LogInOut: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        }
    }
    
})
export const { LogInOut } = AuthSlice.actions;
export default AuthSlice.reducer;                                                                                                                                                                                                              