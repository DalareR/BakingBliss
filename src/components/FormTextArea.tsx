import { Textarea, Text, Box, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  label: string;
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
}: Props) {
  return (
    <Box as={as ? motion.div : undefined} variants={as ? variants : undefined}>
      <label htmlFor={name}>
        <Text fontWeight="bold">{label}</Text>
      </label>
      <Textarea
        variant="unstyled"
        h="150px"
        resize="none"
        placeholder={placeholder}
        _placeholder={{ color: "rgba(0,0,0, .6)" }}
      />
      <Divider borderColor="black" m="5% 0" />
    </Box>
  );
}
