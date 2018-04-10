import React from 'react';
import HeaderBar from './HeaderBar.js';
const HeaderApp = function (props) {
    return (
 <header>
 <HeaderBar name={props.name}/>
 </header>

    );
}
export default HeaderApp;
