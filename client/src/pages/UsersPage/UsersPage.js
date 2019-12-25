import React, {Fragment} from 'react';
import Header from "../../Header";
import {TableWrapper} from "../UsersPage/TableWrapper"
import Footer from "../../components/Footer";
import {Breadcrumbs, BreadcrumbsItem} from 'react-breadcrumbs-dynamic'

const UsersPage = () => {
    return (
        <Fragment>
            <Header/>
            <Breadcrumbs
                separator={<b> > </b>}
                duplicateProps={{to: 'href'}}
            />

            <BreadcrumbsItem to='/'>Home</BreadcrumbsItem>
            <BreadcrumbsItem to='/users'>Users</BreadcrumbsItem>
            <TableWrapper/>
            <Footer/>
        </Fragment>
    );
};

export default UsersPage;
