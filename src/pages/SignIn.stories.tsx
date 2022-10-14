import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./SignIn";

import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Pages/SignIn",
  component: SignIn,
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Degite seu e-mail"),
      "email@valido.com"
    );
    userEvent.type(canvas.getByPlaceholderText("******"), "12345678");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() =>
      expect(canvas.getByText("Login realizado!")).toBeInTheDocument()
    );
  },
};
