import { clsx } from 'clsx'
import { ReactNode } from 'react'
import * as CheckboxPrimitiv from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckBoxProps {}

export function CheckBox({}: CheckBoxProps) {
  return (
    <CheckboxPrimitiv.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded ">
      <CheckboxPrimitiv.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitiv.Indicator>
    </CheckboxPrimitiv.Root>
  )
}
