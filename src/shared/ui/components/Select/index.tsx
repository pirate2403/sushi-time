import {ChangeEvent, ChangeEventHandler, memo, SelectHTMLAttributes, useId} from 'react';
import cn from 'classnames';
import style from './style.module.scss';
import {ReactComponent as Arrow} from '@shared/ui/icons/arrow.svg';

export interface Option {
    label: string;
    value: string | number;
}

interface Props extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    label?: string;
    options?: Option[];
    onChange?: (value: string, e?: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = memo<Props>(function ({label, className, onChange, options = [], ...rest}) {
    const id = useId();

    const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
        const value = e.target.value;
        onChange?.(value, e);
    };

    return (
        <div className={cn(style.root, className)}>
            {label && (
                <label className={style.label} htmlFor={id}>
                    {label}
                </label>
            )}

            <div className={style.wrapper}>
                <div className={style.icon}>
                    <Arrow />
                </div>
                <select {...rest} id={id} className={style.field} onChange={handleSelect}>
                    {options.map(({label, value}) => (
                        <option key={value} value={value} className={style.option}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
});
