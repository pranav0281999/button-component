import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './Button';

export default {
    title: 'Example/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
    label: 'Button',
    variant: "outline",
};

export const Text = Template.bind({});
Text.args = {
    label: 'Button',
    variant: "text",
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
    label: 'Button',
    disableShadow: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Button',
    disable: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
    label: 'Button',
    startIcon: "add_shopping_cart",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
    label: 'Button',
    endIcon: "add_shopping_cart"
};

export const Small = Template.bind({});
Small.args = {
    label: 'Button',
    size: "sm"
};

export const Medium = Template.bind({});
Medium.args = {
    label: 'Button',
    size: "md"
};

export const Large = Template.bind({});
Large.args = {
    label: 'Button',
    size: "lg"
};

export const ColorDefault = Template.bind({});
ColorDefault.args = {
    label: 'Button',
    color: "default"
};

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
    label: 'Button',
    color: "primary"
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
    label: 'Button',
    color: "secondary"
};

export const ColorDanger = Template.bind({});
ColorDanger.args = {
    label: 'Button',
    color: "danger"
};
