import Balance from "..";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "shared/components/Balance",
    component: Balance
} as ComponentMeta<typeof Balance>;

const Template: ComponentStory<typeof Balance> = args => <Balance {...args} />;

export const BalanceStory = Template.bind({});

BalanceStory.args = {
    children: (
        <>
            Saldo em Conta:{" "}
            <span
                style={{
                    color: 1000 < 0 ? "red" : "black"
                }}
            >
                R$ {1000}
            </span>
        </>
    )
};
