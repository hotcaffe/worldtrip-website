import {Flex, Grid, GridItem, HStack, Image, List, ListItem, Text, VStack} from '@chakra-ui/react';
import Card from 'src/components/Card';

interface ContinentProps {
    backgroundImage: string;
}

export default function Continent({backgroundImage }: ContinentProps){
    return (
        <Flex maxWidth={1440} align='center' m='auto' display='column'>
            <Flex h='500'>
                <Image src='/images/continents/asia.jpg' position='absolute' w={1440} h={500} filter='auto' brightness={0.8}/>
                <Flex w='1440px' h='500px' position='absolute' align='flex-end'>
                    <Text color='gray.50' fontWeight='semibold' fontSize='5xl' mb={59} ml={140}>Asia</Text>         
                </Flex>
            </Flex>
            <HStack spacing={70} my='80px' justify='center'>
                <Text fontSize='2xl' w='600px' textAlign='justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime qui voluptate animi aut repellat, saepe praesentium, quod, corporis non hic deserunt beatae libero officia porro excepturi provident cupiditate iure vel!</Text>
                <HStack spacing={10}>
                    <VStack spacing={-2}>
                        <Text fontSize='5xl' color='yellow.400' fontWeight='semibold'>50</Text>
                        <Text fontSize='2xl' color='gray.600' fontWeight='semibold'>países</Text>
                    </VStack>
                    <VStack spacing={-2}>
                        <Text fontSize='5xl' color='yellow.400' fontWeight='semibold'>60</Text>
                        <Text fontSize='2xl' color='gray.600' fontWeight='semibold'>línguas</Text>
                    </VStack>
                    <VStack spacing={-2}>
                        <Text fontSize='5xl' color='yellow.400' fontWeight='semibold'>27</Text>
                        <Text fontSize='2xl' color='gray.600' fontWeight='semibold'>cidades +100</Text>
                    </VStack>
                </HStack>
            </HStack>
            <Flex direction='column' align='center'>
                <Text fontSize='4xl' color='gray.600' fontWeight='medium' w={1060} >Cidades +100</Text>
                <Grid templateColumns='repeat(4, 1fr)' gap={6} my='40px' w={1060}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Grid>
            </Flex>
        </Flex>
    )
}