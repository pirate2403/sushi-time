import {memo} from 'react';
import style from './style.module.scss';

export const Divider = memo(function () {
    return <div className={style.root} />;
});
