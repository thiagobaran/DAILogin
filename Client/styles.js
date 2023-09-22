import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2', // Color de fondo general
        padding: 20,
        justifyContent: 'center', // Centra verticalmente los elementos en el contenedor
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'blue', // Color del encabezado
    },
    profileInfo: {
        backgroundColor: 'white', // Fondo del cuadro de información del perfil
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: 'rgba(0, 0, 0, 0.2)', // Sombra suave
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    fieldLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black', // Color de las etiquetas de campo
    },
    fieldValue: {
        fontSize: 18,
        color: 'gray', // Color de los valores de campo
    },
    editButton: {
        backgroundColor: 'blue',
        alignItems: 'center',
        paddingVertical: 15, // Cambia padding a paddingVertical para controlar la altura verticalmente
        paddingHorizontal: 20, // Añade paddingHorizontal para controlar el espacio horizontal
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center', // Centra horizontalmente el botón
      },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    message: {
        padding: 10,
        fontSize: 18,
        color: 'red', // Color del mensaje de error
    },
    link: {
        color: 'blue', // Color de los enlaces
        textDecorationLine: 'underline', // Subraya los enlaces
    },
});
