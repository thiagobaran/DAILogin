import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F4F6',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 10,
        color: '#333333',
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
        color: '#555555',
    },
    button: {
        backgroundColor: '#3498DB',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        width: "100%",
        height: undefined,
        aspectRatio: 1.75,
    },
    price: {
        fontSize: 20,
        paddingLeft: 10,
        color: "#3b3a3a"
    },
    text: {
        fontSize: 16,
        padding: 10
    },
    profileInfo: {
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    fieldValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    editButton: {
        backgroundColor: '#e47911',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        margin: 10
    },
    logoutButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        margin: 10
    },
    volverButton: {
        backgroundColor: 'blue',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        margin: 10
    },
    // Otros estilos para campos, botones, etc. con cambios en colores y formas
});
