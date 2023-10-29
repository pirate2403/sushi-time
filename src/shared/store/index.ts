import {configureStore} from '@reduxjs/toolkit';
import {ConfigureStoreOptions} from '@reduxjs/toolkit/src/configureStore.ts';

export const createStore = (options: ConfigureStoreOptions) => {
    return configureStore(options);
};
