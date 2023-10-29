import {createBrowserRouter, RouteObject} from 'react-router-dom';
import {Layout, LayoutRoute} from '@widgets/layout';
import * as React from 'react';
import {MenuPage} from '@pages/menu';
import {UnderDevelopmentPage} from '@pages/underDevelopment';
import {NotFoundPage} from '@pages/404';
import {ErrorPage} from '@pages/error';

const routes: LayoutRoute[] = [
    {
        path: 'components',
        label: 'Компоненты',
    },
    {
        path: 'semi-product',
        label: 'Полуфабрикаты',
    },
    {
        path: 'products',
        label: 'Товары',
    },
    {
        path: 'menu',
        label: 'Меню',
    },
    {
        path: 'movement',
        label: 'Перемещения',
    },
    {
        path: 'inventory',
        label: 'Инвентаризация',
    },
    {
        path: 'release',
        label: 'Выпуск товара',
    },
    {
        path: 'offs',
        label: 'Списание',
    },
    {
        path: 'invoices',
        label: 'Накладные',
    },
];

const routeComponents: Record<string, React.ReactNode> = {
    components: <UnderDevelopmentPage />,
    'semi-product': <UnderDevelopmentPage />,
    products: <UnderDevelopmentPage />,
    menu: <MenuPage />,
    movement: <UnderDevelopmentPage />,
    inventory: <UnderDevelopmentPage />,
    release: <UnderDevelopmentPage />,
    offs: <UnderDevelopmentPage />,
    invoices: <UnderDevelopmentPage />,
};
export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Layout routes={routes} />,
        children: routes.map(({path}) => {
            const route: RouteObject = {
                path,
                element: routeComponents[path],
            };

            return route;
        }),
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);
