import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "../Task";
import {EditableSpan, EditableSpanPropsType} from "../EditableSpan";

export default {
    title: 'Todolist/EditableSpan',
    component: EditableSpan,
    argTypes: {
        onChange: {
            description: 'Value EditableSpanChanged'
        },
        value: {
            defaultValue: 'HTML',
            description: 'Start value EditableSpan'
        }
    },
} as Meta;

export const Template: Story<EditableSpanPropsType> = (args: EditableSpanPropsType) => <EditableSpan {...args}/>;

export const EditableSpanExample = Template.bind({})
EditableSpanExample.args = {
    onChange: action('Value EditableSpan changed')
}