import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Bike, Building, Hotel, Map, Martini, Search, ShoppingBag, Star, Utensils } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Svg, { Ellipse, Path } from "react-native-svg";

const CATEGORIES = [
    { id: 1, label: "Accommodations", icon: <Building size={16} color="#004BAF" /> },
    { id: 2, label: "Restaurants", icon: <Utensils size={16} color="#004BAF" /> },
    { id: 3, label: "Tours", icon: <Map size={16} color="#004BAF" /> },
    { id: 4, label: "Shoping", icon: <ShoppingBag size={16} color="#004BAF" /> },
    { id: 5, label: "Nightlife", icon: <Martini size={16} color="#004BAF" /> },
    { id: 6, label: "Lodging", icon: <Hotel size={16} color="#004BAF" /> },
    { id: 7, label: "Outdoor Activities", icon: <Bike size={16} color="#004BAF" /> },
];

export default function Tour() {
    const [loading, setLoading] = useState(false);
    const [isDelete, setDelete] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                router.push("/(private)/(tabs)/trip")

                setTimeout(() => {
                    setDelete(true)
                }, 1000);
            }, 1000);
        }
    }, [loading])

    return (
        <LinearGradient
            colors={["#55B6C8", "#1B77F2"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ flex: 1 }}
        >
            <StatusBar style="light" />

            {
                loading && (
                    <BlurView intensity={25} className="absolute flex-1 inset-0 z-50 items-center justify-center bg-[#FFFFFF6B]">
                        <View className="items-center justify-center p-10 rounded-2xl">
                            <Image
                                source={require("@/assets/images/loader.png")}
                                className="w-[150px] h-[150px]"
                            />
                            <Text className="font-poppins-bold text-[#1B77F2] text-[20px]">
                                Ready for new adventures...
                            </Text>
                        </View>
                    </BlurView>
                )
            }

            {
                isDelete && (
                    <BlurView intensity={25} className="absolute flex-1 inset-0 z-50 items-center justify-center bg-[#FFFFFF6B]">
                        <View className="items-center justify-center p-10 rounded-2xl bg-white w-[90%] gap-[16px]">
                            <SUCCESS_2 />
                            <Text className="font-poppins-bold text-[#1B77F2] text-[16px] text-center">
                                You are about to eliminate a day of activities from your itinerary!
                            </Text>
                            <Text className="text-center text-[#8A8A8A]">
                                Are you sure you want to delete this activity?
                            </Text>

                            <View className="flex-row justify-between w-full">
                                <Pressable onPress={() => setDelete(false)} className="w-[45%] rounded-[16px] py-[16px] bg-[#DADFB5] border-[1.5px] border-[#94A604] items-center">
                                    <Text className='text-[16px] font-poppins-semibold text-[#94A604]'>Cancel</Text>
                                </Pressable>

                                <Pressable onPress={() => setDelete(false)} className="w-[45%] rounded-[16px] py-[16px] bg-[#94A604] border-[1.5px] border-[#94A604] items-center">
                                    <Text className='text-[16px] font-poppins-semibold text-white'>Yes, delete it</Text>
                                </Pressable>
                            </View>
                        </View>
                    </BlurView>

                )
            }

            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="px-[20px] pt-[50px] gap-[12px] items-center">
                    <View className="flex-row items-center justify-between w-full">
                        <Pressable className="flex flex-row gap-[10px] items-center" onPress={() => router.push("/(private)/(tabs)")}>
                            <ARROW_BACK />
                            <Text className="font-poppins-bold text-[14px] text-center font-[700] text-white">
                                Back
                            </Text>
                        </Pressable>
                    </View>

                    <Text className="text-[20px] font-poppins-bold text-white text-center">Search cars</Text>

                    <View className="w-full flex-row flex-wrap px-4 gap-3 bg-white py-4 rounded-xl">
                        <Search color="#646464" size={18} />

                        <TextInput placeholder="Search..." className="flex-1" />
                    </View>

                </View>

                <View className="bg-white flex-1 mt-[20px] pt-[10px] px-[20px] pb-[30px] w-full">
                    <View className="h-auto w-full">
                        <TravelServiceCarousel />
                    </View>
                    <BestPlaces />
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const ARROW_BACK = () => (
    <Svg
        width={8}
        height={13}
        viewBox="0 0 8 13"
        fill="none"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.293 5.657L5.95 0l1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414L.293 7.071a1 1 0 010-1.414z"
            fill="#fff"
        />
    </Svg>
)

const LOCATION = () => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M12 13.43a3.12 3.12 0 10.001-6.24 3.12 3.12 0 000 6.24z"
            stroke="#646464"
            strokeWidth={1.5}
        />
        <Path
            d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z"
            stroke="#646464"
            strokeWidth={1.5}
        />
    </Svg>
)

