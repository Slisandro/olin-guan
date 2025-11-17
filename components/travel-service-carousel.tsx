import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import HouseIcon from './icons/building/house/house';
import BusSquareIcon from './icons/car/bus-square/bus-square';
import CarIcon from './icons/car/car/car';
import ShipSquareIcon from './icons/car/ship-square/ship-square';
import ScubaMaskIcon from './icons/entertainment/scuba-mask/scuba-mask';
import BedIcon from './icons/essential/bed/bed';
import MusicIcon from './icons/essential/music/music';
import BugHotIcon from './icons/food/mug-hot/mug-hot';

interface TravelService {
    id: string;
    title: string;
    description: string;
    icon: React.FC<{ size: string; color?: string }>;
}

// Sample data for travel services
const services: TravelService[] = [
    {
        id: '1',
        title: 'Car rental',
        description: 'Find the best deals',
        icon: ({ color }) => <CarIcon size={"large"} color={color} />
    },
    {
        id: '2',
        title: 'Lodging',
        description: 'Comfortable stays',
        icon: ({ color }) => <BedIcon size={"extra-large"} color={color} />
    },
    {
        id: '3',
        title: 'Restaurants',
        description: 'Delicious food',
        icon: ({ color }) => <BugHotIcon size={"large"} color={color} />
    },
    {
        id: '4',
        title: 'Nightlife',
        description: 'Exciting venues',
        icon: ({ color }) => <MusicIcon size={"extra-large"} color={color} />
    },
    {
        id: '5',
        title: 'Tour Packages',
        description: 'Incredible adventures',
        icon: ({ color }) => <ScubaMaskIcon size={"large"} color={color} />
    },
    {
        id: '6',
        title: 'Transport',
        description: 'Convenience and comfort',
        icon: ({ color }) => <BusSquareIcon size={"large"} color={color} />
    },
    {
        id: '7',
        title: 'Yacht rentals',
        description: 'Sail in the finest',
        icon: ({ color }) => <ShipSquareIcon size={"large"} color={color} />
    },
    {
        id: '8',
        title: 'Real estate module',
        description: 'The best investment',
        icon: ({ color }) => <HouseIcon size={"large"} color={color} />
    },
];

const TravelServiceCarousel: React.FC = () => {
    const [selectedServiceId, setSelectedServiceId] = React.useState<string>('1');

    const renderItem = ({ item }: { item: TravelService }) => {
        const isSelected = selectedServiceId === item.id;
        return (
            <Pressable onPress={() => setSelectedServiceId(item.id)} style={[styles.item, isSelected ? { backgroundColor: '#D9E6F8' } : {}]} className="flex flex-row gap-4">
                {item.icon && <item.icon size='extra-large' color={isSelected ? '#1D4ED8' : '#B0B0B0'} />}

                <View className="flex gap-[4px]">
                    <Text style={[styles.title, isSelected ? { color: '#1D4ED8' } : {}]}>{item.title}</Text>
                    <Text style={[styles.description, isSelected ? { color: '#1D4ED8' } : {}]}>{item.description}</Text>
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


export default TravelServiceCarousel;