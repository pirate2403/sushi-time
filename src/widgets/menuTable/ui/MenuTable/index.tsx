import {ChangeEventHandler, memo, useCallback, useMemo, useState} from 'react';
import {Input, Select, Table, TableColumn, TableData} from '@shared/ui';
import {ReactComponent as EditSvg} from '@shared//ui/icons/edit.svg';
import {ReactComponent as GraphSvg} from '@shared//ui/icons/graph.svg';
import {ReactComponent as TrashSvg} from '@shared//ui/icons/trash.svg';
import {useGetMenuByIdQuery} from '@entities/menu';
import {useSelector} from 'react-redux';
import {filialSelector} from '@entities/filial';
import {debounce} from '@shared/lib/debounce.ts';
import style from './style.module.scss';

const ACTIVE_STATUS = {
    active: 'Активно',
    not_active: 'Не активно',
    not_selected: 'Не выбрано',
};

const ACTIVE_VALUES = {
    active: 'active',
    not_active: 'no_active',
    not_selected: '',
};

function parseActiveValue(value: string) {
    if (value === ACTIVE_VALUES.not_selected) return '';
    return value;
}

const withDebounce = debounce((cb: () => void) => {
    cb();
}, 300);

export const MenuTable = memo(function () {
    const [currentPage, setCurrentPage] = useState(1);
    const [nameFilter, setNameFilter] = useState('');
    const [filialFilter, setFilialFilter] = useState('');
    const [ttFilter, setTtFilter] = useState('');
    const [activeFilter, setActiveFilter] = useState(ACTIVE_VALUES.not_selected);

    const {currentId} = useSelector(filialSelector);
    const {data: paginatorMenu} = useGetMenuByIdQuery(
        {
            id: currentId,
            page: currentPage,
            name: nameFilter,
            filial: filialFilter,
            tt: ttFilter,
            active: parseActiveValue(activeFilter),
        },
        {
            skip: !currentId,
        }
    );

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = useCallback(({target}) => {
        withDebounce(() => setNameFilter(target.value));
    }, []);
    const handleFilialChange: ChangeEventHandler<HTMLInputElement> = useCallback(({target}) => {
        withDebounce(() => setFilialFilter(target.value));
    }, []);
    const handleTtChange: ChangeEventHandler<HTMLInputElement> = useCallback(({target}) => {
        withDebounce(() => setTtFilter(target.value));
    }, []);

    const handleActiveChange = useCallback((value: string) => {
        setActiveFilter(value);
    }, []);

    const columns: TableColumn[] = [
        {
            dataIndex: 'name',
            key: 'name',
            title: <Input placeholder="Название меню" onChange={handleNameChange} />,
        },
        {
            dataIndex: 'filial',
            key: 'filial',
            title: <Input placeholder="Филиал" value={filialFilter} onChange={handleFilialChange} />,
        },
        {
            dataIndex: 'tt',
            key: 'tt',
            title: <Input placeholder="Торговая точка" value={ttFilter} onChange={handleTtChange} />,
        },
        {
            dataIndex: 'active',
            key: 'active',
            title: (
                <Select
                    value={activeFilter}
                    onChange={handleActiveChange}
                    options={[
                        {label: ACTIVE_STATUS.not_selected, value: ACTIVE_VALUES.not_selected},
                        {label: ACTIVE_STATUS.active, value: ACTIVE_VALUES.active},
                        {label: ACTIVE_STATUS.not_active, value: ACTIVE_VALUES.not_active},
                    ]}
                />
            ),
        },
        {
            dataIndex: 'export',
            key: 'export',
            title: 'Экспорт',
        },
        {
            dataIndex: 'actions',
            key: 'actions',
            customRender: () => (
                <div className={style.actions}>
                    <GraphSvg />
                    <EditSvg />
                    <TrashSvg />
                </div>
            ),
        },
    ];

    const tableData = useMemo<TableData[]>(() => {
        return (paginatorMenu?.data || []).map<TableData>((item) => ({
            id: item.id,
            name: item.name,
            filial: item.filial.name,
            tt: item.tt.name,
            active: item.active ? ACTIVE_STATUS.active : ACTIVE_STATUS.not_active,
            export: item.export.join(', '),
        }));
    }, [paginatorMenu]);

    const onChangePage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={style.root}>
            <Table
                columns={columns}
                data={tableData}
                totalPages={paginatorMenu?.max_pages}
                pagination={!!(paginatorMenu?.max_pages && paginatorMenu.max_pages > 1)}
                onChangePage={onChangePage}
                currentPage={currentPage}
            />
        </div>
    );
});
