import React, { MouseEvent } from 'react'
import { Button } from './index'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
}

const Basic = () => {
    const handleCLick = (e: MouseEvent<HTMLButtonElement>): void => {
        console.log(e)
    }
    return <Button onClick={handleCLick} label={text('lable', 'Submit')} />
}
export { Basic }
