import React, {useEffect} from "react";
import { useRouter } from "next/router";

import MainNavigationItem from "./MainNavigationItem";
import MobileMainNavigationItem from "./MobileMainNavigationItem";

import useToggle from '../useToggle';

const Header = (props) => {
  const router = useRouter();
  const [isMobileMenuOpen, MobileMenuOpen] = useToggle();
  useEffect(()=>{
      if(isMobileMenuOpen){
          window.addEventListener("click", MobileMenuOpen);
      }else{
        window.removeEventListener("click", MobileMenuOpen);
      }
  })
   return (
    <nav className="bg-gray-300 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
            <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">                
                    <MainNavigationItem href="/">
                        <a>Home</a>
                    </MainNavigationItem>
                    <MainNavigationItem href="/about">
                        <a>About</a>
                    </MainNavigationItem>
                    <MainNavigationItem href="/projects">
                        <a>Projects</a>
                    </MainNavigationItem>
                </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">                
                <button onClick={MobileMenuOpen} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            </div>
        </div>
        <div className={`sm:hidden ${isMobileMenuOpen ? '':'hidden'}`}>
            <div className="pt-2 pb-3 space-y-1">
                <MobileMainNavigationItem href="/">
                    <a>Home</a>
                </MobileMainNavigationItem>
                <MobileMainNavigationItem href="/about">
                    <a>About</a>
                </MobileMainNavigationItem>
                <MobileMainNavigationItem href="/projects">
                    <a>Projects</a>
                </MobileMainNavigationItem>
            </div>
        </div>
    </nav>
  );
};
export default Header;