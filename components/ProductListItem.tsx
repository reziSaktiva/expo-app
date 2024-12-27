import { Text, View } from "react-native";

export function ProductListItem({ product }: { product: any }) {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>{product.name}</Text>
    </View>
  );
}
