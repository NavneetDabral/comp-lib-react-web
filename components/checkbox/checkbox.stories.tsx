import React from 'react'
import { Checkbox } from './index'
import centered from '@storybook/addon-centered/react'
import { withKnobs, select, text, number } from '@storybook/addon-knobs'

export default {
    title: 'Checkbox',
    component: Checkbox,
    decorators: [withKnobs, centered],
}

const Basic = () => (
    <Checkbox
        title={text('title', 'Milk')}
        size={number('size', 16)}
        color={text('color', 'blue')}
        isChecked
    />
)

export { Basic }
