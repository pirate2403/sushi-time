import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface FilialState {
    currentId?: number;
}

const initialState: FilialState = {
    currentId: undefined,
};

const filialSlice = createSlice({
    name: 'filial',
    initialState,
    reducers: {
        setFilialId: (state, action: PayloadAction<number>) => {
            state.currentId = action.payload;
        },
    },
});

export const filialReducer = filialSlice.reducer;
export const {setFilialId} = filialSlice.actions;
