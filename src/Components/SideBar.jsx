import { ChevronUp, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SideNavLinks from '../UserData/NavData';

const SideBar = () => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    // Toggle dropdowns for items with sublinks
    const toggleDropdown = (index) => {
        setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Check if the main navigation item is active
    const isActive = (path) => {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    // Check if a sublink is active
    const isSubmenuActive = (sublinkPath) => {
        return location.pathname === sublinkPath || location.pathname.startsWith(sublinkPath + '/');
    };

    return (
        <div className="flex flex-col h-screen border-r-2 border-titan-100" style={{ backgroundColor: '#F5F5F5' }}>
            <div className="flex items-start flex-col overflow-x-auto pb-20">
                {SideNavLinks.map((link, index) => (
                    <React.Fragment key={index}>
                        {/* Main navigation item */}
                        <div
                            className={`w-full transition-all cursor-pointer ${isActive(link.navLink) ? 'bg-titan-700 text-white' : 'hover:bg-titan-100 hover:text-black'}`}
                            onClick={() => link.subLinks ? toggleDropdown(index) : navigate(link.navLink)}
                        >
                            <Link
                                to={link.navLink}
                                className="lg:px-8 sm:px-2 py-4 text-sm font-medium flex items-center lg:justify-between sm:justify-center"
                            >
                                <span className="flex items-center gap-4">
                                    <link.icon size={18} />
                                    <span className="hidden lg:block transition-all duration-100">
                                        {link.navItem}
                                    </span>
                                </span>
                                {link.subLinks && (
                                    <div className='hidden lg:block transition-all duration-100'>
                                        {openDropdownIndex === index ? (
                                            <ChevronUp size={20} />
                                        ) : (
                                            <ChevronDown size={20} />
                                        )}
                                    </div>
                                )}
                            </Link>
                        </div>

                        {/* Sublinks */}
                        {link.subLinks && openDropdownIndex === index && (
                            <div className="flex flex-col gap-4 my-3 lg:pl-14 sm:p-2 lg:w-full sm:w-32 rounded-md absolute sm:left-14 lg:left-0 lg:relative bg-white">
                                {link.subLinks.map((sublink, subIndex) => (
                                    <Link
                                        key={subIndex}
                                        to={sublink.navLink}
                                        className={`text-sm font-medium hover:text-black w-max cursor-pointer hover:bg-titan-100 px-2 py-1 rounded-md transition-all ${isSubmenuActive(sublink.navLink) ? "bg-titan-700 text-white" : "text-gray-600"}`}
                                    >
                                        {sublink.subNavItem}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
