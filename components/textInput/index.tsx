import React, { FC } from 'react'
import { STextInput } from './styles'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hide?: boolean
}

const TextInput: FC<TextInputProps> = ({
    hide = false,
    ...props
}: TextInputProps) => {
    if (hide) {
        return null
    }
    return <STextInput {...props} />
}

export { TextInput }
