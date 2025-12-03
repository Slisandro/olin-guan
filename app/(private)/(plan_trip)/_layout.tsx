import { Slot } from "expo-router";
import React from "react";

export default function Index() {
    return (
        <Slot
            initialRouteName="index"
            screenOptions={{
                headerShown: false
            }}
        />
    )
}