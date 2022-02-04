import { Box, Spinner, Flex, Heading, Button, Icon, Text, Table, Thead, Tbody, Th, Tr, Td, Checkbox, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from 'next/link'
import { useEffect } from "react";
import { useQuery } from "react-query";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const query = useQuery('users', async () => {
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json()

        const users: User[] = data.users.map((user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt: new Date(user.createdAt).toLocaleDateString('pt-Br', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
            }
            
        });

        return users;
    })

    console.log(query);

    const { data, isLoading, error } = query;   

    const teste = data?.map(user => {
        return {
            id: user.id,
            name2: user.name,
            email2: user.email,
            createdAt2: user.createdAt
        }


    })

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        
                        <Link href="users/create" >
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                                cursor="pointer"
                            >
                                Criar novo               
                            </Button>
                        </Link>
                    </Flex>

                    
                    {   isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter os usuários!</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha" >
                                <Thead>
                                    <Tr>
                                        <Th px= {["4", "4", "6"]} color="gray.300" width="8"> 
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        { isWideVersion && <Th>Data de cadastro</Th> }
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map(user => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px= {["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink" />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight="bold">{user.name}</Text>
                                                        <Text fontSize="sm" color="gray.300">{user.email}</Text>

                                                    </Box>
                                                </Td>
                                                { isWideVersion && <Td>{user.createdAt}</Td> }
                                                <Td>
                                                    {isWideVersion && 
                                                        <Button
                                                            as="a"
                                                            size="sm"
                                                            fontSize="sm"
                                                            colorScheme="pink"
                                                            leftIcon={<Icon as={RiPencilLine} fontSize="18"/>}
                                                        >  
                                                            Editar
                                                        </Button> 
                                                    }
                                                </Td>
                                            </Tr>
                                        )
                                    }) }
                                </Tbody>
                            </Table>

                            <Pagination />
                        </>
                    )}

                </Box> 
                
            </Flex>
        </Box>
    )
}