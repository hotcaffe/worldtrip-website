import { Image, Text, GridItem, HStack, VStack, Icon } from "@chakra-ui/react";
import * as flag from 'country-flag-icons/react/3x2';

interface CardProps {
    name: string,
    country: string,
    code: string,
    imageURL: string
}

export default function Card({name, country, code, imageURL}: CardProps){
    return (
        <GridItem w='256px' h='279px'>
            <Image src={imageURL} borderRadius='4px 4px 0 0' h="173px" w="256px"/>
            <HStack border='1px solid' borderTop='0' borderColor='yellow.300' borderRadius='0 0 4px 4px' backgroundColor='white' h='106px' paddingX='24px' justify='space-between'>
                <VStack align='flex-start'>
                    <Text fontWeight='semibold' fontSize='20px'>{name}</Text>
                    <Text fontWeight='medium' fontSize='1xl' color='gray.500'>{country}</Text>
                </VStack>
                <Icon as={flag[code]} borderRadius='50%' preserveAspectRatio="none" boxSize={30}/>
            </HStack>
        </GridItem>
    )
}
