import "@/global.css";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack />
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({});
