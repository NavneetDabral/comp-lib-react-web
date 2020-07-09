import styled, { css } from 'styled-components'
import { ButtonTypes } from './index'

interface SButtonProps {
    bType: ButtonTypes
}

const SButton = styled.button<SButtonProps>`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    border: none;
    display: block;
    outline: none;
    cursor: pointer;
    ${(props) =>
        props.bType === ButtonTypes.PRIMARY &&
        css`
            background-color: blue;
            color: white;
            &:active {
                transform: translateY(1px);
            }
        `};
    ${(props) =>
        props.bType === ButtonTypes.SECONDARY &&
        css`
            color: blue;
            border-color: blue;
            border: solid 1px blue;
            background-color: transparent;
            &:active {
                transform: translateY(1px);
            }
        `};
    ${(props) =>
        props.bType === ButtonTypes.TERTIARY &&
        css`
            color: blue;
            background-color: transparent;
            border: none;
            &:active {
                transform: translateY(1px);
            }
        `};
`

export { SButton }
