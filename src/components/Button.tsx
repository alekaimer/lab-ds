import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  // size: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Cont = asChild ? Slot : "button";

  return (
    <Cont
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
    >
      {children}
    </Cont>
  );
}
