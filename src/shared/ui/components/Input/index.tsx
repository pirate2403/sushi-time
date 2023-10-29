import {InputHTMLAttributes, memo, useId} from 'react';
import style from './style.module.scss';
import cn from 'classnames';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
    label?: string;
}

export const Input = memo<Props>(function ({label, className, ...rest}) {
    const id = useId();

    return (
        <div className={cn(style.root, className)}>
            {label && (
                <label className={style.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <input {...rest} id={id} className={style.field} />
        </div>
    );
});
