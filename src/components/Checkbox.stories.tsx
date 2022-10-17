import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    }
  },
  decorators: [
    (Story) => (
      <label htmlFor="remember" className="flex items-center space-x-2">
        <Checkbox id="remember" />
        <Text size="sm">Remember-me</Text>
      </label>
    ),
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
