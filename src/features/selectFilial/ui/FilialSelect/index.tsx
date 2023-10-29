import {memo, useCallback, useEffect, useMemo} from 'react';
import {Select} from '@shared/ui';
import {useGetFilialQuery} from '@entities/filial/model/service.ts';
import {useDispatch, useSelector} from 'react-redux';
import {filialSelector, setFilialId} from '@entities/filial';

export const FilialSelect = memo(function () {
    const {data, isLoading} = useGetFilialQuery();
    const {currentId} = useSelector(filialSelector);
    const dispatch = useDispatch();

    const options = useMemo(() => {
        return (data || []).map((item) => ({
            label: item.name,
            value: item.id,
        }));
    }, [data]);

    useEffect(() => {
        if (options.length) dispatch(setFilialId(options[0].value));
    }, [dispatch, options]);

    const handleFilialSelect = useCallback(
        (value: string) => {
            dispatch(setFilialId(Number(value)));
        },
        [dispatch]
    );

    return <Select label="Филиалы" value={currentId} options={options} disabled={isLoading} onChange={handleFilialSelect} />;
});
