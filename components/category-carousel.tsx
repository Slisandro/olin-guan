import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import SkiIcon from './icons/entertainment/ski/ski';
import MusicIcon from './icons/essential/music/music';
import TreeIcon from './icons/essential/tree/tree';
import MartiniFoodIcon from './icons/food/martini-food/martini-food';
import PlateUtensilsIcon from './icons/food/plate-utensils/plate-utensils';

interface TravelService {
    id: string;
    title: string;
    icon: React.FC<{ size: string; color?: string }>;
}

// Sample data for travel services
const services: TravelService[] = [
    {
        id: '1',
        title: 'Gastronomy',
        icon: ({ color }) => <PlateUtensilsIcon size={"large"} color={color} />
    },
    {
        id: '2',
        title: 'Nature',
        icon: ({ color }) => <TreeIcon size={"extra-large"} color={color} fill="none" />
    },
    {
        id: '3',
        title: 'Adrenalin',
        icon: ({ color }) => <SkiIcon size={"large"} color={color} />
    },
    {
        id: '4',
        title: 'Culture',
        icon: ({ color }) => <MusicIcon size={"extra-large"} color={color} />
    },
    {
        id: '5',
        title: 'Drinks',
        icon: ({ color }) => <MartiniFoodIcon size={"large"} color={color} />
    }
];

const CategoryCarousel: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>(['1']);

    const renderItem = ({ item }: { item: TravelService }) => {
        const isSelected = selectedCategories.includes(item.id);


        const onPress = (id: string) => {
            // selectedCategories.push(id)

            // setSelectedCategories(selectedCategories)
        }

        return (
            <Pressable onPress={() => onPress(item.id)} style={[styles.item, isSelected ? { backgroundColor: '#D9E6F8' } : {}]} className="flex gap-1 items-center">
                <View className="p-[13px] border-2 border-primary-700 rounded-full">
                    {item.icon && <item.icon size='extra-large' color={'#1D4ED8'} />}
                </View>

                <Text style={[styles.title, { color: '#1D4ED8' }]}>{item.title}</Text>
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
        alignItems: 'center',
        borderRadius: 12,
        paddingVertical: 6,
        paddingHorizontal: 6
    },
    title: {
        fontSize: 10,
        color: '#8A8A8A',
        fontWeight: '600',
        fontFamily: "Poppins_600SemiBold"
    },
});


export default CategoryCarousel;