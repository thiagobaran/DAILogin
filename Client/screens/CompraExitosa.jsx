import { View, Text, TouchableOpacity } from "react-native";
import { commonStyles } from "../styles";
import Icon from 'react-native-vector-icons/MaterialIcons'

function CompraExitosa({ navigation }) {
    return (
        <View style={commonStyles.container}>
            <View style={{alignItems: "center"}}>
                <Text style={commonStyles.header}>Compra exitosa</Text>
                <Text style={commonStyles.text}>Su compra ha sido realizada con éxito</Text>
                <Icon style={{padding: 10}} name="accept" size={100} color="green" />
                <TouchableOpacity style={commonStyles.editButton} onPress={() => navigation.navigate('HomePage')}>
                    <Text style={commonStyles.buttonText}>Seguir comprando</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CompraExitosa