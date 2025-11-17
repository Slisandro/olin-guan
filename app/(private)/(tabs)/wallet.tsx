import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

export default function Wallet() {
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
                        Your  Wallet
                    </Text>

                    <Text className="w-[280px] text-center font-poppins-medium font-[500] text-[12px] text-white">
                        Control your payments, use your coupons and review your travel history
                    </Text>
                </View>

                <View className="bg-white flex-1 rounded-t-[40px] mt-[30px] pt-[30px] gap-[20px] px-[20px] pb-[30px]">
                    <View className="p-[20px] shadow-100 rounded-[12px] bg-white flex items-start justify-between gap-[10px]">
                        <View className="flex-row w-full justify-start gap-6">
                            <View className="w-[80px] h-[80px] bg-[#D9E6F8] rounded-[12px] items-center justify-center">
                                <Svg
                                    width={57}
                                    height={35}
                                    viewBox="0 0 57 35"
                                    fill="none"
                                >
                                    <Path
                                        d="M4.754 22.58c-.343-.586-.474-2.025-.338-3.774C4.815 14.508 7.833.47 29.86.47c21.726 0 25.294 13.354 25.865 17.447.408 2.887-.004 4.11-.304 4.593L53.072 24.9l-46.237.258-2.081-2.578z"
                                        fill="#FFE36C"
                                    />
                                    <Path
                                        d="M29.861.938c4.833 0 9.099.684 12.68 2.034 2.986 1.125 5.531 2.728 7.556 4.762 3.919 3.928 4.922 8.48 5.17 10.252.394 2.789-.018 3.895-.215 4.242l-2.17 2.213-45.816.257-1.922-2.371c-.234-.432-.399-1.65-.263-3.455.207-2.222 1.046-6.52 4.35-10.374 4.294-5.02 11.232-7.56 20.63-7.56zm0-.938C7.127 0 4.324 14.742 3.95 18.773c-.047.61-.211 3.066.421 4.079l2.246 2.78 46.654-.263 2.518-2.564c.393-.596.82-1.97.398-4.955C55.497 12.9 51.176 0 29.861 0z"
                                        fill="#82AEC0"
                                    />
                                    <Path
                                        d="M4.748 24.399c.516 0 .938.375.985.89a.897.897 0 01-.188.704c-.14.187-.422.328-.656.375h-.094a.974.974 0 01-.984-.89c-.047-.563.328-1.032.89-1.08h.047zm0-1.406h-.28a2.375 2.375 0 00-2.11 2.625 2.387 2.387 0 002.39 2.109h.282a2.375 2.375 0 002.109-2.625 2.387 2.387 0 00-2.39-2.11z"
                                        fill="#82AEC0"
                                    />
                                    <Path
                                        d="M53.983 21.286c-.422-4.032-1.125-18.188-23.86-18.188-22.734 0-23.437 14.203-23.812 18.235-.047.609-2.25 1.218-1.922 1.734l5.86 9.516c.726 1.246 1.95 1.476 2.98 1.476l13.285-.305c2.531-.046 4.364-.07 6.895-.023l13.735.328c1.439.09 2.221-.698 2.807-1.476l5.86-9.563c.422-.516-1.782-1.125-1.828-1.734z"
                                        fill="#FFC107"
                                    />
                                    <Path
                                        d="M2.844 33.75l-1.81-.707c-.81-.296-1.26-1.205-.918-2.011l2.386-3.75c.328-.713 1.134-1.079 1.86-.844.727.239 1.191 1.008.994 1.786l-.586 4.504a1.479 1.479 0 01-1.926 1.022z"
                                        fill="#82AEC0"
                                    />
                                    <Path
                                        d="M3.366 27.178s-2.1 3.249-2.32 3.76c-.22.51-.502 1.284 1.11 1.809.254.08 1.229-3.727 1.44-4.533.215-.806-.23-1.036-.23-1.036z"
                                        fill="#94D1E0"
                                    />
                                    <Path
                                        d="M53.983 21.286c-.17-1.603-.38-4.81-2.007-8.086-.904-1.79-2.339-1.41-3.01-.328-.829 1.34-2.45 5.034-1.255 7.5a19.908 19.908 0 011.654 4.866c.572 2.873-1.63 5.554-4.565 5.554H15.765c-2.906 0-5.095-2.63-4.575-5.489a31.281 31.281 0 011.318-4.93c1.045-2.921-.427-6.16-1.257-7.5-.665-1.074-2.095-1.276-2.7-.17-1.87 3.47-2.086 6.942-2.24 8.635-.047.61-2.25 1.218-1.922 1.734l5.86 9.516c.726 1.247 1.95 1.476 2.98 1.476l13.285-.304c2.531-.047 4.364-.07 6.895-.024l13.735.328c1.439.09 2.221-.698 2.807-1.476l5.86-9.563c.422-.52-1.782-1.13-1.828-1.739z"
                                        fill="#F2A600"
                                    />
                                </Svg>
                            </View>
                            <View className="w-1/2">
                                <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>Balance Sheet</Text>
                                <Text className="font-poppins-bold text-[32px] font-[700] text-primary-700">
                                    $850
                                </Text>
                                <Text className="font-poppins-medium text-[14px] font-[500] text-[#8A8A8A]">
                                    Coupon balance
                                </Text>
                                <Text className="font-poppins-bold text-[32px] font-[700] text-warning-900">
                                    $300
                                </Text>
                            </View>
                        </View>
                        <View className="w-full flex flex-row justify-between">
                            <Pressable className="items-center flex-row justify-center gap-[4px] py-[7px] px-[28px] bg-[#FCF9E4] border-[1px] border-[#F2CB04] rounded-[12px]">
                                <Svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <Path
                                        d="M10.001 18.334c4.584 0 8.334-3.75 8.334-8.334 0-4.583-3.75-8.333-8.334-8.333-4.583 0-8.333 3.75-8.333 8.333 0 4.584 3.75 8.334 8.333 8.334zM6.668 10h6.667M10 13.333V6.666"
                                        stroke="#F2CB04"
                                        strokeWidth={1.25}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <Text>Add funds</Text>
                            </Pressable>

                            <Pressable className="flex flex-row items-center justify-center gap-[4px]  py-[7px] px-[28px] bg-[#D9E6F8] border-[1px] border-[#1B77F2] rounded-[12px]">
                                <Svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <Path
                                        d="M3.326 12.217L2.059 10.95a1.338 1.338 0 010-1.883L3.326 7.8c.217-.216.392-.641.392-.941V5.067c0-.733.6-1.333 1.333-1.333h1.792c.3 0 .725-.175.941-.392l1.267-1.267a1.338 1.338 0 011.883 0l1.267 1.267c.217.217.642.392.942.392h1.791c.734 0 1.334.6 1.334 1.333V6.86c0 .3.175.725.391.941l1.267 1.267a1.338 1.338 0 010 1.883l-1.267 1.267c-.216.217-.391.642-.391.942v1.791c0 .734-.6 1.334-1.334 1.334h-1.791c-.3 0-.725.175-.942.392l-1.267 1.266a1.338 1.338 0 01-1.883 0l-1.267-1.267a1.537 1.537 0 00-.941-.391H5.05c-.733 0-1.333-.6-1.333-1.334V13.16c0-.309-.175-.734-.392-.942zM7.5 12.5l5-5"
                                        stroke="#1B77F2"
                                        strokeWidth={1.25}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M12.08 12.084h.008M7.912 7.917h.008"
                                        stroke="#1B77F2"
                                        strokeWidth={1.66667}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <Text>See details</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View className="p-[20px] shadow-100 rounded-[12px] bg-white items-start gap-[10px]">
                        <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>Latest payments</Text>

                        <View>
                            <View className="w-full flex-row items-center gap-1">
                                <Text className="w-[50px] bg-[#FCF9E4] px-[5px] py-[3px]">29 jun</Text>
                                <Text className="font-[600] text-[12px] text-[#8A8A8A] font-poppins-semibold">Hotel Caribe Maya</Text>
                                <Text className="font-[600] text-[12px] text-[#8A8A8A] font-poppins-semibold text-right ml-auto">$ 2.400</Text>
                            </View>
                            <View className="w-full flex-row items-center gap-1">
                                <Text className="w-[50px] bg-[#FCF9E4] px-[5px] py-[3px]">30 jun</Text>
                                <Text className="font-[600] text-[12px] text-[#8A8A8A] font-poppins-semibold">Isla Mujeres tour</Text>
                                <Text className="font-[600] text-[12px] text-[#8A8A8A] font-poppins-semibold text-right ml-auto">$ 980</Text>
                            </View>
                            <View className="w-full flex-row items-center gap-1">
                                <Text className="w-[50px] bg-[#FCF9E4] px-[5px] py-[3px]">30 jun</Text>
                                <Text className="font-[600] text-[12px] text-[#8A8A8A] font-poppins-semibold">Dinner to El muellecito</Text>
                                <Text className="font-[600] text-[12px] text-[#8A8A8A] font-poppins-semibold text-right ml-auto">$ 560</Text>
                            </View>
                        </View>
                    </View>

                    <View className="p-[20px] shadow-100 rounded-[12px] bg-white items-start gap-[10px]">
                        <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>Balance Sheet</Text>
                        <View className="flex-row w-full justify-start gap-6">
                            <View className="w-[80px] h-[80px] bg-[#FEF2F2] rounded-[12px] items-center justify-center">
                                <Svg
                                    width={60}
                                    height={60}
                                    viewBox="0 0 60 60"
                                    fill="none"
                                >
                                    <Path
                                        d="M58.017 19.495c.038 0 .07.005.108.005v-1.622h-1.617a4.17 4.17 0 01-4.088-3.342 1.034 1.034 0 00-1.012-.83H8.592c-.492 0-.914.347-1.012.83a4.17 4.17 0 01-4.088 3.342H1.875V19.5c.038-.005.07-.005.108-.005a1.298 1.298 0 110 2.597c-.038 0-.07-.005-.108-.005v1.093c.038-.005.07-.005.108-.005a1.298 1.298 0 110 2.597c-.038 0-.07-.005-.108-.005v1.092c.038-.005.07-.005.108-.005a1.305 1.305 0 011.298 1.304c0 .717-.581 1.298-1.298 1.298-.038 0-.07-.005-.108-.005v1.093c.038-.005.07-.005.108-.005.717 0 1.298.586 1.298 1.303S2.7 33.14 1.983 33.14c-.038 0-.07-.004-.108-.004v1.092c.038-.005.07-.005.108-.005a1.298 1.298 0 110 2.597c-.038 0-.07-.005-.108-.005v1.093c.038-.005.07-.005.108-.005a1.298 1.298 0 110 2.597c-.038 0-.07-.005-.108-.005v1.622h1.617a4.17 4.17 0 014.088 3.342c.098.483.52.83 1.012.83h42.816c.492 0 .914-.347 1.012-.83a4.17 4.17 0 014.088-3.342h1.617V40.5c-.038.005-.07.005-.108.005a1.298 1.298 0 110-2.597c.038 0 .07.004.108.004V36.82c-.038.005-.07.005-.108.005a1.298 1.298 0 110-2.597c.038 0 .07.005.108.005V33.14c-.038.005-.07.005-.108.005a1.298 1.298 0 110-2.597c.038 0 .07.005.108.005V29.46c-.038.004-.07.004-.108.004a1.298 1.298 0 110-2.596c.038 0 .07.004.108.004v-1.092c-.038.005-.07.005-.108.005a1.298 1.298 0 110-2.597c.038 0 .07.005.108.005V22.1c-.038.005-.07.005-.108.005a1.298 1.298 0 01-1.298-1.298c0-.732.581-1.313 1.298-1.313z"
                                        fill="#ED6C66"
                                    />
                                    <Path
                                        d="M48.938 41.938H11.063a2.397 2.397 0 01-2.395-2.395V20.455a2.397 2.397 0 012.395-2.395h37.875a2.397 2.397 0 012.396 2.395v19.088a2.397 2.397 0 01-2.396 2.395z"
                                        stroke="#BB303D"
                                        strokeWidth={3}
                                        strokeMiterlimit={10}
                                    />
                                    <Path
                                        d="M43.19 18.06H16.812v23.883h26.376V18.06z"
                                        stroke="#BB303D"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                    />
                                    <G
                                        opacity={0.8}
                                        stroke="#4E342E"
                                        strokeWidth={9}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                    >
                                        <Path d="M22.344 25.922h15.31M24.574 34.078h10.847" />
                                    </G>
                                    <Path
                                        opacity={0.5}
                                        d="M47.121 22.125v15.75M12.875 22.125v15.75"
                                        stroke="#4E342E"
                                        strokeWidth={6}
                                        strokeMiterlimit={10}
                                    />
                                </Svg>
                            </View>
                            <View className="">
                                <Text className="font-poppins-bold text-[32px] font-[700] text-primary-700">
                                    10%
                                </Text>
                                <Text className='font-poppins-bold font-700 text-[16px] text-text-600 leading-[19px]'>discount on nightlife</Text>
                                <Text className="font-poppins-medium text-[16px] font-[500] text-text-600">
                                    Expire: 3 Jul
                                </Text>
                            </View>
                        </View>
                        <Pressable className="flex flex-row items-center justify-center gap-[4px] w-3/4 mx-auto py-[7px] px-[28px] bg-[#D9E6F8] border-[1px] border-[#1B77F2] rounded-[12px]">
                            <Text>Use Now</Text>
                        </Pressable>
                    </View>

                    <Pressable className="flex flex-row items-center justify-center gap-[4px] py-[12px] w-full bg-[#1B77F2] rounded-[12px]">
                        <Text className="text-white font-poppins-semibold font-[600] text-[16px] ">Add payment card</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}
