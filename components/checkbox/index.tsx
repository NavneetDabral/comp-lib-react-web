import React, { FC } from 'react'
import { Text, TextTypes } from '../text'
import { Box } from '../box'
import { Spacer } from '../spacer'
import { CheckBoxOutlineBlank } from '@styled-icons/material/CheckBoxOutlineBlank'
import { CheckBox } from '@styled-icons/material/CheckBox'
import { styles } from './styles'

interface CheckBoxProps {
    hide?: boolean
    isChecked: boolean
    title: string
    size?: number
    color?: string
    onChange: (id: string) => void
}

const Checkbox: FC<CheckBoxProps> = ({
    hide = false,
    isChecked = false,
    ...props
}: CheckBoxProps) => {
    if (hide) {
        return null
    }
    const handleChange = () => props.onChange(props.title)
    const checkIcon = isChecked ? (
        <CheckBox size={props.size || 16} color={props.color} />
    ) : (
        <CheckBoxOutlineBlank size={props.size || 16} color={props.color} />
    )
    return (
        <Box
            style={styles.container}
            overlayColor="#FAFAFA"
            onClick={handleChange}
        >
            {checkIcon}
            <Spacer size={10} />
            <Text
                content={props.title}
                type={TextTypes.custom}
                fontSize={props.size || 16}
                textColor={props.color}
            />
        </Box>
    )
}

export { Checkbox }
