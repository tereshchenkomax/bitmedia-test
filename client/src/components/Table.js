import React, {useEffect} from "react";
import {useTable, useResizeColumns, useFlexLayout, usePagination} from "react-table";
import {Link} from "react-router-dom";

export function Table({
                          columns, data,
                          fetchData, loading,
                          pageCount: controlledPageCount,
                      }) {

    const defaultColumn = React.useMemo(
        () => ({
            // When using the useFlexLayout:
            minWidth: 50, // minWidth is only used as a limit for resizing
            width: 160, // width is used for both the flex-basis and flex-grow
            maxWidth: 280, // maxWidth is only used as a limit for resizing
        }),
        []
    )

    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize},
    } = useTable(
        {
            columns,
            data,
            initialState: {pageIndex: 0, pageSize: 50},
            manualPagination: true,
            pageCount: controlledPageCount,
            defaultColumn,
        },
        usePagination,
        useResizeColumns,
        useFlexLayout
    );

    useEffect(() => {
        fetchData({pageIndex, pageSize})
    }, [fetchData, pageIndex, pageSize]);

    // Render the UI for your table
    return (
        <>
            <div {...getTableProps()} className="table has-margin-bottom-small">
                <div className='thead'>
                    {headerGroups.map(headerGroup => (
                        <div {...headerGroup.getHeaderGroupProps()} className="tr">
                            {headerGroup.headers.map(column => (
                                <div {...column.getHeaderProps()}
                                     className={`th`}
                                >
                                    {column.render('Header')}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div {...getTableBodyProps()} className="tbody">
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <Link {...row.getRowProps()} className="tr"
                                  to={{
                                      pathname: `user/${parseInt(row.id) + 1 + pageIndex * pageSize}`,
                                      state: {
                                          last_name: row.original.last_name,
                                          first_name: row.original.first_name
                                      }
                                  }}
                            >
                                {row.cells.map(cell => {
                                    return (
                                        <div {...cell.getCellProps()} className="td">
                                            {cell.render('Cell')}
                                        </div>
                                    )
                                })}
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="pagination">
                <a onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </a>
                <a onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </a>
                <a onClick={() => gotoPage(pageIndex - 1)} disabled={!canPreviousPage}>
                    {pageIndex}
                </a>
                <a className='active'>
                    {pageIndex + 1}
                </a>
                <a onClick={() => gotoPage(pageIndex + 1)} disabled={!canNextPage}>
                    {pageIndex + 2}
                </a>
                <a onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </a>
                <a onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </a>
            </div>
        </>
    )
}
