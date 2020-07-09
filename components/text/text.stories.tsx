import React from 'react'
import { Text } from './index'
import centered from '@storybook/addon-centered/react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { TextTypes } from './types'

export default {
    title: 'Text',
    component: Text,
    decorators: [withKnobs, centered],
}

const Basic = () => (
    <Text
        content={text('content', 'hello storybook')}
        type={select('TextType', Object.values(TextTypes), TextTypes.h1)}
    />
)

export { Basic }
