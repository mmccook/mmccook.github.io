import React, {Children} from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const BasicWithNav = ({Navigation, ...props}) => {
  return (
    <div>
    <Navigation />  
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">        
        <div className="px-4 py-4 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">{props.children}</div>
        </div>        
      </div>
    </main>
  </div>
  );
};
export default BasicWithNav;