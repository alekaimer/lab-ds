import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes } from "react";

export interface TextInputRootProps {
  children: React.ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className={
        "flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 overflow-hidden"
      }
    >
      {children}
    </div>
  );
}

export interface TextInputIcon {
  children: React.ReactNode;
}

function TextInputIcon({ children }: TextInputIcon) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  );
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
