import React, { FC } from 'react'
import { Div } from './styles'

interface BoxProps {
    hide?: boolean
    overlayColor?: string
    onClick?: () => void
    children: any
    style?: any
}

const Box: FC<BoxProps> = ({ hide = false, ...props }: BoxProps) => {
    if (hide) return null
    return <Div {...props}>{props.children}</Div>
}

export { Box }
