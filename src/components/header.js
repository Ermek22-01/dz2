import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/'>post</NavLink>
                </li>
                <li>
                    <NavLink to='delete'>delete</NavLink>
                </li>
                <li>
                    <NavLink to='edit'>edit</NavLink>
                </li>
                <li>
                    <NavLink to='create'>create</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;