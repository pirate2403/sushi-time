import {HTMLAttributes, memo, PropsWithChildren} from 'react';
import cn from 'classnames';
import style from './style.module.scss';

interface TypographyElement {
    span: HTMLSpanElement;
    p: HTMLParagraphElement;
    label: HTMLLabelElement;
    h1: HTMLHeadingElement;
    h2: HTMLHeadingElement;
}

type Element = TypographyElement[keyof TypographyElement];

interface Props<T extends Element = HTMLSpanElement> extends HTMLAttributes<T> {
    element?: 'span' | 'p' | 'h1' | 'h2' | 'label';
    className?: string;
    variant?: 'primary' | 'secondary';
}

export const Typography = memo(function <T extends Element = HTMLSpanElement>({
    element = 'span',
    className,
    variant = 'primary',
    children,
    ...rest
}: PropsWithChildren<Props<T>>) {
    const Component = element;
    return (
        <Component
            className={cn(style.root, className, {
                [style.root_secondary]: variant === 'secondary',
            })}
            {...(rest as HTMLAttributes<TypographyElement[typeof element]>)}
        >
            {children}
        </Component>
    );
});
