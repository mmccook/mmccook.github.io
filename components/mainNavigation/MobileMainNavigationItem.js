import styles from "../../styles/components/mainNavigation/MainNavigationItem.module.css";
import React, {Children} from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileMainNavigationItem = ({children, ...props}) => {
    const {href, isActive} = props;
    const { asPath } = useRouter();
    const child = Children.only(children);
    const childClassName = child.props.className || styles.mobileMainNavigationItem;
    const activeClassName = styles.mobileMainNavigationItem;
   
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
export default MobileMainNavigationItem;