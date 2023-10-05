import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

// настройки слайдера
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 2,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  const cards = [
    'https://czn.mos.ru/image?file=/Cms_Data/DistribContent/Public/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/mos-banner-carier-advising.png',
    'https://czn.mos.ru/image?file=/Cms_Data/DistribContent/Public/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/mos-banner-open-business.png',

    'https://czn.mos.ru/image?file=/Cms_Data/DistribContent/Public/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/mos-banner-first-job.png',
    'https://czn.mos.ru/image?file=/Cms_Data/DistribContent/Public/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/mos-banner-tests.png',

    'https://czn.mos.ru/image?file=/Cms_Data/DistribContent/Public/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/mos-banner-improve-lvl.png',
    'https://czn.mos.ru/image?file=/Cms_Data/DistribContent/Public/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/mos-banner-find-job3.png',
  ];

  return (
    <Box position={'relative'} height={'320px'} width={'490px'} m={'auto'} >
      {/* CSS react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* левая иконка */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(-130%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px"/>
      </IconButton>
      {/* правая иконка */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(130%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px"/>
      </IconButton>
      {/* слайдер */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            width="40%"
            height="320px"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
