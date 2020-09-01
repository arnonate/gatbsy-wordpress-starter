import styled from "styled-components"

import { Tokens } from "../Theme/Tokens"

export const Download = styled.div`
  padding: 0;
  border-top: 1px solid ${Tokens.color.border};

  @media (min-width: ${Tokens.screen.medium}) {
    padding: calc(${Tokens.rhythm} * 2);
  }
`

export const Footer = styled.footer`
  position: relative;
  overflow: hidden;
  padding: calc(${Tokens.rhythm} * 2) 0;
  background: rgb(49, 49, 52);
  background: radial-gradient(
    circle,
    rgba(49, 49, 52, 1) 0%,
    rgba(31, 31, 33, 1) 100%
  );

  p {
    font-size: ${Tokens.font.size.micro};
    color: ${Tokens.color.white};
    opacity: 0.4;
  }

  a {
    color: ${Tokens.color.white};
  }
`

export const LogoSection = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: ${Tokens.screen.medium}) {
    width: 20%;
    text-align: left;
  }
`

export const LinkSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${Tokens.screen.medium}) {
    width: 30%;
  }
`

export const CopySection = styled.div`
  width: 95%;
  margin: auto;

  @media (min-width: ${Tokens.screen.medium}) {
    width: 35%;
    margin: 0;
  }
`

export const Logo = styled.div`
  width: 100%;
  margin: auto;

  @media (min-width: ${Tokens.screen.medium}) {
    margin: 0;
  }

  svg {
    width: 100%;
    height: auto;
  }
`

export const LinkGroup = styled.div`
  width: 50%;
  margin: auto;
  padding-bottom: calc(${Tokens.rhythm} * 2);

  @media (min-width: ${Tokens.screen.medium}) {
    margin: 0;
    padding-bottom: 0;
  }

  a {
    display: block;
    text-decoration: none;
    font-weight: ${Tokens.font.weight.bold};
    text-align: center;

    @media (min-width: ${Tokens.screen.medium}) {
      text-align: left;
    }
  }

  a + a {
    padding-top: ${Tokens.rhythm};
  }
`

export const Gaming = styled.div`
  width: 150px;
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  overflow: visible;
  transform: translateX(-50%);
  /* z-index: ${Tokens.z.behind}; */

  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1026611328125) 0%,
    rgba(31, 31, 33, 1) 100%
  );
`
