import { Box, VStack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface NavSectionProps {
    title: String;
    children: ReactNode
}

export function NavSection( { title, children }: NavSectionProps ) {
    return (
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
            <VStack spacing="4" mt="8" align="stretch">
                {children}

            </VStack>
        </Box>
    )
}