import Button from "..";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "shared/components/Button",
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
    <Button {...args}>Salvar</Button>
);

export const ButtonStory = Template.bind({});
ButtonStory.args = {
    variant: "primary"
};
