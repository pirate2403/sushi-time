import React, {HTMLAttributes, memo, useMemo, useState} from 'react';
import cn from 'classnames';
import {ShadowWrapper, Typography} from '@shared/ui';
import {ReactComponent as CircleArrowSvg} from '@shared/ui/icons/circle-arrow.svg';
import style from './style.module.scss';

export interface TableData {
    id: string | number;

    [dataKey: string]: unknown;
}

export interface TableColumn {
    dataIndex: string;
    key: string;
    customRender?: (record: TableData) => React.ReactNode;
    title?: string | React.ReactNode;
}

interface Props extends HTMLAttributes<HTMLTableElement> {
    columns: TableColumn[];
    data: TableData[];
    rowClassName?: string;
    totalPages?: number;
    pagination?: boolean;
    currentPage?: number;
    onChangePage?: (page: number) => void;
}

const DOTS = '...';

const PAGINATION_DOT = {
    id: 'dot',
    label: DOTS,
};

export const Table = memo<Props>(function ({className, rowClassName, onChangePage, currentPage, pagination, totalPages = 0, data, columns, ...rest}) {
    const [localCurrentPage, setLocalCurrentPage] = useState(() => currentPage || 1);

    const pageNumbers = useMemo(
        () =>
            Array.from({length: totalPages}, (_, i) => ({
                id: i,
                label: (++i).toString(),
            })),
        [totalPages]
    );
    const paginationData = useMemo(() => {
        if (pageNumbers.length < 8) return pageNumbers;
        if (localCurrentPage < 4) {
            return [...pageNumbers.slice(0, 4), PAGINATION_DOT, ...pageNumbers.slice(totalPages - 1)];
        }
        if (localCurrentPage > totalPages - 3) {
            return [...pageNumbers.slice(0, 1), PAGINATION_DOT, ...pageNumbers.slice(totalPages - 4)];
        }

        return [
            ...pageNumbers.slice(0, 1),
            PAGINATION_DOT,
            ...pageNumbers.slice(localCurrentPage - 2, localCurrentPage + 1),
            PAGINATION_DOT,
            ...pageNumbers.slice(totalPages - 1),
        ];
    }, [localCurrentPage, pageNumbers, totalPages]);

    const handlePaginationBtnClick = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setLocalCurrentPage(page);
        onChangePage?.(page);
    };

    return (
        <div className={style.root}>
            <table className={cn(style.table, className)} {...rest}>
                <thead className={style.tableHead}>
                    <tr className={style.headRow}>
                        {columns.map(({key, title}) => (
                            <td key={key} className={style.headCell}>
                                {title && <span>{title}</span>}
                            </td>
                        ))}
                    </tr>
                </thead>

                <tbody className={style.rows}>
                    {data.map((item) => (
                        <tr key={item.id} className={cn(style.row, rowClassName)}>
                            {columns.map(({key, dataIndex, customRender}) => (
                                <td key={key} className={style.cell}>
                                    {!customRender && <span>{String(item[dataIndex])}</span>}
                                    {customRender && <span>{customRender(item)}</span>}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {pagination && (
                <div className={style.pagination}>
                    <button className={style.pagination__btn} onClick={() => handlePaginationBtnClick(localCurrentPage - 1)}>
                        <CircleArrowSvg />
                    </button>
                    {paginationData.map((item, i) => (
                        <ShadowWrapper key={`${item.id}_${i}`} shadow={localCurrentPage === Number(item.label)} bordered>
                            <button
                                className={style.pagination__btn}
                                onClick={() => item.label !== DOTS && handlePaginationBtnClick(Number(item.label))}
                            >
                                <Typography variant="secondary">{item.label}</Typography>
                            </button>
                        </ShadowWrapper>
                    ))}
                    <button className={style.pagination__btn} onClick={() => handlePaginationBtnClick(localCurrentPage + 1)}>
                        <CircleArrowSvg className={style.pagination__arrow_right} />
                    </button>
                </div>
            )}
        </div>
    );
});
