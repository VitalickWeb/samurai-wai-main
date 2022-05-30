import React from 'react';
import smartCity from '../images/logo/smartCity.png';

export const Header = () => {
    return (
        <header className="top-header">
            <div className="logo">
                <img src={smartCity}/>
                <h1 className={'item-header'}>SMART CITY</h1>
            </div>

        </header>
    );
}