import React, { FC } from 'react'
import { STextInput } from './styles'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput: FC<TextInputProps> = ({ ...props }: TextInputProps) => {
    return <STextInput {...props} />
}

export { TextInput }
