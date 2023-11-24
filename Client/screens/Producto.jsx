import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { commonStyles } from "../styles";
import { carritoContext } from "../context/carritoContext";

function Producto({ route, navigation }) {
  const { producto } = route.params;
  const { carrito, setCarrito } = React.useContext(carritoContext);

  const agregarAlCarrito = () => {
    setCarrito([...carrito, producto]);
    navigation.navigate('Carrito');
  };

  const renderItem = ({ item }) => (
    <View style={commonStyles.productContainer}>
      <Text style={commonStyles.header}>{item.title}</Text>
      <Image source={{ uri: item.thumbnail }} style={commonStyles.image} />
      <Text style={commonStyles.price}>U$D{item.price}</Text>
      <Text style={commonStyles.text}>{item.description}</Text>
      <TouchableOpacity style={commonStyles.volverButton} onPress={agregarAlCarrito}>
        <Text style={commonStyles.buttonText}>Agregar al carrito</Text>
      </TouchableOpacity>
      <TouchableOpacity style={commonStyles.editButton} onPress={() => navigation.navigate("Comprar")}>
        <Text style={commonStyles.buttonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={[producto]} // Puedes pasar un array de productos si tienes más de uno
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()} // Asegúrate de tener una propiedad id en tus productos
      numColumns={5} // Configura el número de columnas deseado
    />
  );
}

export default Producto;
