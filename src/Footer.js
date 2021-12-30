import React, { useContext } from "react";
import { InfoContext } from "./contexts/info";
import {Link} from "react-router-dom";

const Footer = () => {
    const { menus, updateMenu } = useContext(InfoContext);
    console.log(menus);
    return (
        <footer>
            <p>Footer</p>

        </footer>
    );
}

export default Footer;