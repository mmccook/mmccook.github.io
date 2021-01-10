import styles from "../../styles/components/mainNavigation/MainNavigationItem.module.css";
import React, {Fragment,useEffect} from "react";
import useToggle from '../useToggle';
import Link from "next/link";
import { useRouter } from "next/router";

const ProfileDropdown = ({children, ...props}) => {
    const [isProfileOpen, ProfileIsOpen] = useToggle();
    useEffect(()=>{
        if(isProfileOpen){
            window.addEventListener("click", ProfileIsOpen);
        }else{
          window.removeEventListener("click", ProfileIsOpen);
        }
    })
    return (
        <Fragment>
            <div>
                <button onClick={ProfileIsOpen} className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
            </div>
            {isProfileOpen &&
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</Link>
            </div>
            }
        </Fragment>
    );
};
export default ProfileDropdown;