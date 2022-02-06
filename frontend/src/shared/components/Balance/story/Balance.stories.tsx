import Balance from "..";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    Balance: "shared/components/Balance",
    component: Balance
} as ComponentMeta<typeof Balance>;

const Template: ComponentStory<typeof Balance> = args => <Balance {...args} />;

export const BalanceStory = Template.bind({});

BalanceStory.args = {};
