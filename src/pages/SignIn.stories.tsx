import { Meta, StoryObj } from '@storybook/react'

import { SignIn } from './SignIn'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {}
} as Meta
// export const Normal: StoryObj = {}
// export const Filled: StoryObj = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement)

//     userEvent.type(
//       canvas.getByPlaceholderText('Digite seu e-mail'),
//       'gabrielsuptitz@gmail.com'
//     )

//     userEvent.type(canvas.getByPlaceholderText('Digite sua senha'), '12312343')

//     userEvent.click(canvas.getByRole('button'))

//     await waitFor(() => {
//       return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
//     })
//   }
// }
