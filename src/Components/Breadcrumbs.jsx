import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideNavLinks from '../UserData/NavData'; // Your SideNavLinks file
import { ChevronRight } from 'lucide-react';

const PageBreadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Helper function to find the breadcrumb based on the current route path
    const findBreadcrumb = (path) => {
        const findLink = (links, path) => {
            for (let link of links) {
                // Match main navigation items
                if (link.navLink === path) {
                    return { navItem: link.navItem }; // Return parent navItem
                }
                // Match sublinks
                if (link.subLinks) {
                    for (let subLink of link.subLinks) {
                        if (subLink.navLink === path) {
                            return { navItem: link.navItem, subNavItem: subLink.subNavItem }; // Return parent and child
                        }
                    }
                }
            }
            return null;
        };

        return findLink(SideNavLinks, path);
    };

    return (
        <nav aria-label="breadcrumb">
            <div className="breadcrumb flex gap-2 items-center">
                <span className="breadcrumb-item capitalize">
                    <Link to="/">Home</Link>
                </span>
                {pathnames.map((value, index) => {
                    // Create the full path up to this point in the path array
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const breadcrumb = findBreadcrumb(to); // Get the breadcrumb details for this part of the path

                    return (
                        <React.Fragment key={to}>
                            <ChevronRight size={20} className="text-slate-400" />
                            <span className={`breadcrumb-item capitalize ${index === pathnames.length - 1 ? 'active' : ''}`}>
                                {index === pathnames.length - 1 ? (
                                    breadcrumb ? breadcrumb.subNavItem || breadcrumb.navItem : value
                                ) : (
                                    <Link to={to}>
                                        {breadcrumb ? breadcrumb.subNavItem || breadcrumb.navItem : value}
                                    </Link>
                                )}
                            </span>
                        </React.Fragment>
                    );
                })}
            </div>
        </nav>
    );
};

export default PageBreadcrumbs;
