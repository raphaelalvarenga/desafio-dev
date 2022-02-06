import Title from "..";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "shared/components/Title",
    component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args} />;

export const TitleStory = Template.bind({});

TitleStory.args = {
    title: "Título Teste"
};
