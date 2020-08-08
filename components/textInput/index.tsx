import React, { FC, useState } from 'react'
import { STextInput } from './styles'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hide?: boolean
}

const TextInput: FC<TextInputProps> = ({
    hide = false,
    ...props
}: TextInputProps) => {
    const [borderColor, setBorderColor] = useState('black')
    if (hide) {
        return null
    }
    const handleFocus = () => {
        setBorderColor('#714cfe')
    }
    const handleBlur = () => {
        setBorderColor('black')
    }
    return (
        <STextInput
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            borderColor={borderColor}
            autoFocus
        />
    )
}

export { TextInput }
