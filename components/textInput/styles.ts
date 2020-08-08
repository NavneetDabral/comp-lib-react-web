import styled, { css } from 'styled-components'

interface InputProps {
    borderColor: string
}

const STextInput = styled.input<InputProps>`
    border: none;
    border-bottom: solid 1px ${(props) => props.borderColor};
    outline: none;
`
export { STextInput }
