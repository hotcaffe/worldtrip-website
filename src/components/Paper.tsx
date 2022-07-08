import { Flex, Stack, Text, Image } from "@chakra-ui/react";

export default function Paper() {
  return (
    <Flex bgImage='/images/home-background.png' w={1440} h={335} m="auto">
        <Stack spacing={4} marginX='140px' justify="center">
            <Text fontSize='4xl' color={"gray.50"} fontWeight="500">5 Continentes, <br/> infinitas possibilidades.</Text>
            <Text fontSize={20} color={"gray.300"} fontWeight="400">Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou.</Text>
        </Stack>
        <Image src='/images/icons/airplane.svg' position='absolute' marginLeft={850} marginTop={20}/>
    </Flex>
  );
}
