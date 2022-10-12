import * as CheckboxPrinmitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckboxProps {
}

export function Checkbox({}: CheckboxProps) {

  return (
    <CheckboxPrinmitive.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'>
      <CheckboxPrinmitive.Indicator asChild>
        <Check weight="bold" className='w-5 h-5 text-cyan-500' />
      </CheckboxPrinmitive.Indicator>

    </CheckboxPrinmitive.Root>
  );
}
