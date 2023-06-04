import { Box, Divider, FormLabel, Input, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  as?: boolean;
  variants?: any;
  register: any;
  error: any;
}

export default function FormInput({
  name,
  label,
  placeholder,
  as,
  variants,
  register,
  error,
}: Props) {
  return (
    <Box as={as ? motion.div : undefined} variants={as ? variants : undefined}>
      <FormLabel htmlFor={name} fontWeight="bold">
        {label}
      </FormLabel>
      <Input
        {...register(name)}
        variant="unstyled"
        m="1"
        placeholder={placeholder}
        _placeholder={{ color: "rgba(0,0,0, .6)" }}
      />
      {error[name] && <Text color="red">{error[name].message}</Text>}
      <Divider borderColor="gray" m="5% 0" />
    </Box>
  );
}
