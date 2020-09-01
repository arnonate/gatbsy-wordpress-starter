import styled from "styled-components"
import { Tokens } from "./Tokens"

export const Wrap = styled.div`
  --props-size-wide: ${Tokens.wrap.wide};
  --props-size-narrow: ${Tokens.wrap.narrow};

  margin: auto;
  padding: 0;
  width: 95vw;
  max-width: ${({ size }) => {
    if (!size) return `var(--props-size-wide)`
    if (size === "narrow") return `var(--props-size-narrow)`
    if (size === "wide") return `var(--props-size-wide)`
    return size
  }};
  overflow: hidden;

  @media (min-width: ${Tokens.screen.medium}) {
    padding: 0;
    display: ${({ flex }) => {
      if (!flex) return "block"
      return "flex"
    }};
    flex-direction: ${({ flex }) => {
      if (flex === "column") return "column"
      return "row"
    }};
    justify-content: space-between;
  }
`

export const Button = styled.button`
  background-color: ${Tokens.color.purple};
  color: ${Tokens.color.white};
  border: 0;
  border-radius: ${Tokens.border.radius};
  padding: 1rem;
  text-transform: uppercase;
  font-size: ${Tokens.font.size.small};
  font-weight: ${Tokens.font.weight.normal};
  cursor: pointer;
  line-height: 1;
  white-space: nowrap;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    margin: 0 1rem;
  }
`

export const Modal = styled.div`
  position: fixed;
  max-width: 600px;
  max-height: 90vh;
  overflow: auto;
  z-index: ${Tokens.z.modal};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Tokens.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    font-weight: ${Tokens.font.weight.bold};
  }
`

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: ${Tokens.z.language};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Tokens.color.purple};
  opacity: 0.4;
`

export const Padding = styled.div`
  padding: calc(${Tokens.rhythm} * 6) 0 ${Tokens.rhythm};
`

export const PageTitle = styled.h1`
  --props-weight-bold: ${Tokens.font.weight.black};

  margin: auto;
  padding: ${Tokens.rhythm} 0;
  font-size: ${Tokens.font.size.ultraMobile};
  font-weight: var(--props-weight-bold);
  color: ${Tokens.color.purple};
  text-align: center;

  @media (min-width: ${Tokens.screen.medium}) {
    font-size: ${Tokens.font.size.ultra};
  }
`

export const SectionHeading = styled.div`
  text-align: center;

  h2 {
    font-size: ${Tokens.font.size.ultraMobile};
    font-weight: ${Tokens.font.weight.black};
    color: ${Tokens.color.purple};
    padding: calc(${Tokens.rhythm} * 2) 0 0;

    @media (min-width: ${Tokens.screen.medium}) {
      font-size: ${Tokens.font.size.ultra};
    }
  }

  h3 {
    font-size: ${Tokens.font.size.large};
    color: ${Tokens.color.dark};
    margin: auto;
    margin-bottom: ${Tokens.rhythm};
    border-bottom: 3px dotted;
    width: auto;
    display: inline-block;
    cursor: pointer;

    @media (min-width: ${Tokens.screen.super}) {
      font-size: ${Tokens.font.size.ultra};
    }

    &:hover {
      opacity: 0.7;
    }

    svg {
      width: 40px;
      height: 40px;
      fill: ${Tokens.color.dark};
      display: inline-block;
      vertical-align: middle;
    }
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
  }
`

export const AnchoredContent = styled.div`
  @media (min-width: ${Tokens.screen.medium}) {
    display: flex;
    align-items: flex-start;
    height: 70vh;
    overflow: auto;
  }

  a {
    text-decoration: none;
    display: block;
    color: ${Tokens.color.purple};
  }

  .links {
    @media (min-width: ${Tokens.screen.medium}) {
      width: 28%;
      align-self: flex-start;
      position: sticky;
      top: 0;
    }
  }

  .subLinks {
    padding: 0 0 ${Tokens.rhythm} ${Tokens.rhythm};
  }

  .content {
    @media (min-width: ${Tokens.screen.medium}) {
      width: calc(72% - ${Tokens.rhythm});
      padding-left: ${Tokens.rhythm};
    }

    h2 {
      font-size: ${Tokens.font.size.ultraMobile};
      color: ${Tokens.color.purple};

      @media (min-width: ${Tokens.screen.medium}) {
        font-size: ${Tokens.font.size.ultra};
      }
    }
  }
`
