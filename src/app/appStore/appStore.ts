import {createStore} from '@shared/store';
import {companyReducer} from '@entities/company';
import {filialApiService, filialReducer} from '@entities/filial';
import {menuApiService} from '@entities/menu';

export const store = createStore({
    reducer: {
        company: companyReducer,
        filial: filialReducer,
        [filialApiService.reducerPath]: filialApiService.reducer,
        [menuApiService.reducerPath]: menuApiService.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([filialApiService.middleware, menuApiService.middleware]);
    },
});
