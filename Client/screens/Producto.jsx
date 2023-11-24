import React from "react"
import { ScrollView, Image, Text, TouchableOpacity } from "react-native"
import { commonStyles } from "../styles"
import { carritoContext } from "../context/carritoContext"

function Producto({ route, navigation }) {
    const { producto } = route.params
    const { carrito, setCarrito } = React.useContext(carritoContext)

    const agregarAlCarrito = () => {
        setCarrito([...carrito, producto])
        navigation.navigate('Carrito')
    }

    return (
        <ScrollView style={commonStyles.container}>
            <Text style={commonStyles.header}>{producto.title}</Text>
            <Image source={{uri: producto.thumbnail}} style={commonStyles.image} />
            <Text style={commonStyles.price}>U$D{producto.price}</Text>
            <Text style={commonStyles.text}>{producto.description}</Text>
            <TouchableOpacity style={commonStyles.volverButton} onPress={agregarAlCarrito}>
                <Text style={commonStyles.buttonText}>Agregar al carrito</Text>
            </TouchableOpacity>
            <TouchableOpacity style={commonStyles.editButton} onPress={() => navigation.navigate("Comprar")}>
                <Text style={commonStyles.buttonText}>Comprar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Producto