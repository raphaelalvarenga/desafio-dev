import Content from "..";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "layout/Content",
    component: Content
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = args => <Content {...args} />;

export const ContentStory = Template.bind({});

ContentStory.args = {};
