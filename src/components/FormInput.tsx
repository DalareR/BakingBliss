import { Box, Divider, Input, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  as?: boolean;
  variants?: any;
}

export default function FormInput({
  name,
  label,
  placeholder,
  as,
  variants,
}: Props) {
  return (
    <Box as={as ? motion.div : undefined} variants={as ? variants : undefined}>
      <label htmlFor={name}>
        <Text fontWeight="bold">{label}</Text>
      </label>
      <Input
        id={name}
        variant="unstyled"
        m="1"
        placeholder={placeholder}
        _placeholder={{ color: "rgba(0,0,0, .6)" }}
      />
      <Divider borderColor="gray" m="5% 0" />
    </Box>
  );
}
