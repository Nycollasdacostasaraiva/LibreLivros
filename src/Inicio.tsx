import 'react-native';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

const Inicio = () => {
return(
    <View style={css.background}>
        <View style={css.container}>
            <Image source={require('../assets/logo.png')} style={css.logo}></Image>
            <Text style={css.h1}>Olá! seja bem vindo(a) ao LibreLivros</Text>
            <Text style={css.h2}>Você já conhece o Aplicativo?</Text>
            <View style={css.container2}>
                <TouchableOpacity style={css.button}>
                    <Text>Sim, ir para o Login.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.button}>
                    <Text>Não, me conte mais.</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    
)}

const css = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#ccffb8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        padding: 20,
        backgroundColor: '#fefffeff',
        alignItems: 'center',
        borderRadius: 35,
        width: '90%',
    },
        logo: {
        borderRadius: 100,
        width: 100,
        height: 100,
        marginBottom: 15,
    },
    h1: {
        textAlign: 'center',
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    h2: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    container2: {
        position: 'relative',
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#cccccc',
        borderRadius: 50,
        width: '45%',
        padding: 10,
    },
    })

export default Inicio;