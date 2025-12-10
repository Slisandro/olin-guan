import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

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

            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="px-[20px] pt-[50px] gap-[12px] items-center">
                    <View className="flex-row items-center justify-between w-full">
                        <Pressable className="flex flex-row gap-[10px] items-center" onPress={() => router.push("/(private)/(car)/detail")}>
                            <ARROW_BACK />
                            <Text className="font-poppins-bold text-[14px] text-center font-[700] text-white">
                                Back
                            </Text>
                        </Pressable>
                    </View>

                    <Text className="text-[20px] font-poppins-bold text-white text-center">Cancellation policy</Text>
                </View>

                <View className="bg-white flex-1 mt-[10px] gap-[20px] pb-[30px] pt-[20px] px-[20px] w-full">
                    <Text className="text-[18px] text-[#646464] font-poppins-bold">
                        1. Types data we collect
                    </Text>

                    <Text className="text-[12px] text-[#646464] font-poppins">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>

                    <Text className="text-[12px] text-[#646464] font-poppins">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </Text>

                    <Text className="text-[18px] text-[#646464] font-poppins-bold">2. Use of your personal data</Text>

                    <Text className="text-[12px] text-[#646464] font-poppins">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>

                    <Text className="text-[12px] text-[#646464] font-poppins">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </Text>

                    <Text className="text-[18px] text-[#646464] font-poppins-bold">3. Disclosure of your personal data</Text>

                    <Text className="text-[12px] text-[#646464] font-poppins">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>

                    <Text className="text-[12px] text-[#646464] font-poppins">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'transparent',
        height: 400,
        // borderRadius: 16
    },
    image: {
        width: "100%",
        height: "100%",
        // borderRadius: 16
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
        paddingBottom: 30
    },
    box: {
        gap: 8
    },
    titleSmall: {
        color: '#fff',
        fontSize: 48,
        fontWeight: '700',
        fontFamily: "Poppins_700Bold",
    },
    titleLarge: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: "Poppins_500Medium",
        marginBottom: 20,
        lineHeight: 24
    }
});


