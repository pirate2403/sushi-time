import {memo} from 'react';
import {Typography} from '@shared/ui';
import style from './style.module.scss';

export const UnderDevelopmentPage = memo(function () {
    return (
        <div className={style.root}>
            <Typography element="h1" variant="secondary">
                Страница находится на стадии разработки
            </Typography>
        </div>
    );
});
