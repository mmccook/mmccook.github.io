import styles from "../../styles/components/mainNavigation/MainNavigationItem.module.css";
import React, {Children} from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MainNavigationItem = ({children, ...props}) => {
    const {href, isActive} = props;
    const { asPath } = useRouter();
    const child = Children.only(children);
    const childClassName = child.props.className || styles.mainNavigationItem;
    const activeClassName = styles.mainNavigationItemActive;
   
    const className = 
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName
      
  return (
    <Link {...props}>
        {React.cloneElement(child, {
            className: className || null
        })}
    </Link>);
};
export default MainNavigationItem;