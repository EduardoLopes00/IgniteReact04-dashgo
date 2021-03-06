import { Box, Flex, Heading, Divider, VStack, HStack, SimpleGrid, Button } from "@chakra-ui/react";
import { FormInput } from "../../components/Form/FormInput";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}
  
const CreateUserFormSchema = yup.object().shape({
name: yup.string().required('Nome obrigatório'),
email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
password_confirmation: yup.string().oneOf([ //This method says that the field must be equal to the following values
    null, yup.ref('password')
], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
    const routes = useRouter()

    const createUser = useMutation(async (user: CreateUserFormData) => { 
        const response = await api.post('/users', {
            user: {
                ...user,
                create_at: new Date()
            }
        })

        return response.data.user
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('users') //Invalidate all the cache regarding to the user list.
        }
    })
    
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    })
    
    const { errors } = formState

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await createUser.mutateAsync(values)

        routes.push('/users')
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <Box 
                    as="form" 
                    flex="1" 
                    borderRadius={8} 
                    bgColor="gray.800" 
                    p={["6", "8"]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing = "8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <FormInput name="name" label="Nome completo" error={errors.name}  {...register('name')}/>
                            <FormInput name="email" type="email" label="E-mail" error={errors.email} {...register('email')}/>   
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <FormInput name="password" type="password" label="Senha" error={errors.password} {...register('password')}/>
                            <FormInput name="password_confirmation" type="password" error={errors.password_confirmation} label="Confirmação de senha" {...register('password_confirmation')}/>  
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4" >
                        <Link href="/users" as="a">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                        </Link>
                        <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">Salvar</Button>

                        </HStack>

                    </Flex>


                </Box> 

            </Flex>
        </Box>
    )
}