const SUCCESS_2 = () => (
    <Svg
        width={167}
        height={152}
        viewBox="0 0 167 152"
        fill="none"
    >
        <Ellipse
            cx={85.7151}
            cy={76.4225}
            rx={63.2991}
            ry={59.5334}
            fill="#F2F4FC"
        />
        <Ellipse
            cx={160.208}
            cy={23.222}
            rx={6.73394}
            ry={6.33334}
            fill="#94A604"
        />
        <Ellipse
            cx={17.9581}
            cy={8.44445}
            rx={8.97859}
            ry={8.44445}
            fill="#94A604"
        />
        <Ellipse
            cx={8.97465}
            cy={112.311}
            rx={4.48929}
            ry={4.22223}
            fill="#94A604"
        />
        <Ellipse
            cx={148.595}
            cy={135.533}
            rx={2.24465}
            ry={2.11111}
            fill="#94A604"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M75.79 55.34h19.136c7.483 0 12.493 4.94 12.493 12.289V84.59c0 7.326-5.01 12.267-12.493 12.267H75.79c-7.482 0-12.515-4.94-12.515-12.267V67.63c0-7.349 5.033-12.29 12.515-12.29zm8.298 26.966l10.484-9.86c.75-.706.75-1.848 0-2.575-.75-.705-1.986-.705-2.737 0l-9.116 8.574-3.862-3.633c-.75-.706-1.987-.706-2.737 0s-.75 1.848 0 2.574l5.253 4.92c.375.353.86.52 1.346.52.508 0 .994-.167 1.369-.52z"
            fill="#004BAF"
        />
        <Ellipse
            cx={95.6196}
            cy={3.80008}
            rx={2.24465}
            ry={2.11111}
            fill="#94A604"
        />
        <Ellipse
            cx={56.1142}
            cy={149.044}
            rx={3.14251}
            ry={2.95556}
            fill="#94A604"
        />
        <Ellipse
            cx={109.54}
            cy={144.4}
            rx={0.897538}
            ry={0.844144}
            fill="#94A604"
        />
        <Ellipse
            cx={153.082}
            cy={93.3113}
            rx={2.24465}
            ry={2.11111}
            fill="#94A604"
        />
        <Ellipse
            cx={0.897538}
            cy={63.3329}
            rx={0.897538}
            ry={0.844144}
            fill="#94A604"
        />
    </Svg>
)

import HouseIcon from "@/components/icons/building/house/house";
import BusSquareIcon from "@/components/icons/car/bus-square/bus-square";
import CarIcon from "@/components/icons/car/car/car";
import ShipSquareIcon from "@/components/icons/car/ship-square/ship-square";
import ScubaMaskIcon from "@/components/icons/entertainment/scuba-mask/scuba-mask";
import BedIcon from "@/components/icons/essential/bed/bed";
import MusicIcon from "@/components/icons/essential/music/music";
import BugHotIcon from "@/components/icons/food/mug-hot/mug-hot";
import { StyleSheet } from "react-native";

// @ts-expect-error Async Server Component
import IMAGE_1 from '@/assets/images/components/best-places-slider/best-places-slider-1.png';
// @ts-expect-error Async Server Component
import IMAGE_2 from '@/assets/images/components/best-places-slider/best-places-slider-2.png';
// @ts-expect-error Async Server Component
import IMAGE_3 from '@/assets/images/components/best-places-slider/best-places-slider-3.png';

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

interface BestPlaceItem {
    id: number;
    title: string;
    subtitle: string;
    imageUrl: string;
}

