import {memo} from 'react';
import {Typography} from '@shared/ui';
import {Link} from 'react-router-dom';
import style from './style.module.scss';

export const NotFoundPage = memo(function () {
    return (
        <div className={style.root}>
            <Typography element="h1" variant="secondary">
                Страница не найдена
            </Typography>
            <Link to="/">
                <Typography variant="secondary">Вернуться на главную</Typography>
            </Link>
        </div>
    );
});
