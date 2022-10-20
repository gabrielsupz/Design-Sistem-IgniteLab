import { Envelope, Lock, Password } from 'phosphor-react'
import axios from 'axios'
import { Button } from '../components/Button'
import { CheckBox } from '../components/CheckBox'
import { Heading } from '../components/Heading'
import { Logo } from '../components/logo'
import { TextInput } from '../components/TextInput'
import { Text } from '../components/Text'
import { FormEvent, useState } from 'react'

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  // Para realizar testes, descomente aqui e na stories
  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions'),
      {
        email: 'gabrielsuptitz@gmail.com',
        password: '1213124214'
      }
  }

  return (
    <div className=" flex flex-col w-screen h-screen bg-gray-900 flez items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        {' '}
        <Logo />
        <Heading size="lg" className="mt-4" children="Ignite Lab " />
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>
      <form
        // onSubmit={handleSignIn}
        className="flex flex-col w-full max-w-sm mt-10 items-stretch gap-4"
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3 ">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3 ">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <CheckBox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar-me por 30 dias
          </Text>
        </label>
        <Button type="submit">Entrar na plataforma</Button>
      </form>
      <footer className="flex flex-col gap-4 items-center mt-8">
        <Text asChild size="sm">
          <a className="text-gray-400 underline hover:text-gray-200" href="">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a className="text-gray-400 underline hover:text-gray-200" href="">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  )
}
