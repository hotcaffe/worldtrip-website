import { Flex, Image, HStack, Divider, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import Paper from "src/components/Paper";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "src/components/Slider";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: true,
    md: false
  })

  return (
    <Flex maxWidth={[375,375,1440]} w={[375,375,1440]} direction="column" m="auto" mb={20} align="center">
      <Paper />
      <HStack spacing={['80px', '50px', '5', '5', '125']} m="auto" marginY={['36px', '36px', '110px']} align='flex-start'>
        {!isWideVersion ? (
          <>
            <Image src="/images/icons/Nightlife.svg" />
            <Image src="/images/icons/Beach.svg" />
            <Image src="/images/icons/Modern.svg" />
            <Image src="/images/icons/Classic.svg" />
            <Image src="/images/icons/More.svg" />
          </>
        ) : (
          <>
            <VStack align='flex-start'>
              <Text fontSize='lg' fontWeight='medium'><CheckCircleIcon color='yellow.400'/> vida noturna</Text>
              <Text fontSize='lg' fontWeight='medium'><CheckCircleIcon color='yellow.400'/> praia</Text>
              <Text fontSize='lg' fontWeight='medium'><CheckCircleIcon color='yellow.400'/> moderno</Text>
            </VStack>
            <VStack align='flex-start'>
              <Text fontSize='lg' fontWeight='medium'><CheckCircleIcon color='yellow.400'/> clássico</Text>
              <Text fontSize='lg' fontWeight='medium'><CheckCircleIcon color='yellow.400'/> e mais...</Text>
            </VStack>
          </>
        )}
      </HStack>
      <Divider
        orientation="horizontal"
        w={90}
        m="auto"
        borderColor="gray.900"
        borderWidth={1}
      />
      <Text
        fontSize={["xl", "xl", "4xl"]}
        textAlign="center"
        fontWeight="medium"
        color="gray.700"
        marginY="52px"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Text>
      <Slider content={[{
        key: 'eu',
        image: '/images/continents/eu.jpg',
        title: 'Europa',
        description: 'O continente mais antigo.'
      }, {
        key: 'as',
        image: '/images/continents/as.jpg',
        title: 'Asia',
        description: 'A cultura milenar oriental.'
      }, {
        key: 'af',
        image: '/images/continents/af.jpg',
        title: 'Africa',
        description: 'A diversidade na natureza.'
      }, {
        key: 'na',
        image: '/images/continents/na.jpg',
        title: 'America do Norte',
        description: 'O centro do novo mundo.'
      }, {
        key: 'sa',
        image: '/images/continents/sa.jpg',
        title: 'America do Sul',
        description: 'A diversidade de povos e culturas.'
      }, {
        key: 'oe',
        image: '/images/continents/oc.jpg',
        title: 'Oceânia',
        description: 'O ultimo continente descoberto.'
      }]}/>
    </Flex>
  );
}
