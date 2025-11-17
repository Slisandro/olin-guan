import StarIcon from "@/components/icons/support-like-question-share/star/star";
import { Image } from "expo-image";
import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";

// @ts-expect-error Async Server Component
import IMAGE_HOTEL_1 from "@/assets/images/components/best-hotels-slider/best-hotels-slider-1.jpg";
// @ts-expect-error Async Server Component
import IMAGE_HOTEL_2 from "@/assets/images/components/best-hotels-slider/best-hotels-slider-2.jpg";
// @ts-expect-error Async Server Component
import IMAGE_HOTEL_3 from "@/assets/images/components/best-hotels-slider/best-hotels-slider-3.jpg";

const ITEMS_BEST_HOTELS = [
    {
        id: 1,
        name: "Luxury Hotel",
        title: "Tropical Paradise",
        subtitle: "A luxurious stay",
        pricePerNight: 200,
        images: [IMAGE_HOTEL_1, IMAGE_HOTEL_2, IMAGE_HOTEL_3],
    },
    {
        id: 2,
        name: "Beach Resort",
        title: "Sunny Escape",
        subtitle: "Relax by the sea",
        pricePerNight: 180,
        images: [IMAGE_HOTEL_2, IMAGE_HOTEL_3, IMAGE_HOTEL_1],
    },
    {
        id: 3,
        name: "Mountain Lodge",
        title: "Highland Retreat",
        subtitle: "A peaceful getaway",
        pricePerNight: 150,
        images: [IMAGE_HOTEL_3, IMAGE_HOTEL_1, IMAGE_HOTEL_2],
    },
];

interface BestHotelItem {
    id: number;
    name: string;
    title: string;
    subtitle: string;
    pricePerNight: number;
    images: any[];
}

const BestHotels = () => {
    const renderImageItem = (item: string) => (
        <View className="w-[140px] h-[110px] rounded-[8px] overflow-hidden">
            <Image
                source={item}
                style={{ width: "100%", height: "100%", borderRadius: 8 }}
                contentFit="cover"
            />
        </View>
    );

    const renderHotelItem = ({ item }: { item: BestHotelItem }) => (
        <View className="bg-white rounded-[16px] shadow-100 w-[300px]">
            <View className="flex gap-[8px] p-[16px]">
                <Text className="font-poppins-bold text-[16px] text-text-600 leading-[22px]">
                    {item.title}
                </Text>
                <Text className="font-inter-regular text-[13px] text-text-400 leading-[13px]">
                    {item.subtitle}
                </Text>

                <View className="flex flex-row justify-between items-center">
                    <View className="flex flex-row items-center gap-1">
                        <Text className="font-poppins-bold text-text-900 text-[14px] leading-[19px]">
                            ${item.pricePerNight}
                        </Text>
                        <Text className="font-poppins-bold text-text-400 text-[14px] leading-[19px]">
                            /night
                        </Text>
                    </View>

                    <View className="flex flex-row items-center justify-center">
                        <Text className="text-text-400 leading-[20px] mr-2">2 ·</Text>
                        <StarIcon size="small" fill={"#F2CB04"} />
                        <Text className="text-text-400 leading-[20px] ml-1">4.5</Text>
                    </View>
                </View>
            </View>

            <View style={{ width: "100%", flexDirection: "row" }}>
                <ScrollView nestedScrollEnabled horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-4 px-[10px] pb-[10px] mr-[10px]">
                    {item.images.map((item: string) => (
                        renderImageItem(item)
                    ))}
                </ScrollView>
            </View>
        </View>
    );

    return (
        <FlatList
            data={ITEMS_BEST_HOTELS}
            renderItem={renderHotelItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-[12px]" />}
            contentContainerStyle={{ padding: 12 }}
        />
    );
};

export default BestHotels;