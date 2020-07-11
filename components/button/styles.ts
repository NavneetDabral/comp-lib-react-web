import styled, { css } from 'styled-components'
import { ButtonTypes } from './index'

interface SButtonProps {
    bType: ButtonTypes
}

const SButton = styled.button<SButtonProps>`
    color: black;
    font-size: 1em;
    margin: 12px;
    padding: 0.25em 1em;
    border-radius: 3px;
    border: none;
    display: block;
    outline: none;
    cursor: pointer;
    ${(props) =>
        props.bType === ButtonTypes.PRIMARY &&
        css`
            background-color: #714cfe;
            color: white;
            &:active {
                transform: translateY(1px);
            }
        `};
    ${(props) =>
        props.bType === ButtonTypes.SECONDARY &&
        css`
            color: #714cfe;
            border-color: #714cfe;
            border: solid 1px #714cfe;
            background-color: transparent;
            &:active {
                transform: translateY(1px);
            }
        `};
    ${(props) =>
        props.bType === ButtonTypes.TERTIARY &&
        css`
            color: #714cfe;
            background-color: transparent;
            border: none;
            &:active {
                transform: translateY(1px);
            }
        `};
`

export { SButton }
