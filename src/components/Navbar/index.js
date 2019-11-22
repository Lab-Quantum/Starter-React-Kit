import React from 'react';

import { NavWrapper, NavLogo, LinksWrapper, NavLinkStyled, MenuLinks} from './style';

const Navbar = () => {
    return (
        <NavWrapper>
            <NavLogo>Starter React Kit</NavLogo>
            <LinksWrapper>
                <MenuLinks>
                    <NavLinkStyled to="/">Home</NavLinkStyled>
                    <NavLinkStyled to="/route1">Route 1</NavLinkStyled>
                    <NavLinkStyled to="/route2">Route 2</NavLinkStyled>
                </MenuLinks>
            </LinksWrapper>
        </NavWrapper>
    )
}

export default Navbar;
