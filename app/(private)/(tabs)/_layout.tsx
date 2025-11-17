import HomeIcon from '@/components/icons/building/home/home';
import PlaneInflightIcon from '@/components/icons/car/plane-inflight/plane-inflight';
import RoutingIcon from '@/components/icons/location/routing/routing';
import WalletIcon from '@/components/icons/money/wallet/wallet';
import UserIcon from '@/components/icons/users/user/user';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1B77F2',
        tabBarInactiveTintColor: '#646464',
        tabBarStyle: {
          height: 60
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View className={`${focused ? "bg-[#D9E6F8]" : "bg-transparent"} rounded-full p-1.5`}>
              <HomeIcon color={color} size="medium" />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`${focused ? "text-primary-700" : "text-text-600"} font-poppins-semibold text-[10px] mt-1`}>
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <View className={`${focused ? "bg-[#D9E6F8]" : "bg-transparent"} rounded-full p-1.5`}>
              <RoutingIcon color={color} size="medium" />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`${focused ? "text-primary-700" : "text-text-600"} font-poppins-semibold text-[10px] mt-1`}>
              Explore
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="trip"
        options={{
          title: 'My Trip',
          tabBarIcon: ({ color, focused }) => (
            <View className={`${focused ? "bg-[#D9E6F8]" : "bg-transparent"} rounded-full p-1.5`}>
              <PlaneInflightIcon color={color} size="medium" />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`${focused ? "text-primary-700" : "text-text-600"} font-poppins-semibold text-[10px] mt-1`}>
              My trip
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color, focused }) => (
            <View className={`${focused ? "bg-[#D9E6F8]" : "bg-transparent"} rounded-full p-1.5`}>
              <WalletIcon color={color} size="medium" />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`${focused ? "text-primary-700" : "text-text-600"} font-poppins-semibold text-[10px] mt-1`}>
              Wallet
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View className={`${focused ? "bg-[#D9E6F8]" : "bg-transparent"} rounded-full p-1.5`}>
              <UserIcon color={color} size="medium" />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`${focused ? "text-primary-700" : "text-text-600"} font-poppins-semibold text-[10px] mt-1`}>
              Profile
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
