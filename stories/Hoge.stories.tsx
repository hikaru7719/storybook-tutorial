import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Hoge, HogeProps } from "./Hoge";

export default {
  title: "Example/Hoge",
  component: Hoge,
} as Meta;

const Template: Story<HogeProps> = (args) => <Hoge {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: "world",
};
