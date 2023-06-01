import { Button } from "@chakra-ui/react";

interface Props {
  title: string;
  variant?: "outline" | "link" | "solid" | "unstyled";
  colorScheme?: "brand" | "gray";
}

export default function Btn({ variant, colorScheme, title }: Props) {
  return (
    <Button
      variant={variant}
      colorScheme={colorScheme}
      borderRadius="none"
      _before={{
        content: `''`,
        w: "100%",
        h: "100%",
        bg: "black",
        pos: "absolute",
        top: 0,
        left: 0,
        clipPath: "circle(0% at 50% 50%)",
        opacity: 0.1,
        transition: "all .5s ease",
      }}
      _hover={{
        _before: {
          clipPath: "circle(100% at 50% 50%)",
        },
      }}
    >
      {title}
    </Button>
  );
}
