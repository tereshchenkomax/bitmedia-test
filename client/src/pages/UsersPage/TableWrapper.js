import React, {useState, useMemo, useRef, useCallback} from 'react'
import {Table} from "../../components/Table";
import request from "../../helpers/request";

export function TableWrapper() {
    const columns = useMemo(
        () => [
            {
                Header: 'Id',
                accessor: 'id',
            },
            {
                Header: 'First Name',
                accessor: 'first_name',
            },
            {
                Header: 'Last Name',
                accessor: 'last_name',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Gender',
                accessor: 'gender',
            },
            {
                Header: 'IP address',
                accessor: 'ip_address',
            },
            {
                Header: 'Total Clicks',
                accessor: 'total_clicks',
            },
            {
                Header: 'Total page views',
                accessor: 'total_page_views',
            }

        ],
        []
    );

    const [data, setData] = React.useState([])
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0)
    const fetchIdRef = useRef(0)

    const fetchData = useCallback(async ({ pageSize, pageIndex }) => {
        // This will get called when the table needs new data
        // You could fetch your data from literally anywhere,
        // even a server.

        // Give this fetch an ID
        const fetchId = ++fetchIdRef.current;

        // Set the loading state
        setLoading(true);
        console.log(pageSize, pageIndex);

        if (fetchId === fetchIdRef.current) {
            const response = await request(`/usersendpoint?current_page=${pageIndex}&users_number=${pageSize}`)
            const json = await response.json();
            console.log(json);
            setData(json);
            setLoading(false)
        }
        // We'll even set a delay to simulate a server here
        // setTimeout(() => {
        //     // Only update the data if this is the latest fetch
        //     if (fetchId === fetchIdRef.current) {
        //         const startRow = pageSize * pageIndex
        //         const endRow = startRow + pageSize
        //         setData(serverData.slice(startRow, endRow))
        //
        //         // Your server could send back total page count.
        //         // For now we'll just fake it, too
        //         setPageCount(Math.ceil(serverData.length / pageSize))
        //
        //         setLoading(false)
        //     }
        // }, 1000)
    }, [])

    return (
        <Table columns={columns} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount}/>
    )
}
