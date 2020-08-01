import styled, { css } from 'styled-components'

interface divProps {
    overlayColor?: string
}

const Div = styled.div<divProps>`
    height: '100%';
    width: '100%';
    &:active {
        background-color: ${(props) => props.overlayColor};
    }
    ${(props) =>
        props.style &&
        css`
     {
         ...props.style
     }
  `}
    ${(props) =>
        props.onClick &&
        css`
            cursor: pointer;
        `}
`
export { Div }
