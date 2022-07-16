import {Flex, Grid, HStack, Image, Text, VStack} from '@chakra-ui/react';
import axios from 'axios';
import Card from 'src/components/Card';

type TopCities = {
    name: string,
    country: string,
    code: string,
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
        <Flex w={[375, 375, 1440]} align='center' m='auto' display='column'>
            <Flex h={['150', '150', '500']} align='center' justify='center' maxWidth={1440} w='100%'>
                <Image src={continentInfo.backgroundURL} position={'absolute'} w={[375, 375, 1440]} maxWidth={1440} h={[150, 150, 500]} filter='auto' brightness={0.8} />
                <Flex w={['375px', '375px', '1440px']} h={['150px', '150px', '500px']} position='absolute' align={['center', 'center', 'flex-end']} justify={['center', 'center', 'unset']}>
                    <Text color='gray.50' fontWeight='semibold' fontSize={['3xl', '3xl', '5xl']} mb={[0, 0, 59]} ml={[0, 0, 140]}>{continentInfo.name}</Text>         
                </Flex>
            </Flex>
            <Flex my={['24px', '24px', '80px']} justify='center' gap={["20px", "20px", "30px"]} direction={['column', 'column', 'row']}>
                <Text fontSize={['sm', 'sm', '2xl' ]} w={['100%', '100%', '600px']} textAlign='justify' px='16px'>{continentInfo.description}</Text>
                <HStack spacing={[10, 10, 1]} m={['auto', 'auto', 'unset']}>
                    <VStack spacing={-2} w={['80px', '80px', '160px']}>
                        <Text fontSize={['2xl', '2xl', '5xl']} color='yellow.400' fontWeight='semibold'>{continentInfo.ranking.countries}</Text>
                        <Text fontSize={['xs', 'xs', '2xl']} color='gray.600' fontWeight='semibold'>países</Text>
                    </VStack>
                    <VStack spacing={-2} w={['80px', '80px', '160px']}>
                        <Text fontSize={['2xl', '2xl', '5xl']} color='yellow.400' fontWeight='semibold'>{continentInfo.ranking.languages}</Text>
                        <Text fontSize={['xs', 'xs', '2xl']} color='gray.600' fontWeight='semibold'>línguas</Text>
                    </VStack>
                    <VStack spacing={-2} w={['80px', '80px', '160px']}>
                        <Text fontSize={['2xl', '2xl', '5xl']} color='yellow.400' fontWeight='semibold'>{continentInfo.ranking.cities}</Text>
                        <Text fontSize={['xs', 'xs', '2xl']} color='gray.600' fontWeight='semibold'>cidades +100</Text>
                    </VStack>
                </HStack>
            </Flex>
            <Flex direction='column' align='center'>
                <Text fontSize={['2xl', '2xl', '4xl']} color='gray.600' fontWeight='medium' w={['unset', 'unset', 1060]} >Cidades +100</Text>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(4, 1fr)']} gap={6} my='40px' w={['unset', 'unset', 1060]}>
                    {continentInfo.top_100.map(city => (
                        <Card key={city.name} name={city.name} country={city.country} code={city.code} imageURL={city.imageURL}/>
                    ))}
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

    const url = process.env.FAKE_API_URL + '/continent/' + continent;

    const continentInfo = await axios.get(url).then(res => res.data);

    continentInfo.backgroundURL = '/images/continents/' + continentInfo.id + '.jpg';

    return {
        props: continentInfo
    }
}