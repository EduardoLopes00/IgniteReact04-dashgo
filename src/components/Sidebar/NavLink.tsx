import { Text, Link as ChakraLink, Icon, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { ActiveLink } from '../ActiveLink'

import { ElementType } from 'react'

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string
    href: string
}

export function NavLink( { icon, children, href, ...rest }: NavLinkProps ) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="28" />
                <Text ml="4" fontWeight="medium">{children}</Text> 
            </ChakraLink>
        </ActiveLink>
    )
}