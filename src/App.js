import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page_login from './pages/Page_login';
import Page_home from './pages/Page_home';
import Page_agenda from './pages/Page_agenda';

// import NotFoundPage from './NotFoundPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page_login />} />
                <Route path="/home" element={<Page_home />} />
                <Route path="/agenda" element={<Page_agenda />} />
                {/* <Route path="/home" component={HomePage} /> */}
                {/* <Route component={NotFoundPage} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
