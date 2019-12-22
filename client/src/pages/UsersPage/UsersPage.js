import React, {useState, useEffect} from 'react';
import Header from "../../Header";
import {TableWrapper} from "../UsersPage/TableWrapper"
import Footer from "../../components/Footer";
const UsersPage = () => {
    return (
        <div>
            <Header/>
            <TableWrapper/>
            <Footer/>
        </div>
    );
};

export default UsersPage;
