import React from 'react';

import { NavWrapper, NavLogo, LinksWrapper, NavLinkStyled, MenuLinks} from './style';

const Navbar = () => {
    return (
        <NavWrapper>
            <NavLogo>Teste Nave-rs</NavLogo>
            <LinksWrapper>
                <MenuLinks>
                    <NavLinkStyled to="/">Home</NavLinkStyled>
                    <NavLinkStyled to="/List">Posts</NavLinkStyled>
                </MenuLinks>
            </LinksWrapper>
        </NavWrapper>
    )
}

export default Navbar;
