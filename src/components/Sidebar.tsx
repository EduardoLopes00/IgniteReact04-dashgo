import { Box, VStack, Text, Link, Icon } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri"

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <VStack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
                    <VStack spacing="4" mt="8" align="stretch">
                        <Link display="flex" align="center">
                            <Icon as={RiDashboardLine} fontSize="28" />
                            <Text ml="4" fontWeight="medium">Dashboard</Text> 
                        </Link>
                        <Link display="flex" align="center">
                            <Icon as={RiContactsLine} fontSize="28" />
                            <Text ml="4" fontWeight="medium">Usuários</Text> 
                        </Link>

                    </VStack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">AUTOMAÇÃO</Text>
                    <VStack spacing="4" mt="8" align="stretch">
                        <Link display="flex" align="center">
                            <Icon as={RiInputMethodLine} fontSize="28" />
                            <Text ml="4" fontWeight="medium">Formulários</Text> 
                        </Link>
                        <Link display="flex" align="center">
                            <Icon as={RiGitMergeLine} fontSize="28" />
                            <Text ml="4" fontWeight="medium">Automação</Text> 
                        </Link>

                    </VStack>
                </Box>
            </VStack>

        </Box>
    )
}