import {ImgHTMLAttributes, memo} from 'react';
import style from './style.module.scss';

interface Props {
    name: string;
    src?: ImgHTMLAttributes<HTMLImageElement>['src'];
}

export const Avatar = memo<Props>(function ({name, src}) {
    return <div className={style.root}>{src ? <img src={src} alt="photo" /> : name.charAt(0)}</div>;
});
