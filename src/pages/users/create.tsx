import { Box, Flex, Heading, Divider, VStack, HStack, SimpleGrid, Button } from "@chakra-ui/react";
import { FormInput } from "../../components/Form/FormInput";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing = "8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <FormInput name="name" label="Nome completo" />
                            <FormInput name="email" type="email" label="E-mail" />   
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <FormInput name="password" type="password" label="Senha" />
                            <FormInput name="password_confirmation" type="password" label="Confirmação de senha" />  
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4" >
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>

                        </HStack>

                    </Flex>


                </Box> 

            </Flex>
        </Box>
    )
}