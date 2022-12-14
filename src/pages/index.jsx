import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { RoleContext } from "../app/context";

import FirstPage from "./FirstPage";
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import UserPage from './UserPages/UserPage';
import RecoverPage from './RecoverPage';
import AdminPage from "./AdminPages/AdminPage";
import LibrarianManagement from "./AdminPages/LibrarianManagement";
import AddLibrarian from "./AdminPages/AddLibrarian";
import LibrarianPage from "./LibrarianPages/LibrarianPage";
import AddBooks from "./LibrarianPages/AddBooks";
import SingleBookPage from "./UserPages/SingleBookPage";
import DeliveryPage from "./UserPages/DeliveryPage";
import BookManagement from "./LibrarianPages/BookManagement";
import VisitorRating from "./AdminPages/VisitorRating";
import ViewAllOrders from "./AdminPages/ViewAllOrders";
import BrowseProfit from "./AdminPages/BrowseProfit";

const Pages = () => {
    const navigate = useNavigate()
    const {role} = useContext(RoleContext)

    useEffect(() => {
        navigate("/firstPage")
    }, [])

    return (
        <Routes>
            <Route path = "/firstPage"element = {<FirstPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/registration" element={<RegistrationPage />}/>
            <Route path="/recover" element={<RecoverPage />} />
           
            { role && 
                <> 
                    <Route path="/user" element={<UserPage />}/>
                    <Route path="/exit" element={<LoginPage />}/>
                    <Route path="/admin" element={<AdminPage />}/>
                    <Route path="/librarian" element={<LibrarianPage />}/>
                    <Route path="/visitorRating" element={<VisitorRating />}/>
                    <Route path="/librarianManagement" element={<LibrarianManagement />}/>
                    <Route path="/addLibrarian" element={<AddLibrarian />}/>
                    <Route path="/addBooks" element={<AddBooks />}/>
                    <Route path="/book/:id" element = {<SingleBookPage/>}/>
                    <Route path="/delivery/:bookId" element={<DeliveryPage/>}/>
                    <Route path="/bookManagement" element={<BookManagement/>}/>
                    <Route path="/viewAllOrders" element={<ViewAllOrders/>}/>
                    <Route path="/profit" element={<BrowseProfit/>}/>

                </>

            }
        </Routes>
    
    );
};

export default Pages;