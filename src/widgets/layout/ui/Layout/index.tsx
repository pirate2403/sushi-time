import {memo} from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom';
import {Divider, ShadowWrapper, Typography} from '@shared/ui';
import {CompanyCard} from '@entities/company';
import {ReactComponent as DocumentSvg} from '@shared/ui/icons/document.svg';
import style from './style.module.scss';
import {FilialSelect} from '@features/selectFilial';

export interface LayoutRoute {
    path: string;
    label: string;
}

interface Props {
    routes?: LayoutRoute[];
}

export const Layout = memo<Props>(function ({routes = []}) {
    const location = useLocation();

    return (
        <div className={style.root}>
            <div className={style.sidebar}>
                <ShadowWrapper shadow>
                    <div className={style.sidebar__header}>
                        <CompanyCard />
                        <Divider />
                        <div className={style.sidebar__accounting}>
                            <DocumentSvg />
                            <Typography>СКЛАДСКОЙ УЧЁТ</Typography>
                        </div>
                    </div>
                </ShadowWrapper>
                <div className={style.sidebar__features}>
                    <FilialSelect />
                    <Divider />
                    <div className={style.sidebar__menu}>
                        {routes.map((item) => (
                            <ShadowWrapper key={item.path} shadow={location.pathname === `/${item.path}`}>
                                <Link className={style.sidebar__menuItem} to={item.path}>
                                    <Typography>-</Typography> <Typography>{item.label}</Typography>
                                </Link>
                            </ShadowWrapper>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <Outlet />
            </div>
        </div>
    );
});
