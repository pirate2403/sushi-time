import {memo, PropsWithChildren} from 'react';
import cn from 'classnames';
import style from './style.module.scss';

interface Props {
    shadow?: boolean;
    bordered?: boolean;
}

export const ShadowWrapper = memo<PropsWithChildren<Props>>(function ({shadow, bordered, children}) {
    return (
        <div
            className={cn(style.root, {
                [style.root_shadow]: shadow,
                [style.root_bordered]: bordered,
            })}
        >
            {children}
        </div>
    );
});
