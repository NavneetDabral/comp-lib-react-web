import React, { MouseEvent, FC } from 'react'
import { SButton } from './styles'
import { ButtonTypes } from './types'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    bType: ButtonTypes
}

const Button: FC<ButtonProps> = ({ label, bType, ...props }: ButtonProps) => {
    return (
        <SButton bType={bType} {...props}>
            {label}
        </SButton>
    )
}

export { Button, ButtonTypes }
