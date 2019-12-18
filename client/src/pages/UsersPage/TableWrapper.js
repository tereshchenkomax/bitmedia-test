import React from 'react'
import {useTable, useSortBy, usePagination} from "react-table";
import {Table} from "../../components/Table";

export function TableWrapper() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
        ],
        []
    );

    const data = React.useMemo(() => makeData(100000), [])

    return (
        <Table columns={columns} data={data}/>
    )
}