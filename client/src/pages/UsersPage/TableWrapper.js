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

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const fetchIdRef = useRef(0);

    const fetchData = useCallback(async ({pageSize, pageIndex}) => {
        // This will get called when the table needs new data
        // You could fetch your data from literally anywhere,
        // even a server.

        // Give this fetch an ID
        const fetchId = ++fetchIdRef.current;

        // Set the loading state
        setLoading(true);

        if (fetchId === fetchIdRef.current) {
            const response = await request(`/usersendpoint?current_page=${pageIndex}&users_number=${pageSize}`);
            const json = await response.json();
            setData(json);
            setPageCount(20);
            setLoading(false)
        }

    }, []);

    return (
        <div className='row'>
            <h2 style={{  'textAlign': 'left'}} className='has-margin-bottom-medium has-margin-top-medium'><strong>Users
                statistics</strong></h2>
            <Table columns={columns} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount}/>
        </div>
    )
}
