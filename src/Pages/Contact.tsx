import {
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//local
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";

const variantParent = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const variantChildren = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: "100%",
  },
};

const schema = z.object({
  name: z.string().nonempty("Required").min(3, "Min characters required!"),
  email: z.string().email("Not valid email").nonempty("Required!"),
  subject: z
    .string()
    .nonempty("Required!")
    .min(5, "Min 5 characters required!"),
  message: z.string().nonempty("Required").min(5, "Min 5 characters required!"),
});

type FormType = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormType>({ resolver: zodResolver(schema) });
  const toast = useToast();

  const onSubmit = (value: FormType) => {
    value && toast({ title: "Email successfully sent!", status: "success" });
    reset();
  };

  return (
    <Grid
      w={{ md: "120ch" }}
      gridTemplateAreas={{ base: `'info' 'form'`, md: `'form info'` }}
    >
      <GridItem
        as={motion.div}
        variants={variantParent}
        initial="initial"
        animate="animate"
        exit="exit"
        p="5"
        gridArea="info"
      >
        <VStack align="start">
          <Heading
            as={motion.div}
            variants={variantChildren}
            display={{ base: "block", md: "none" }}
            mb="3"
          >
            How can we help?
          </Heading>
          <VStack as={motion.div} variants={variantChildren} align="start">
            <Text fontSize="md" fontWeight="bold">
              CONTACT DETAILS
            </Text>
            <Heading
              as={motion.div}
              variants={variantChildren}
              size={{ base: "xs", md: "md" }}
            >
              info@bakerybliss.com
            </Heading>
            <Heading
              as={motion.div}
              variants={variantChildren}
              size={{ base: "xs", md: "md" }}
            >
              +1(717)-123-456
            </Heading>
          </VStack>
        </VStack>
        <Divider display={{ md: "none" }} borderColor="black" m="15% 0" />
      </GridItem>
      <GridItem
        as={motion.div}
        variants={variantParent}
        initial="initial"
        animate="animate"
        exit="exit"
        p="5"
        gridArea="form"
      >
        <Heading
          as={motion.div}
          variants={variantChildren}
          display={{ base: "none", md: "block" }}
          mb="10"
        >
          How can we help?
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            as={true}
            variants={variantChildren}
            register={register}
            error={errors}
            name="name"
            label="What is you Name?"
            placeholder="John Smith *"
          />
          <FormInput
            as={true}
            variants={variantChildren}
            register={register}
            error={errors}
            name="email"
            label="What is you email?"
            placeholder="john@gmail.com *"
          />
          <FormInput
            as={true}
            variants={variantChildren}
            register={register}
            error={errors}
            name="subject"
            label="What service are you looking for?"
            placeholder="Order a dozen of cookie..."
          />
          <FormTextArea
            as={true}
            variants={variantChildren}
            register={register}
            error={errors}
            name="message"
            label="Your message"
            placeholder="Hello Dal, can you help me with..."
          />
          <Button
            as={motion.button}
            variants={variantChildren}
            type="submit"
            colorScheme="brand"
            cursor="pointer"
          >
            Send
          </Button>
        </form>
      </GridItem>
    </Grid>
  );
}
