import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./SignIn";

import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

export default {
  title: "Pages/SignIn",
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post("/api/auth/signin", (req, res, ctx) => {
          return res(ctx.json({
            message: "Login realizado!"
          }));
        })
      ]
    }
  },
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
