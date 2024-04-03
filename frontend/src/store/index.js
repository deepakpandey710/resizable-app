import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../utils/constants";
import axios from 'axios';

const initialState = {
    count: 0,
    data: {
        email: '',
        number: null,
    },
};

export const getDetail = createAsyncThunk("user", async () => {
    const {data}  = await axios.get(`${API_URL}/detail`);
    return data;
});


export const updateUser = createAsyncThunk("update", async ({ email, number }) => {
    const { data } = await axios.put(`${API_URL}/update`, {
        email,
        number,
    });
    return data;
}
);

export const addUser = createAsyncThunk("add", async ({ email, number }) => {
    const { data } = await axios.post(`${API_URL}/add`, {
        email,
        number,
    });
    return data;
}
);

const UserSlice = createSlice({
    name: "User",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.count = action.payload.count;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.count = action.payload.count;
        });
        builder.addCase(getDetail.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.count = action.payload.count;
        });
    },
});

export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
    },
})