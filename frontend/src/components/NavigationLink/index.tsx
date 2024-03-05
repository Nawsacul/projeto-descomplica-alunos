import { NavLink } from "react-router-dom";
import { NavigationLinkProps } from "../../interfaces/NavigationLinkProps";
import styles from "./NavigationLink.module.css";

const NavigationLink = ({ children, to }: NavigationLinkProps) => {
    return (
        <NavLink className={({ isActive }) => `
           ${styles.link}
           ${isActive ? styles.linkDestacado : ""} 
        `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}

export default NavigationLink;