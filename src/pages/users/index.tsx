import { Box, Spinner, Flex, Heading, Button, Icon, Text, Table, Thead, Tbody, Th, Tr, Td, Checkbox, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from 'next/link'
import { useEffect } from "react";
import { useQuery } from "react-query";

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const query = useQuery('users', async () => {
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json()

        return data;
    })

    console.log(query);

    useEffect(() => {
        fetch('https://localhost:3000/apiFake/users').then(response => response.json())
                                                 .then(data => data)
    }, [])
    
    const { data, isLoading, error } = query;   

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

                    

                </Box> 
                
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
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td px= {["4", "4", "6"]}>
                                        <Checkbox colorScheme="pink" />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">Eduardo Lopes</Text>
                                            <Text fontSize="sm" color="gray.300">eduardo.toworkstudy@gmail.com</Text>

                                        </Box>
                                    </Td>
                                    { isWideVersion && <Td>  26 de janeiro de 2021</Td> }
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
                            </Tbody>
                        </Table>

                        <Pagination />
                    </>
                )

                }
            </Flex>
        </Box>
    )
}