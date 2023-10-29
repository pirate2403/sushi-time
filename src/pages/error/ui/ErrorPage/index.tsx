import {memo} from 'react';
import {Typography} from '@shared/ui';
import style from './style.module.scss';

export const ErrorPage = memo(function () {
    const reload = () => {
        location.reload();
    };

    return (
        <div className={style.root}>
            <Typography element="h1" variant="secondary">
                Что-то пошло не так...(
            </Typography>
            <button onClick={reload}>
                <Typography variant="secondary">Перезагрузить</Typography>
            </button>
        </div>
    );
});
