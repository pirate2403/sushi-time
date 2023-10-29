import {createSlice} from '@reduxjs/toolkit';
import {Company} from '@entities/company/model/interfaces.ts';

export interface CompanyState {
    current: Company;
}

const initialState: CompanyState = {
    // Mock data
    current: {
        name: 'НАЗВАНИЕ ФИРМЫ',
        agent: 'Лоскутникова В.П.',
    },
};

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {},
});

export const companyReducer = companySlice.reducer;
