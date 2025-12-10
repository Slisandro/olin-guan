import { Slot } from "expo-router";

export default function PrivateLayout() {
  return (
    <Slot
      initialRouteName="(tabs)"
      screenOptions={{
        headerShown: false
      }}
    />
  );
}