const BestPlaces = () => {
    const router = useRouter();
    const renderItem = ({ item }: { item: BestPlaceItem }) => {
        return (
            <Pressable onPress={() => router.push("/(private)/(car)/detail")} className="bg-white gap-2 rounded-[16px] w-auto h-auto shadow-sm shadow-[#97C3FF66] m-1">
                <View className='w-full h-[200px] flex-row gap-2 p-3'>
                    <Image
                        // @ts-expect-error
                        source={item.imageUrl}
                        style={{ borderRadius: 16, width: "49%", height: "100%" }}
                        contentFit='cover'
                    />
                    <View className='w-full h-full justify-between'>
                        <Image
                            // @ts-expect-error
                            source={item.imageUrl}
                            style={{ borderRadius: 16, width: "49%", height: "49%" }}
                            contentFit='cover'
                        />
                        <Image
                            // @ts-expect-error
                            source={item.imageUrl}
                            style={{ borderRadius: 16, width: "49%", height: "49%" }}
                            contentFit='cover'
                        />
                    </View>
                </View>
                <View className="px-[12px] py-[15px] min-h-[56px] gap-3">
                    <View className="flex-row justify-between">
                        <Text className="font-poppins-bold font-700 text-[16px] text-text-600">Toyota Corolla 2022</Text>
                        <View className="flex-row gap-2 items-center">
                            <Star fill="#F2CB04" color="#F2CB04" size={14} />
                            <Text className="font-poppins-bold font-700 text-[16px] text-text-600">4.5</Text>
                        </View>
                    </View>
                    <Text className="font-poppins font-400 text-[14px] text-[#8A8A8A]">Sedan, Insurance included, Unlimited mileage, Free cancellation.</Text>
                    <Text className="font-poppins-bold font-700 text-[16px] text-[#8A8A8A]">$50/day</Text>
                </View>
            </Pressable>
        )
    };

    return (
        <FlatList
            data={ITEMS_BEST_PLACES}
            renderItem={renderItem}
            className='mt-2 mb-4 pb-1'
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="h-[8px]" />}
        />
    )
};

interface TravelService {
    id: string;
    title: string;
    description: string;
    icon: React.FC<{ size: string; color?: string }>;
    onPress: () => any
}


const TravelServiceCarousel: React.FC = () => {
    const router = useRouter();
    const [selectedServiceId, setSelectedServiceId] = React.useState<string>('1');
    // Sample data for travel services
    const services: TravelService[] = [
        {
            id: '1',
            title: 'Car rental',
            description: 'Find the best deals',
            icon: ({ color }) => <CarIcon size={"large"} color={color} />,
            onPress: () => router.push("/(private)/(bar)")
        },
        {
            id: '2',
            title: 'Lodging',
            description: 'Comfortable stays',
            icon: ({ color }) => <BedIcon size={"extra-large"} color={color} />,
            onPress: () => router.push("/(private)/(bar)")
        },
        {
            id: '3',
            title: 'Restaurants',
            description: 'Delicious food',
            icon: ({ color }) => <BugHotIcon size={"large"} color={color} />,
            onPress: () => router.push("/(private)/(restaurant)/search")
        },
        {
            id: '4',
            title: 'Nightlife',
            description: 'Exciting venues',
            icon: ({ color }) => <MusicIcon size={"extra-large"} color={color} />,
            onPress: () => router.push("/(private)/(bar)")
        },
        {
            id: '5',
            title: 'Tour Packages',
            description: 'Incredible adventures',
            icon: ({ color }) => <ScubaMaskIcon size={"large"} color={color} />,
            onPress: () => router.push("/(private)/(bar)")
        },
        {
            id: '6',
            title: 'Transport',
            description: 'Convenience and comfort',
            icon: ({ color }) => <BusSquareIcon size={"large"} color={color} />,
            onPress: () => router.push("/(private)/(bar)")
        },
        {
            id: '7',
            title: 'Yacht rentals',
            description: 'Sail in the finest',
            icon: ({ color }) => <ShipSquareIcon size={"large"} color={color} />,
            onPress: () => router.push("/(private)/(bar)")
        },
        {
            id: '8',
            title: 'Real estate module',
            description: 'The best investment',
            icon: ({ color }) => <HouseIcon size={"large"} color={color} />,
            onPress: () => router.push("/(private)/(bar)")
        },
    ];

    const renderItem = ({ item }: { item: TravelService }) => {
        const isSelected = selectedServiceId === item.id;
        return (
            <Pressable onPress={() => { setSelectedServiceId(item.id) }} style={[styles.item, isSelected ? { backgroundColor: '#D9E6F8' } : {}]} className="flex flex-row gap-4">
                {item.icon && <item.icon size='extra-large' color={isSelected ? '#1D4ED8' : '#B0B0B0'} />}

                <View className="flex gap-[4px]">
                    <Text style={[styles.title, isSelected ? { color: '#1D4ED8' } : {}]}>{item.title}</Text>
                    {/* <Text style={[styles.description, isSelected ? { color: '#1D4ED8' } : {}]}>{item.description}</Text> */}
                </View>
            </Pressable>
        )
    };

    return (
        <FlatList
            data={services}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            ItemSeparatorComponent={() => <View className='w-[8px]' />}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
        padding: 12
    },
    item: {
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#D9E6F8",
        borderRadius: 34,
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 12,
        color: '#8A8A8A',
        lineHeight: 16,
        fontWeight: '500',
        fontFamily: "Poppins_500Medium",
    },
    description: {
        fontSize: 10,
        color: '#8A8A8A',
        lineHeight: 12,
        fontWeight: '400',
        fontFamily: "Poppins_400Regular",
    },
});