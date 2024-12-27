import { View } from "react-native";
import {
  Image,
  Card,
  VStack,
  Heading,
  Text,
  Box,
  Button,
  ButtonText,
} from "@/components/gluestackUi";

interface ProductListItemProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
  };
}

export function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Card className="p-5 rounded-lg max-w-[360px] flex-1">
      <Image
        source={{
          uri: product.image,
        }}
        className="mb-6 h-[240px] w-full rounded-md"
        alt={`${product.name} image`}
        resizeMode="contain"
      />
      <Text className="text-sm font-normal mb-2 text-typography-700">
        {product.price}
      </Text>
      <VStack className="mb-6">
        <Heading size="md" className="mb-4">
          {product.name}
        </Heading>
        <Text size="sm">{product.description}</Text>
      </VStack>
      <Box className="flex-col sm:flex-row">
        <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          variant="outline"
          className="px-4 py-2 border-outline-300 sm:flex-1"
        >
          <ButtonText size="sm" className="text-typography-600">
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Card>
  );
}
