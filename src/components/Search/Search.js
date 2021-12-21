import React from "react";
import Sidebar from "../Sidebar";
import './Search.css'
import searchbar from '../../img/searchbar.png';

function Search() {
    return (
        <div className="search">
            <div className="searchbar">
                <img src={searchbar} ></img>
            </div>
            <Sidebar />            
        </div>
    );
}
export default Search;