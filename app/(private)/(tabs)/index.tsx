import OnboardingSlider from '@/components/onboarding-slider';
import TravelServiceCarousel from '@/components/travel-service-carousel';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: "#FAFDFF" }} className="flex-1" showsVerticalScrollIndicator={false}>
      <StatusBar style="light" />

      <View className="h-auto w-full">
        <OnboardingSlider />
      </View>

      <View className="h-auto w-full">
        <TravelServiceCarousel />
      </View>

      <View className="h-auto gap-1">
        <View className=" px-[20px] py-[10px] ">
          <Text className='font-poppins-bold font-700 text-[28px] text-primary-700 leading-[42px]'>Best for you</Text>
          <Text className='font-inter-regular font-400 text-[14px] text-[#8A8A8A] leading-[19px]'>Discover new destinations</Text>
        </View>

        <BestPlaces />
      </View>

      <View className="h-auto gap-1 px-[20px] py-[10px]">
        <View className="flex flex-row items-center justify-between py-[8px]">
          <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>The best accommodations</Text>
          <Text className='font-poppins-bold font-700 text-[14px] text-primary-700 leading-[19px]'>View All</Text>
        </View>

        <BestHotels />
      </View>

      <View className="h-auto gap-1 px-[20px] py-[30px]">
        <BestTour />
      </View>

      <View className="h-auto gap-1 px-[20px] py-[10px]">
        <View className="flex flex-row items-center justify-between py-[8px]">
          <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>The best gastronomy for you</Text>
          <Text className='font-poppins-bold font-700 text-[14px] text-primary-700 leading-[19px]'>View All</Text>
        </View>

        <BestFood />
      </View>
    </ScrollView>
  );
}

/* INIT FLAT LIST PLACES */

// @ts-expect-error Async Server Component
import IMAGE_1 from '@/assets/images/components/best-places-slider/best-places-slider-1.png';
// @ts-expect-error Async Server Component
import IMAGE_2 from '@/assets/images/components/best-places-slider/best-places-slider-2.png';
// @ts-expect-error Async Server Component
import IMAGE_3 from '@/assets/images/components/best-places-slider/best-places-slider-3.png';

// Sample data for best places
const ITEMS_BEST_PLACES = [
  {
    id: 1,
    title: 'Tropical Paradise',
    subtitle: 'Bali, Indonesia',
    imageUrl: IMAGE_1,
  },
  {
    id: 2,
    title: 'Mountain Escape',
    subtitle: 'Swiss Alps',
    imageUrl: IMAGE_2,
  },
  {
    id: 3,
    title: 'Urban Adventure',
    subtitle: 'Tokyo, Japan',
    imageUrl: IMAGE_3,
  },
];

// Type definition for best place items
interface BestPlaceItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const BestPlaces = () => {
  const renderItem = ({ item }: { item: BestPlaceItem }) => {
    return (
      <View className="bg-white gap-2 rounded-[16px] w-auto h-auto shadow-sm">
        <View className='w-[173px] h-[128px]'>
          <Image
            source={item.imageUrl}
            style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16, width: "100%", height: "100%" }}
            contentFit='cover'
          />
        </View>
        <View className="px-[12px] py-[10px] min-h-[56px]">
          <Text className="font-poppins-medium font-500 text-[12px] text-text-900 leading-[16px]">{item.title}</Text>
          <Text className="font-inter-regular font-400 text-[12px] text-[#8A8A8A] leading-[16px]">{item.subtitle}</Text>
        </View>
      </View>
    )
  };

  return (
    <FlatList
      horizontal
      data={ITEMS_BEST_PLACES}
      renderItem={renderItem}
      className='mt-2 mb-4 px-[20px] pb-1 mr-[10px]'
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View className="w-[8px]" />}
    />
  )
};

/* FINISH FLAT LIST PLACES */

/* INIT FLAT LIST HOTEL */

// @ts-expect-error Async Server Component
import IMAGE_HOTEL_1 from '@/assets/images/components/best-hotels-slider/best-hotels-slider-1.jpg';
// @ts-expect-error Async Server Component
import IMAGE_HOTEL_2 from '@/assets/images/components/best-hotels-slider/best-hotels-slider-2.jpg';
// @ts-expect-error Async Server Component
import IMAGE_HOTEL_3 from '@/assets/images/components/best-hotels-slider/best-hotels-slider-3.jpg';
import StarIcon from '@/components/icons/support-like-question-share/star/star';

// Sample data for best hotels
const ITEMS_BEST_HOTELS = [
  {
    id: 1,
    name: "Luxury Hotel",
    title: 'Tropical Paradise',
    subtitle: 'A luxurious stay',
    pricePerNight: 200,
    images: [IMAGE_HOTEL_1, IMAGE_HOTEL_2, IMAGE_HOTEL_3]
  }
];

