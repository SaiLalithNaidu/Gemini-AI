import React, { useState } from 'react';
import './Dropdown.css';
import { assets } from '../../assets/assets';

const Dropdown = ({ icon, options }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="dropdown-container">
            <img src={assets.setting_icon} alt="" onClick={toggleDropdown} className="dropdown-icon"/>
            {isDropdownVisible && (
                <div className="dropdown-menu">
                    {options.map((option, index) => (
                        <p key={index} onClick={() => { option.action(); setIsDropdownVisible(false); }}>
                            {option.label}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
