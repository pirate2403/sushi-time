import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {store} from './appStore';
import {router} from './appRouter';
import './index.scss';

export const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};
