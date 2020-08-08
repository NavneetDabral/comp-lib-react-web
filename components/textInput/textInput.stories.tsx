import React, { useState } from 'react'
import { TextInput } from './index'
import centered from '@storybook/addon-centered/react'
import { withKnobs, number } from '@storybook/addon-knobs'

export default {
    title: 'TextInput',
    component: TextInput,
    decorators: [withKnobs, centered],
}

const Basic = () => {
    const [value, setValue] = useState('hey')
    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    return (
        <TextInput
            value={value}
            onChange={handleChange}
            maxLength={number('length', 5)}
        />
    )
}

const Password = () => <TextInput type={'password'} />

export { Basic, Password }
