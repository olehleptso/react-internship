import './Header.css';
import logo from '../../images/logo.png';
import React, {useEffect, useState} from 'react';



function Header () {
    const [menuItems, setItems] = useState([]);

    useEffect(()=>{
        async function getHeaderItems() {
            const response = await fetch('http://localhost:4000/header-menu');
            const res = await response.json();
            setItems(res);
        }
        getHeaderItems();
    }, []);

    return (
            <div className="header">
                <img src={logo} alt="Logo"/>
                <div className="header-menu">
                    <ul className="header-nav">
                        {menuItems.map((data) => (
                            <li key={data.id}>
                                <a>{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    );
}

export default Header;