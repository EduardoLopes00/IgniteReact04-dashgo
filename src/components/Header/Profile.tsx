import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile( { showProfileData = true }: ProfileProps ) {
    return(
        <Flex align="center">
            { showProfileData && (
                
                <Box mr="4" textAlign="right">
                    <Text>Eduardo Lopes</Text>
                    <Text color="gray.300" fontSize="small">
                        eduardoloppes@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Eduardo Lopes" src="https://github.com/eduardolopes00.png" />
        </Flex>
    )
}