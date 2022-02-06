import Topbar from "..";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "layout/Topbar",
    component: Topbar
} as ComponentMeta<typeof Topbar>;

const Template: ComponentStory<typeof Topbar> = args => <Topbar {...args} />;

export const TopbarStory = Template.bind({});
TopbarStory.args = {};
