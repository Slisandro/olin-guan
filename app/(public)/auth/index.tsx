import { ImageBackground, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Login() {
    return (
        <SafeAreaView className="flex-1">
            <ImageBackground className="flex-1" source={require("@/assets/images/auth/bg-auth.png")} />
            <View className="h-2/3 mt-auto bg-[#FFFFFFCC] rounded-t-[80px] pt-[25px]">
                <Text className="text-text-900 text-[36px] font-bold font-poppins-bold">Welcome back</Text>
                <Text className="mt-[15px] text-text-900 text-[18px] font-[400] font-poppins">Welcome back</Text>

                <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#9CA3AF"
                        className="ml-3 flex-1 text-gray-700 font-poppins"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}