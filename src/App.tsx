import React from 'react';
import './App.css';
import {Header} from "./common/features/header/Header";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className='appContainer'>
            <Header/>
            {/*<ProductList />*/}
            <Outlet/>
        </div>

    );
}

export default App;
