import { Slot } from "expo-router";
import React from "react";

export default function PrivateLayout() {
  return (
    <Slot
      screenOptions={{
        headerShown: false
      }}
    />
  );
}