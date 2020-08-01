import React, { FC } from 'react'
import { Text , TextTypes } from '../text'

interface CheckBoxProps {
    hide?: boolean
    isChecked:boolean
    title: string
    size?: number
    color?: string
}

const Checkbox: FC<CheckBoxProps> = ({
    hide = false,
    ...props
}: CheckBoxProps) => {
    if (hide) {
        return null
    }
    return (
         
       <Text content={props.title} type={TextTypes.plain} fontSize={props.size}/>
        )
}

export { Checkbox }
