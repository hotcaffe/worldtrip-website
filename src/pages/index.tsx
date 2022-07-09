import { Flex, Image, HStack, Divider, Text, VStack } from "@chakra-ui/react";
import Paper from "src/components/Paper";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        background="/images/europe.jpg"
        modules={[Navigation]}
        className="mySwiper"
        style={{
          width: "1240px",
          height: "450px",
          "--swiper-navigation-color": "#FFBA08", //@ts-ignore
        }}
      >
        <SwiperSlide>
          <Image
            src="/images/europe.jpg"
            height="100%"
            width="100%"
            filter="auto"
            brightness={0.5}
          />
          <VStack
            position="absolute"
            top={0}
            w="100%"
            h="100%"
            justifyContent="center"
            spacing={2}
            color="white"
          >
            <Text fontSize="5xl" fontWeight="bold">
              Europa
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="gray.300">
              O continente mais antigo.
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/asia.jpg"
            height="100%"
            width="100%"
            filter="auto"
            brightness={0.5}
          />
          <VStack
            position="absolute"
            top={0}
            w="100%"
            h="100%"
            justifyContent="center"
            spacing={2}
            color="white"
          >
            <Text fontSize="5xl" fontWeight="bold">
              Asia
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="gray.300">
              Conheça a cultura milenar oriental.
            </Text>
          </VStack>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
