import { Swiper, SwiperSlide } from "swiper/react";
import { Image, VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

type SliderContent = {
  key: string;
  image: string;
  title: string;
  description: string;
};

interface SliderProps {
  content: SliderContent[];
}

export default function Slider({ content }: SliderProps) {

  const swiperResponsiveStyles = useBreakpointValue({
    base: {
      width: '375px',
      height: '250px',
      "--swiper-navigation-color": "#FFBA08",
      "--swiper-navigation-size": "30px",
      "--swiper-pagination-color": "#FFBA08",
      "--swiper-pagination-bullet-inactive-color": "#999999",
      "--swiper-pagination-bullet-inactive-opacity": "1",
      "--swiper-pagination-bullet-size": "8px",
      "--swiper-pagination-bullet-horizontal-gap": "6px"
    },
    md: {
      width: '700px',
      height: '450px',
      "--swiper-navigation-color": "#FFBA08",
      "--swiper-navigation-size": "30px",
      "--swiper-pagination-color": "#FFBA08",
      "--swiper-pagination-bullet-inactive-color": "#999999",
      "--swiper-pagination-bullet-inactive-opacity": "1",
      "--swiper-pagination-bullet-size": "16px",
      "--swiper-pagination-bullet-horizontal-gap": "6px"
    },
    xl: {
      width: '1240px',
      height: '450px',
      "--swiper-navigation-color": "#FFBA08",
      "--swiper-navigation-size": "30px",
      "--swiper-pagination-color": "#FFBA08",
      "--swiper-pagination-bullet-inactive-color": "#999999",
      "--swiper-pagination-bullet-inactive-opacity": "1",
      "--swiper-pagination-bullet-size": "16px",
      "--swiper-pagination-bullet-horizontal-gap": "6px"
    }
  })

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay = {{
        delay: 5000
      }}
      className="mySwiper"
      style={swiperResponsiveStyles}
    >
        {content.map((slider) => (
          <SwiperSlide key={slider.key}>
            <a href={`/continent/${slider.key}`}>
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
                <Text fontSize={["2xl", "2xl", "5xl"]} fontWeight="bold">
                  {slider.title}
                </Text>
                <Text fontSize={["sm", "sm", "2xl"]} fontWeight="bold" color="gray.300">
                  {slider.description}
                </Text>
              </VStack>
            </a>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
