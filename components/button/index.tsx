import React, { MouseEvent, FC } from 'react'

interface ButtonProps {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    label: string
}

const Button: FC<ButtonProps> = ({ onClick, label }: ButtonProps) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        onClick(e)
    }
    return <button onClick={handleClick}>{label}</button>
}

export { Button }
