import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack spacing={4}>
      <VStack
        spacing={3}
        align="stretch"
        borderRadius="lg"
        overflow="hidden"
        bg={"white"}
        color="blackAlpha.800"
      >
        <Image src={imageSrc} borderRadius="lg" borderWidth="0" />

        <Heading paddingX={2} as="h4" size="md">
          {title}
        </Heading>
        <Text paddingX={2} fontSize="sm" color={"gray"}>
          {description}
        </Text>
        <Heading paddingX={2} pb={2} as="h6" size="xs">
          See More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </Heading>
      </VStack>
    </HStack>
  );
};

export default Card;
