import React from 'react'
import { TextInput } from './index'
import centered from '@storybook/addon-centered/react'
import { withKnobs } from '@storybook/addon-knobs'

export default {
    title: 'TextInput',
    component: TextInput,
    decorators: [withKnobs, centered],
}

const Basic = () => <TextInput value={'hey'} />

const Password = () => <TextInput type={'password'} />

export { Basic, Password }
