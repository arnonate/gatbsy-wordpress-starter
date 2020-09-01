import styled from "styled-components"
import { Tokens } from "../Theme/Tokens"

export const Section = styled.div`
  padding: calc(${Tokens.rhythm} * 4) 0 calc(${Tokens.rhythm} * 2);
`
export const Container = styled.div`
  @media (min-width: ${Tokens.screen.medium}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    & > * {
      width: calc(50% - ${Tokens.rhythm});
    }
  }

  button {
    margin-bottom: calc(${Tokens.rhythm} * 2);
  }

  form {
    p {
      @media (min-width: ${Tokens.screen.medium}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      input {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: ${Tokens.rhythm};
        padding: calc(${Tokens.rhythm} / 2);
        font-size: 16px;
        border: 1px solid ${Tokens.color.border};

        @media (min-width: ${Tokens.screen.medium}) {
          &.half {
            width: calc(50% - ${Tokens.rhythm});
          }
        }
      }
    }
  }

  textarea {
    width: 100%;
    margin-bottom: ${Tokens.rhythm};
    padding: calc(${Tokens.rhythm} / 2);
    font-size: 16px;
    border: 1px solid ${Tokens.color.border};
  }
`
