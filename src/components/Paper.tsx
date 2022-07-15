import { Flex, Stack, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export default function Paper() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  })

  return (
    <Flex bgImage='/images/home-background.png' w="100%" h={["200", "200", "335"]}>
        <Stack spacing={4} marginX={['17px', '17px', '140px']} justify="center">
            <Text fontSize={['2xl', '2xl', '4xl']} color={"gray.50"} fontWeight="500">5 Continentes, <br/> infinitas possibilidades.</Text>
            <Text fontSize={['14', '14', '20']} color={"gray.300"} fontWeight="400">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </Stack>
        {!!isWideVersion && (<Image src='/images/icons/airplane.svg' position='absolute' marginLeft={850} marginTop={20}/>)}
    </Flex>
  );
}
