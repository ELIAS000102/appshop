import {  Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {style} from "../Styles/globalStyles";

type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
  onPress?: () => void;
};

export default function ProductCard({
  name,
  price,
  imageUrl,
  onPress,
}: ProductCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style.productCard}
    >
      <Image
        source={{ uri: imageUrl }}
        style={style.productImage}
      />
      <Text style={{ fontSize: 16, fontWeight: "600" }} numberOfLines={1}>
        {name}
      </Text>
      <Text style={{ fontSize: 14, color: "#4caf50", marginTop: 4 }}>
        S/.{price.toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
}
