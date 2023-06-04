import { Textarea, Text, Box, Divider, FormLabel } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  label: string;
  register: any;
  error: any;
  placeholder: string;
  as?: boolean;
  variants?: any;
}

export default function FormTextArea({
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
      <Textarea
        {...register(name)}
        variant="unstyled"
        h="150px"
        resize="none"
        placeholder={placeholder}
        _placeholder={{ color: "rgba(0,0,0, .6)" }}
      />
      {error[name] && <Text color="red">{error[name].message}</Text>}
      <Divider borderColor="black" m="5% 0" />
    </Box>
  );
}
