import {CompanyState} from './slice.ts';

export const companySelector = (state: {company: CompanyState}) => state.company;
