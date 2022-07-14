import {Flex, Grid, GridItem, HStack, Image, List, ListItem, Text, VStack} from '@chakra-ui/react';
import axios from 'axios';
import Card from 'src/components/Card';

type TopCities = {
    name: string,
    country: string,
    imageURL: string
}

interface ContinentProps {
    id: string;
    name: string;
    description: string;
    backgroundURL: string;
    ranking: {
        countries: string,
        languages: string,
        cities: string
    };
    top_100: TopCities[];
}

export default function Continent(continentInfo: ContinentProps){
    return (
        <Flex maxWidth={1440} align='center' m='auto' display='column'>
            <Flex h='500'>
                <Image src={continentInfo.backgroundURL} position='absolute' w={1440} h={500} filter='auto' brightness={0.8}/>
                <Flex w='1440px' h='500px' position='absolute' align='flex-end'>
                    <Text color='gray.50' fontWeight='semibold' fontSize='5xl' mb={59} ml={140}>{continentInfo.name}</Text>         
                </Flex>
            </Flex>
            <HStack spacing={70} my='80px' justify='center'>
                <Text fontSize='2xl' w='600px' textAlign='justify'>{continentInfo.description}</Text>
                <HStack spacing={10}>
                    <VStack spacing={-2}>
                        <Text fontSize='5xl' color='yellow.400' fontWeight='semibold'>{continentInfo.ranking.countries}</Text>
                        <Text fontSize='2xl' color='gray.600' fontWeight='semibold'>países</Text>
                    </VStack>
                    <VStack spacing={-2}>
                        <Text fontSize='5xl' color='yellow.400' fontWeight='semibold'>{continentInfo.ranking.languages}</Text>
                        <Text fontSize='2xl' color='gray.600' fontWeight='semibold'>línguas</Text>
                    </VStack>
                    <VStack spacing={-2}>
                        <Text fontSize='5xl' color='yellow.400' fontWeight='semibold'>{continentInfo.ranking.cities}</Text>
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

export function getStaticPaths(){
    return {
        paths: [
            {params: {continent: 'as'}},
            {params: {continent: 'eu'}}, 
            {params: {continent: 'sa'}}, 
            {params: {continent: 'na'}}, 
            {params: {continent: 'oc'}}, 
            {params: {continent: 'af'}}
        ],
        fallback: false
    }
}


export async function getStaticProps({params}){
    const {continent} = params;
    const url = process.env.FAKE_API_URL + '/continent/' + continent

    const continentInfo = await axios.get(url).then(res => res.data)

    continentInfo.backgroundURL = '/images/continents/' + continentInfo.id + '.jpg'

    return {
        props: continentInfo
    }
}