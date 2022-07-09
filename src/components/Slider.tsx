import { Swiper, SwiperSlide } from "swiper/react";
import { Image, VStack, Text } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SwiperStyles = {
  width: "1240px",
  height: "450px",
  "--swiper-navigation-color": "#FFBA08",
  "--swiper-navigation-size": "30px",
  "--swiper-pagination-color": "#FFBA08",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "16px",
  "--swiper-pagination-bullet-horizontal-gap": "6px"
};

type SliderContent = {
  image: string;
  title: string;
  description: string;
};

interface SliderProps {
  content: SliderContent[];
}

export default function Slider({ content }: SliderProps) {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
      style={SwiperStyles}
    >
      {content.map((slider) => (
        <SwiperSlide key={slider.title}>
          <Image
            src={slider.image}
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
              {slider.title}
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="gray.300">
              {slider.description}
            </Text>
          </VStack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
