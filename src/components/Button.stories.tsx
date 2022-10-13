import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Lorem",
    asChild: false,
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    }
  }
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  argTypes: {
    
  }
};
export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: <a href="#" target="_blank w-full">Custom component with your tag</a>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    }
  },
};