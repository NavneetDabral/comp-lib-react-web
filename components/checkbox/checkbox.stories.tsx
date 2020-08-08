import React, { useState } from 'react'
import { Checkbox } from './index'
import centered from '@storybook/addon-centered/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

export default {
    title: 'Checkbox',
    component: Checkbox,
    decorators: [withKnobs, centered],
}

const Basic = () => {
    const [isChecked, setChecked] = useState(false)
    const handleChange = (value: string) => {
        console.log(value)
        setChecked(!isChecked)
    }
    return (
        <Checkbox
            title={text('title', '2020')}
            size={number('size', 32)}
            color={text('color', '#714cfe')}
            isChecked={isChecked}
            onChange={handleChange}
        />
    )
}

export { Basic }
