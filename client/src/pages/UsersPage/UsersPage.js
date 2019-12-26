import React, {Fragment, useEffect} from 'react';
import Header from "../../Header";
import {TableWrapper} from "../UsersPage/TableWrapper"
import Footer from "../../components/Footer";
import {Breadcrumbs, BreadcrumbsItem} from 'react-breadcrumbs-dynamic'

const UsersPage = (props) => {

    return (
        <Fragment>
            <Header/>
            <div className='row'>
                <Breadcrumbs
                    separator={<b> > </b>}
                    duplicateProps={{to: 'href'}}
                />

                <BreadcrumbsItem to='/'>Main page</BreadcrumbsItem>
                <BreadcrumbsItem to='/users'>Stats</BreadcrumbsItem>
                <TableWrapper/>
                <Footer/>
            </div>
        </Fragment>
    );
};

export default UsersPage;
