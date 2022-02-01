import { FormErrorMessage, FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form';
interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}


const FormInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, label, error = null, ...rest }: InputProps, ref) => {


    return (
        <FormControl isInvalid={!!error}>
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
              ref={ref}
              {...rest} //Sinalizing that i will use all the other properties provided by ChakraInput. In this case, the propery "type"
            />

            { error && (
              <FormErrorMessage>
                {error.message}
              </FormErrorMessage>
            ) }

          </FormControl>
    )

}

export const FormInput = forwardRef(FormInputBase) //This allows us to pass Ref's to a chiild component