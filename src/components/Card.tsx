import { Flex, Image, Text, GridItem, HStack, VStack, Icon } from "@chakra-ui/react";
import {GB} from 'country-flag-icons/react/3x2';

const flagStyles = {
    'width': '30px',
    'height': '30px',
    'border-radius': '50%'
}

export default function Card(){
    return (
        <GridItem w='256px' h='279px'>
            <Image src='/images/continents/north-america.jpg' borderRadius='4px 4px 0 0'/>
            <HStack border='1px solid' borderTop='0' borderColor='yellow.300' borderRadius='0 0 4px 4px' backgroundColor='white' h='106px' paddingX='24px' justify='space-between'>
                <VStack align='flex-start'>
                    <Text fontWeight='semibold' fontSize='20px'>Londres</Text>
                    <Text fontWeight='medium' fontSize='1xl' color='gray.500'>Reino Unido</Text>
                </VStack>
                <Icon as={GB} borderRadius='50%' preserveAspectRatio="none" boxSize={30}/>
            </HStack>
        </GridItem>
    )
}
