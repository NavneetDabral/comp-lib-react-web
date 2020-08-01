import React, { FC } from 'react'
import { Box } from '../box'

interface SpacerProps {
    hide?: boolean
    size?: number
}

const Spacer: FC<SpacerProps> = ({ hide = false, size = 5 }: SpacerProps) => {
    if (hide) {
        return null
    }
    const height = size
    const width = size
    return <Box style={{ height, width }}>{''}</Box>
}

export { Spacer }
