import CategoryCarousel from "@/components/category-carousel";
import SearchNormalIcon from "@/components/icons/search/search-normal/search-normal";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function Explore() {
  return (
    <LinearGradient
      colors={["#55B6C8", "#1B77F2"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <StatusBar style="light" />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-[20px] pt-[50px] gap-[10px] items-center">
          <Text className="font-poppins-bold text-[20px] text-center font-[700] text-white">
            Explore ⛵
          </Text>

          <Text className="w-[280px] text-center font-poppins-medium font-[500] text-[12px] text-white">
            Hey adventurer, find the best activities and places for you!
          </Text>

          <View className="h-[35px] bg-white w-full px-[10px] py-[12px] gap-[10px] rounded-[12px] mt-[20px] flex flex-row items-center">
            <SearchNormalIcon size="small" color="#AAABAD" />

            <TextInput
              placeholder="Search..."
              placeholderTextColor="#AAABAD"
              className="font-[500] font-poppins-medium text-[14px]"
            />
          </View>
        </View>

        <View className="flex-1 bg-white rounded-t-[40px] mt-[30px] pt-[30px] gap-[20px]">
          <CategoryCarousel />

          <View className="h-auto gap-1 py-[10px]">
            <View className="flex flex-row items-center justify-between px-[20px]">
              <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>Popular destinations for you</Text>
            </View>

            <BestDestinations />
          </View>

          <View className="h-auto gap-1">
            <View className="flex flex-row items-center justify-between px-[20px]">
              <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>Recommended for you</Text>
            </View>

            <BestRecommended />
          </View>

          <View className="h-auto gap-1 py-[10px]">
            <View className="flex flex-row items-center justify-between px-[20px]">
              <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>The best accommodations</Text>
            </View>

            <BestHotels />
          </View>

          <View className="h-auto gap-[10px] px-[20px]">
            <View className="flex flex-row items-center justify-between">
              <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>The best gastronomy for you</Text>
            </View>

            <BestFood />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

// @ts-expect-error
import IMAGE_1 from "@/assets/images/components/best-destinations/best-destinations-1.jpg";
// @ts-expect-error
import IMAGE_2 from "@/assets/images/components/best-destinations/best-destinations-2.jpg";
import BestHotels from "@/components/best-hotels-slider";

const items = [
  {
    id: 1,
    title: "Cancún Beach",
    price: "$200",
    image: IMAGE_1
  },
  {
    id: 2,
    title: "Isla mujeres",
    price: "$200",
    image: IMAGE_2
  }
];

const BestDestinations = () => {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View className="p-[10px] h-[190px] shadow-100 rounded-[12px] bg-white">
        <View className="w-[160px] h-[110px] rounded-[12px]">
          <Image
            source={item.image}
            style={{ borderRadius: 16, width: "100%", height: "100%", zIndex: 50 }}
            contentFit='cover'
          />
          <Text className="absolute bottom-[4px] left-[10px] font-[500] font-poppins-medium text-[12px] bg-primary-900 px-[6px] py-[5px]text-[#FFFFFF] rounded-[20px]"
            style={{ zIndex: 55, color: "white", paddingVertical: 3 }}>
            45 min
          </Text>
        </View>
        <Text className="font-poppins-bold font-[700] text-[14px] text-primary-700 mt-[8px]">
          {item.title}
        </Text>

        <Text className="font-poppins-medium font-[500] text-[12px] text-text-600 mt-[5px]">
          {item.price}
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      horizontal
      data={items}
      renderItem={renderItem}
      className='py-[10px] px-[12px]'
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View className="w-[14px]" />}
    />
  )
}

// RECOMMENDED
// @ts-expect-error
import IMAGE_RECOMMENDED_1 from "@/assets/images/components/best-recommended/best-recommended-1.jpg";
// @ts-expect-error
import IMAGE_RECOMMENDED_2 from "@/assets/images/components/best-recommended/best-recommended-2.jpg";

const ITEMS_RECOMMENDED = [
  {
    id: 1,
    title: "Snorckeling activity",
    price: "$200",
    image: IMAGE_RECOMMENDED_1
  },
  {
    id: 2,
    title: "Trekking activity",
    price: "$200",
    image: IMAGE_RECOMMENDED_2
  }
];

const BestRecommended = () => {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View className="px-[12px] py-[18px] w-[190px] gap-[6px] shadow-100 rounded-[8px] bg-white flex-row">
        <View className="w-[75px] h-[50px] rounded-[128px]">
          <Image
            source={item.image}
            style={{ borderRadius: 8, width: "100%", height: "100%" }}
            contentFit='cover'
          />
        </View>
        <Text className="font-poppins-bold font-[700] text-[14px] text-text-600 mt-[8px] max-w-[80px]">
          {item.title}
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      horizontal
      data={ITEMS_RECOMMENDED}
      renderItem={renderItem}
      className='py-[10px] px-[12px]'
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View className="w-[14px]" />}
    />
  )
}

// @ts-expect-error Async Server Component
import IMAGE_FOOD_1 from '@/assets/images/components/best-food/best-food-1.jpg';
// @ts-expect-error Async Server Component
import IMAGE_FOOD_2 from '@/assets/images/components/best-food/best-food-2.jpg';
import HeartIcon from '@/components/icons/support-like-question-share/heart/heart';
import StarIcon from "@/components/icons/support-like-question-share/star/star";
import { useRouter } from "expo-router";

// Sample data for best hotels
const ITEMS_BEST_FOOD = [
  {
    id: 1,
    name: "Luxury Hotel",
    title: 'Tropical Paradise',
    subtitle: 'Japanese',
    pricePerNight: 200,
    images: [IMAGE_FOOD_1]
  },
  {
    id: 2,
    name: "Pasta House",
    title: 'Tropical Paradise',
    subtitle: 'Italian',
    pricePerNight: 200,
    images: [IMAGE_FOOD_2]
  },
  {
    id: 3,
    name: "Luxury Hotel",
    title: 'Tropical Paradise',
    subtitle: 'Japanese',
    pricePerNight: 200,
    images: [IMAGE_FOOD_1]
  },
  {
    id: 4,
    name: "Pasta House",
    title: 'Tropical Paradise',
    subtitle: 'Italian',
    pricePerNight: 200,
    images: [IMAGE_FOOD_2]
  }
];

const BestFood = () => {
  const router = useRouter();
  return (
    <View  className="gap-[16px] py-[16px]">
      {ITEMS_BEST_FOOD.map(item => (
        <Pressable onPress={() => router.push("/(private)/(plan_trip)/booking-restaurant")} className="bg-white gap-2 rounded-[16px] w-auto h-auto shadow-sm">
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
              <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">{item.subtitle}</Text>
              <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">·</Text>
              <Text className="font-inter-regular font-400 text-[13px] text-text-600 leading-[13px]">30 mins</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  )
};