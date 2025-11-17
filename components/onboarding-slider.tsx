import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    ImageBackground,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// @ts-expect-error Async Server Component
import BACKGROUND_IMAGE_1 from '@/assets/images/components/onboarding-slider/onboarding-slider.jpg';
// @ts-expect-error Async Server Component
import BACKGROUND_IMAGE_2 from '@/assets/images/components/onboarding-slider/onboarding-slider.jpg';
// @ts-expect-error Async Server Component
import BACKGROUND_IMAGE_3 from '@/assets/images/components/onboarding-slider/onboarding-slider.jpg';
// @ts-expect-error Async Server Component
import BACKGROUND_IMAGE_4 from '@/assets/images/components/onboarding-slider/onboarding-slider.jpg';
// @ts-expect-error Async Server Component
import BACKGROUND_IMAGE_5 from '@/assets/images/components/onboarding-slider/onboarding-slider.jpg';

const OnboardingSlider = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const backgroundImages = [
        BACKGROUND_IMAGE_1,
        BACKGROUND_IMAGE_2,
        BACKGROUND_IMAGE_3,
        BACKGROUND_IMAGE_4,
        BACKGROUND_IMAGE_5,
    ];

    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImages[currentIndex]}
                style={styles.image}
                imageStyle={{ resizeMode: 'cover' }}
            />

            <LinearGradient
                colors={['rgba(2,9,13,0.6)', 'rgba(2,9,13,0)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradient}
            />

            <SafeAreaView style={styles.content}>
                <View style={styles.box}>
                    <Text style={styles.titleSmall}>Your adventure awaits</Text>
                    <Text style={styles.titleLarge}>Plan your trip</Text>

                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </Pressable>
                </View>

                <View style={styles.dots}>
                    <Pressable onPress={() => setCurrentIndex(0)} style={[styles.dot, currentIndex === 0 && styles.dotActive]} />
                    <Pressable onPress={() => setCurrentIndex(1)} style={[styles.dot, currentIndex === 1 && styles.dotActive]} />
                    <Pressable onPress={() => setCurrentIndex(2)} style={[styles.dot, currentIndex === 2 && styles.dotActive]} />
                    <Pressable onPress={() => setCurrentIndex(3)} style={[styles.dot, currentIndex === 3 && styles.dotActive]} />
                    <Pressable onPress={() => setCurrentIndex(4)} style={[styles.dot, currentIndex === 4 && styles.dotActive]} />
                </View>
            </SafeAreaView>

            <LinearGradient
                colors={['rgba(2,9,13,0)', 'rgba(2,9,13,0.6)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={[styles.gradient, { bottom: 0, top: 'auto', height: 60 }]}
            />
        </View>
    );
};

export default OnboardingSlider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#000',
        height: 450
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 150,
        zIndex: 1,
        ...Platform.select({ android: { elevation: 1 } }),
    },
    content: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingBottom: 32,
        zIndex: 2,
        ...Platform.select({ android: { elevation: 2 } }),
    },
    box: {
        marginBottom: 12,
    },
    titleSmall: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 4,
        fontFamily: "Poppins_600SemiBold",
        lineHeight: 26
    },
    titleLarge: {
        color: '#fff',
        fontSize: 48,
        fontWeight: '800',
        fontFamily: "Poppins_700Bold",
        marginBottom: 20,
        lineHeight: 72
    },
    button: {
        backgroundColor: '#94A604',
        borderRadius: 9999,
        paddingVertical: 12,
        paddingHorizontal: 44,
        alignItems: 'center',
        alignSelf: 'flex-start',
        shadowColor: '#000',
        shadowOpacity: 0.18,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 8,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: "Poppins_600SemiBold",
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 35,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginHorizontal: 6,
    },
    dotActive: {
        backgroundColor: '#2563eb',
        opacity: 1,
    },
});