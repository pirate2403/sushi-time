import {memo} from 'react';
import {MenuTable} from '@widgets/menuTable/ui/MenuTable';
import style from './style.module.scss';

export const MenuPage = memo(function () {
    return (
        <div className={style.root}>
            <MenuTable />
        </div>
    );
});
