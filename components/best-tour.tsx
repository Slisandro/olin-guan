import React from 'react';
import {
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// @ts-expect-error Async Server Component
import BACKGROUND_IMAGE_1 from '@/assets/images/components/best-tours/best-tours-1.jpg';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

const BestTour = () => {
    return (
        <Pressable style={styles.container} className='shadow-soft-gray rounded-[16px] bg-red'>
            <Image
                source={BACKGROUND_IMAGE_1}
                style={[styles.image, { borderRadius: 16 }]}
            />

            <LinearGradient
                colors={[
                    'rgba(32, 39, 71, 0.391)',  
                    'rgba(252, 243, 246, 0.1105)'
                ]}
                start={{ x: 0.5, y: 1 }} 
                end={{ x: 0.5, y: 0 }}  
                style={[styles.gradient, { borderRadius: 16 }]}
                className="rounded-[16px]"
            />

            <SafeAreaView style={styles.content}>
                <View style={styles.box}>
                    <Text style={styles.titleSmall}>Wine Tours</Text>
                    <Text style={styles.titleLarge}>Explore stunning vineyards</Text>
                </View>
            </SafeAreaView>
        </Pressable>
    );
};

export default BestTour;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'transparent',
        height: 445,
        borderRadius: 16
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 16
    },
    gradient: {
        ...Platform.select({ android: { elevation: 1 } }),
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: "100%",
        zIndex: 1,
        borderRadius: 16,
    },
    content: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        zIndex: 2,
        ...Platform.select({ android: { elevation: 2 } }),
    },
    box: {
        gap: 8
    },
    titleSmall: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        fontFamily: "Poppins_700Bold",
        lineHeight: 28
    },
    titleLarge: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        fontFamily: "Poppins_500Medium",
        marginBottom: 20,
        lineHeight: 24
    }
});