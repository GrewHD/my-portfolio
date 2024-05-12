import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Button } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
} as Meta

export const DefaultStory: StoryFn = () => {
    return (
        <div className='bg-slate-100'>
            <Button />
            <Button variant='tertiary' />
        </div>
    )
}

DefaultStory.storyName = 'Default'
