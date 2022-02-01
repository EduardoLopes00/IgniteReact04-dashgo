import { Flex, Button, VStack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormInput } from '../components/Form/FormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type SignInFormData = {
  email: string,
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('Formato de e-mail inválido'),
  password: yup.string().required('Senha é obrigatória')
})

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm(
    {
      resolver: yupResolver(signInFormSchema)
    }
  );

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {

  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <VStack spacing="4">
            <FormInput 
              name="email" 
              label="E-mail" 
              type="email" 
              error={errors.email}
              {...register('email')} />
            <FormInput 
              name="password" 
              label="Senha" 
              type="password" 
              error={errors.password}
              {...register('password')}/>
        </VStack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>

    </Flex>

  )
}
