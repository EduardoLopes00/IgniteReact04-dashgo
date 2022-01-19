import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}


export function Input({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

            <ChakraInput
              name={name}
              id={name}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
              {...rest} //Sinalizing that i will use all the other properties provided by ChakraInput. In this case, the propery "type"
            />

          </FormControl>
    )

}