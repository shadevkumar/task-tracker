import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CommonButton } from "@repo/ui/src/button";

export default function Native() {
  return (
    <View className="bg-black min-h-screen flex justify-center items-center ">
      <Text className="text-white text-3xl">Native App here</Text>
      <CommonButton children="Native App Button" onClick={() => {}} />

      <StatusBar style="auto" />
    </View>
  );
}
