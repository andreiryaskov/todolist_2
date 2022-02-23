import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "../Task";

export default {
    title: 'Todolist/Task',
    component: Task
} as Meta;

const changeTaskStatusCallback = action('Status changed insisde Task')
const changeTaskTitleCallback = action('Title changed insisde Task')
const removeTaskCallback = action('Remove Button inside Task Clicked')

export const Template: Story<TaskPropsType> = (args: TaskPropsType) => <Task {...args}/>;

const baseArgs = {
    changeTaskStatus: changeTaskStatusCallback,
    changeTaskTitle: changeTaskTitleCallback,
    removeTask: removeTaskCallback
}

export const TaskIsDoneExample = Template.bind({})
TaskIsDoneExample.args = {
    ...baseArgs,
    task: {id: '1', isDone: true, title: 'JS'},
    todolistId: 'todolistId1'
}

export const TaskIsNotDoneExample = Template.bind({})
TaskIsNotDoneExample.args = {
    ...baseArgs,
    task: {id: '1', isDone: false, title: 'JS'},
    todolistId: 'todolistId1'
}