// Type definition for best hotel items
interface BestHotelItem {
  id: number,
  name: string,
  title: string,
  subtitle: string,
  pricePerNight: number,
  images: string[]
}

const BestHotels = () => {
  const renderItem = ({ item }: { item: string }) => {
    return (
      <View className='w-[140px] h-[110px] rounded-[8px]'>
        <Image
          source={item}
          style={{ borderRadius: 16, width: "100%", height: "100%" }}
          contentFit='cover'
        />
      </View>
    )
  };

  const item: BestHotelItem = ITEMS_BEST_HOTELS[0];

  return (
    <View className="bg-white gap-2 rounded-[16px] w-auto h-auto shadow-100 ">
      <View className='flex gap-[8px] p-[16px]'>
        <Text className="font-poppins-bold font-700 text-[16px] text-text-600 leading-[22px]">{item.title}</Text>
        <Text className="font-inter-regular font-400 text-[13px] text-text-400 leading-[13px]">{item.subtitle}</Text>
        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-row items-center gap-1">
            <Text className='font-poppins-bold font-[900] text-text-900 text-[14px] leading-[19px]'>${item.pricePerNight}</Text>
            <Text className='font-poppins-bold font-[900] text-text-400 text-[14px] leading-[19px]'>/night</Text>
          </View>
          <View className="flex flex-row items-center justify-center">
            <Text className="flex flex-row items-center justify-center text-text-400 leading-[20px] mr-2">
              2 ·
            </Text>
            <StarIcon size='small' fill={"#F2CB04"} />
            <Text className="flex flex-row items-center justify-center text-text-400 leading-[20px] ml-1">
              4.5
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        horizontal
        data={item.images}
        renderItem={renderItem}
        className='mt-2 mb-4 px-[10px] pb-1 mx-[10px]'
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-[8px]" />}
      />
    </View>
  )
};

/* FINISH FLAT LIST HOTEL */

/* INIT FLAT LIST HOTEL */

// @ts-expect-error Async Server Component
import IMAGE_FOOD_1 from '@/assets/images/components/best-food/best-food-1.jpg';
import BestTour from '@/components/best-tour';
import HeartIcon from '@/components/icons/support-like-question-share/heart/heart';

// Sample data for best hotels
const ITEMS_BEST_FOOD = [
  {
    id: 1,
    name: "Luxury Hotel",
    title: 'Tropical Paradise',
    subtitle: 'A luxurious stay',
    pricePerNight: 200,
    images: [IMAGE_FOOD_1]
  }
];

// Type definition for best hotel items
interface BestFoodItem {
  id: number,
  name: string,
  title: string,
  subtitle: string,
  pricePerNight: number,
  images: string[]
}

const BestFood = () => {
  const item: BestFoodItem = ITEMS_BEST_FOOD[0];

  return (
    <View className="bg-white gap-2 rounded-[16px] w-auto h-auto shadow-sm">
      <View className='relative w-full h-[170px]'>
        {/* Chip best seller */}
        <Text className="bg-primary-900 font-poppins-bold font-700 text-[12px] border-2 border-primary-900 text-white w-auto absolute top-[16px] z-10 px-[12px] py-[5px] rounded-[16px] left-[16px] backdrop-blur-[50px]">
          Best Seller
        </Text>
        {/* Chip star */}
        <View className="bg-warning-700 border-2 border-warning-700  w-auto absolute top-[16px] z-10 px-[12px] py-[5px] rounded-[16px] right-[16px] backdrop-blur-[50px] flex flex-row items-center">
          <StarIcon size='small' fill={"#F2CB04"} />
          <Text className="text-white ml-1 text-[12px] font-poppins-bold font-700">
            4.5
          </Text>
        </View>
        <Image
          source={item.images[0]}
          style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16, width: "100%", height: "100%" }}
          contentFit='cover'
        />
      </View>
      <View className="relative p-[12px]">
        <View className="bg-white border-2 border-white shadow-soft-black w-[44px] h-[44px] absolute top-[-30] z-10 rounded-full right-[16px] backdrop-blur-[50px] flex flex-row items-center justify-center">
          <HeartIcon size='extra-large' fill={"#B91C21"} />
        </View>

        <Text className="font-poppins-bold font-700 text-[16px] leading-[20px] text-[#000000CC]">{item.title}</Text>

        <View className="flex flex-row gap-[4px] mt-[4px]">
          <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">$$</Text>
          <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">·</Text>
          <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">Japanese</Text>
          <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">·</Text>
          <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">30 mins</Text>
        </View>
      </View>
    </View>
  )
};

/* FINISH FLAT LIST HOTEL */