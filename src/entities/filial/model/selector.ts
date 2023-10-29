import {FilialState} from './slice.ts';

export const filialSelector = (state: {filial: FilialState}) => state.filial;
