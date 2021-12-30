import React, { useContext } from "react";
import { InfoContext } from "./contexts/info";
import styledFooterComponents from "./styles/Footer-style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faHome, faUser, faBook, faAtlas } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
const {FooterStyle, FooterMenu} = styledFooterComponents;

const Footer = () => {
    const { menus, updateMenu } = useContext(InfoContext);
    console.log(menus);
    return (
        <FooterStyle>
            <FooterMenu to="/" backgroundColor="#6a8ff1" className="active">
                <FontAwesomeIcon icon={faHome} />
            </FooterMenu>
            <FooterMenu to="/learn" backgroundColor="#eb7662">
                <FontAwesomeIcon icon={faBook} />
            </FooterMenu>
            <FooterMenu to="/settings" backgroundColor="#8dc4bb">
                <FontAwesomeIcon icon={faAtlas} />
            </FooterMenu>
            <FooterMenu to="/settings" backgroundColor="#8dc4bb">
                <FontAwesomeIcon icon={faUser} />
            </FooterMenu>
        </FooterStyle>
    );
}

export default Footer;