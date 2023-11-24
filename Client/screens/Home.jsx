import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { commonStyles } from '../styles';
import { productsContext } from '../context/productsContext';
import Card from '../components/Card';

export default function Home({ navigation }) {
  const { products } = React.useContext(productsContext);

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Producto', { producto: item })}>
      <Card product={item} />
    </TouchableOpacity>
  );

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Productos</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Puedes ajustar el número de columnas según tu preferencia
      />
    </View>
  );
}
