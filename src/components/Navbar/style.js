import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
    width: 100vw;
    height: 75px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
`

export const NavLogo = styled.div`
    font-size: 24px;
    font-weight: bold;

    display: flex;
    flex-grow: 1;
    justify-content: center;
`

export const LinksWrapper = styled.div`
    display: flex;
    flex-grow: 2;
    justify-content: center;
`

export const MenuLinks = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;
`

export const NavLinkStyled = styled(NavLink)`
    font-size: 18px;
    margin-left: 10px;
`