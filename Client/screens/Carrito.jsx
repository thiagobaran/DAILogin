import { ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useContext } from 'react';
import { commonStyles } from '../styles';
import { carritoContext } from '../context/carritoContext';
import Card from '../components/Card';

export default function Carrito({ navigation }) {
    const { carrito, setCarrito } = useContext(carritoContext);

    const handleDelete = (productToDelete) => {
        console.log(productToDelete)
        const updatedCarrito = carrito.filter((product) => product.id !== productToDelete.id);
        setCarrito(updatedCarrito);
    };

    return carrito.length > 0 ? (
        <ScrollView style={commonStyles.container}>
            <Text style={commonStyles.header}>Carrito</Text>
            {carrito.map((product) => (
                <Card key={product.id} product={product} onDelete={() => handleDelete(product)} />
            ))}
            <TouchableOpacity
                style={commonStyles.editButton}
                onPress={() => {
                    setCarrito([]);
                    navigation.navigate('Comprar');
                }}
            >
                <Text style={commonStyles.buttonText}>Comprar todo</Text>
            </TouchableOpacity>
        </ScrollView>
    ) : (
        <ScrollView style={commonStyles.container}>
            <Text style={commonStyles.header}>Carrito</Text>
            <Text style={{ fontSize: 16, padding: 10, textAlign: "center" }}>Aun no hay productos en el carrito</Text>
            <TouchableOpacity
                style={commonStyles.editButton}
                onPress={() => {
                    navigation.navigate('HomePage')
                }
                }
            >
                <Text style={commonStyles.buttonText}>Seguir comprando</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}