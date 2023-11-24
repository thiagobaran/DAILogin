import React from "react";
import { commonStyles } from "../styles";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Card = ({ product, onDelete }) => {
  const navigation = useNavigation();

  const screenWidth = Dimensions.get("window").width;

  const handleDelete = () => {
    if (onDelete) {
      onDelete(product);
    }
  };

  return (
    <View style={[styles.container, { width: screenWidth / 2 - 20 }]}>
      <Image source={{ uri: product.thumbnail }} style={styles.image}></Image>
      <Text style={styles.cardTitle}>{product.title}</Text>
      <Text style={commonStyles.price}>U$D{product.price}</Text>
      <Text style={commonStyles.text}>{product.description}</Text>
      <TouchableOpacity style={commonStyles.editButton} onPress={() => navigation.navigate("Producto", { producto: product })}>
        <Text style={commonStyles.buttonText}>Mas info</Text>
      </TouchableOpacity>
      {onDelete && (
        <TouchableOpacity style={commonStyles.editButton} onPress={handleDelete}>
        <Text style={commonStyles.buttonText}>Eliminar del carrito</Text>
      </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginVertical: 10,
    margin: 10,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
    height: undefined,
    aspectRatio: 1.75,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 0,
    marginTop: 10,
  },
});

export default Card;
