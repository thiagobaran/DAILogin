import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Input from "../components/Input";
import { commonStyles } from "../styles";

function Comprar({ navigation }) {
    return (
        <ScrollView style={commonStyles.container}>
            <View style={{marginBottom: 20}}>
                <Text style={commonStyles.header}>Comprar</Text>
                <Input label='Numero de tarjeta' placeholder='XXXX XXXX XXXX XXXX' secureTextEntry={false} inputMode="numeric" maxLength={16} minLength={16} />
                <Input label='Nombre y apellido' placeholder='' secureTextEntry={false} inputMode="text" />
                <Input label='Num. de DNI' placeholder='46873102' secureTextEntry={false} inputMode="numeric" maxLength={8} minLength={8} />
                <Input label='Código de seguridad' placeholder='***' secureTextEntry={false} inputMode="numeric" maxLength={3} minLength={3} />
                <TouchableOpacity style={commonStyles.editButton} onPress={() => navigation.navigate('CompraExitosa')}>
                    <Text style={commonStyles.buttonText}>Comprar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={commonStyles.volverButton}
                    onPress={() =>
                        navigation.goBack()
                    }
                >
                    <Text style={commonStyles.buttonText}>Volver atrás</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Comprar