import styled from "styled-components"

import { Tokens } from "../Theme/Tokens"

export const Header = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: auto;
  background-color: ${Tokens.color.white};
  overflow: visible;
  padding: ${Tokens.rhythm} 0;
  font-weight: ${Tokens.font.weight.bold};
  z-index: ${Tokens.z.header};
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.3);
`

export const HeaderBand = styled.div`
  position: relative;
  overflow: visible;
  z-index: ${Tokens.z.band};
`

export const HeaderBackdrop = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  width: 240px;
  transform: translateX(-50%);
`

export const HeaderLogo = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 110px;
  transform: translateX(-50%);
`

export const HeaderActions = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 300px;
  display: none;
  margin: 0.8rem 1rem;
  text-align: center;
  z-index: ${Tokens.z.language};

  @media (min-width: ${Tokens.screen.medium}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 14%;
  }

  @media (min-width: ${Tokens.screen.large}) {
    padding-left: 2%;
    border-left: 2px solid ${Tokens.color.light};
  }

  span {
    color: ${Tokens.color.white};
    font-size: ${Tokens.font.size.micro};
  }
`

export const LanguageBubble = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: ${Tokens.z.behind};
`

export const LanguageSelector = styled.div`
  position: relative;
  width: 38px;
  height: 28px;
  line-height: 1.3;
  cursor: pointer;
  text-transform: uppercase;
`

export const LinkGroups = styled.div`
  display: none;

  @media (min-width: ${Tokens.screen.medium}) {
    display: flex;
    justify-content: space-between;
  }
`

export const LinkGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  overflow: visible;

  & > * {
    font-size: ${Tokens.font.size.subBase};
    font-weight: ${Tokens.font.weight.bold};
    margin: 0 ${Tokens.font.size.small};
    text-decoration: none;
    color: ${Tokens.color.dark};
    white-space: nowrap;
  }

  .gold {
    color: ${Tokens.color.gold};
  }
`

export const MobileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85px;
  line-height: 0.5;
  color: ${Tokens.color.default};
  height: 22px;
  font-size: ${Tokens.font.size.base};
  padding-left: 1rem;
  cursor: pointer;
  user-select: none;

  @media (min-width: ${Tokens.screen.medium}) {
    display: none;
  }
`

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  height: 14px;

  span {
    line-height: 0;
  }

  span + span {
    margin-top: 6px;
  }
`
