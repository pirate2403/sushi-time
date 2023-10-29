import {memo} from 'react';
import style from './style.module.scss';
import {useSelector} from 'react-redux';
import {companySelector} from '../../model/selector.ts';
import {Avatar, Typography} from '@shared/ui';

export const CompanyCard = memo(function () {
    const {current} = useSelector(companySelector);
    return (
        <div className={style.root}>
            <Avatar name={current.name} />
            <div className={style.info}>
                <Typography>{current.name}</Typography>
                <Typography variant="secondary">{current.agent}</Typography>
            </div>
        </div>
    );
});
