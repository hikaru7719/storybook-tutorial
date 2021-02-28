import React from "react";
import { Button } from "./Button";

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Primary",
};
