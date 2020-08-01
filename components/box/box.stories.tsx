import React from 'react'
import { Box } from './index'
import { Text, TextTypes } from '../text'
import centered from '@storybook/addon-centered/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Box',
    component: Box,
    decorators: [withKnobs, centered],
}

const Basic = () => <Box style={styles.container}>{'Hi Storybook'}</Box>

const BoxNoFeedback = () => (
    <Box style={styles.container} onClick={action('box clicked')}>
        {'Hi Storybook'}
    </Box>
)

const BoxFeedback = () => (
    <Box
        style={styles.container}
        overlayColor={text('overlay-color', '#EEEEEE')}
        onClick={action('box clicked')}
    >
        <Text content={'Hi'} type={TextTypes.strong}></Text>
        <Text content={' Storybook'} type={TextTypes.strong}></Text>
    </Box>
)

const styles = {
    container: {
        border: ' solid 1px black',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
    },
}

export { Basic, BoxNoFeedback, BoxFeedback }
