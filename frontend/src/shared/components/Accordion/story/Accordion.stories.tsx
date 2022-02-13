import Accordion from "..";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "shared/components/Accordion",
    component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => (
    <Accordion {...args} />
);

export const AccordionStory = Template.bind({});

AccordionStory.args = {};
