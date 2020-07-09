import React, { MouseEvent } from 'react'
import { Button, ButtonTypes } from './index'
import { withKnobs, text } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs, centered],
}

const Basic = () => {
    const handleCLick = (e: MouseEvent<HTMLButtonElement>): void => {
        console.log(e)
    }
    return (
        <>
            <Button
                onClick={handleCLick}
                bType={ButtonTypes.PRIMARY}
                label={text('label', 'Primary')}
            />
            <Button
                onClick={handleCLick}
                bType={ButtonTypes.SECONDARY}
                label={'Secondary'}
            />
            <Button
                onClick={handleCLick}
                bType={ButtonTypes.TERTIARY}
                label={'Tertiary'}
            />
        </>
    )
}
export { Basic }
