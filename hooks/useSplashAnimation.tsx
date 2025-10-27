import { useFonts } from "expo-font";
import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";

import { Poppins_100Thin } from '@expo-google-fonts/poppins/100Thin';
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins/200ExtraLight';
import { Poppins_300Light } from '@expo-google-fonts/poppins/300Light';
import { Poppins_400Regular } from '@expo-google-fonts/poppins/400Regular';
import { Poppins_500Medium } from '@expo-google-fonts/poppins/500Medium';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins/600SemiBold';
import { Poppins_700Bold } from '@expo-google-fonts/poppins/700Bold';
import { Poppins_800ExtraBold } from '@expo-google-fonts/poppins/800ExtraBold';
import { Poppins_900Black } from '@expo-google-fonts/poppins/900Black';

export function useSplashAnimation() {
    const opacity = useRef(new Animated.Value(0)).current;
    const [isReady, setIsReady] = useState(false);

    const [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_200ExtraLight,
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        Poppins_900Black,
    });

    useEffect(() => {
        if (!fontsLoaded) return;

        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.delay(1000),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),
        ]).start(() => setIsReady(true));
    }, [fontsLoaded]);

    return { opacity, isReady, fontsLoaded };
}
