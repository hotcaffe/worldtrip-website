import { Flex, Image, HStack, Divider, Text, VStack } from "@chakra-ui/react";
import Paper from "src/components/Paper";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "src/components/Slider";

export default function Home() {
  return (
    <Flex maxWidth={1440} direction="column" m="auto" mb={20} align="center">
      <Paper />
      <HStack spacing={125} m="auto" marginY={110}>
        <Image src="/images/icons/Nightlife.svg" />
        <Image src="/images/icons/Beach.svg" />
        <Image src="/images/icons/Modern.svg" />
        <Image src="/images/icons/Classic.svg" />
        <Image src="/images/icons/More.svg" />
      </HStack>
      <Divider
        orientation="horizontal"
        w={90}
        m="auto"
        borderColor="gray.900"
        borderWidth={1}
      />
      <Text
        fontSize="4xl"
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
