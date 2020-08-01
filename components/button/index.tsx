import React, { MouseEvent, FC, ReactElement } from 'react'
import { SButton } from './styles'
import { ButtonTypes } from './types'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    bType: ButtonTypes
    hide?: boolean
    icon?: ReactElement
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
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
        <SButton bType={bType} onClick={props.onClick}>
            {props.icon} {label}
        </SButton>
    )
}

export { Button, ButtonTypes }
