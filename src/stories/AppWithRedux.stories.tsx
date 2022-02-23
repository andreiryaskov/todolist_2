import React from 'react'
import {Meta, Story} from '@storybook/react/types-6-0';
import AppWithRedux from "../AppWithRedux";
import { ReduxStoreProviderDecorator } from "./decorators/ReduxStoreProviderDecorator";

export default {
    title: 'Todolist/AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator],
} as Meta;

export const Template: Story = () => <AppWithRedux/>;

export const AppWithReduxExample = Template.bind({})