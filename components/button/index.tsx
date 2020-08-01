import React, { MouseEvent, FC } from 'react'
import { SButton } from './styles'
import { ButtonTypes } from './types'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    bType: ButtonTypes
    hide?: boolean
}

const Button: FC<ButtonProps> = ({
    label,
    bType,
    hide = false,
    ...props
}: ButtonProps) => {
    if (hide) {
        return null
    }
    return (
        <SButton bType={bType} {...props}>
            {label}
        </SButton>
    )
}

export { Button, ButtonTypes }
