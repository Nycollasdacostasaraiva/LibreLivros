import 'react-native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Inicio() {
return(
    <View style={css.container}>
        <Text style={css.h1}>Olá! seja bem vindo(a) ao LibreLivros</Text>
        <Text style={css.h2}>Você já conhece o Aplicativo?</Text>
        <View style={css.container2}>
            <TouchableOpacity style={css.botao}>
                <Text>Sim, ir para o Login.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.botao}>
                <Text>Não, me mostre mais.</Text>
            </TouchableOpacity>
        </View>
    </View>

)}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#309606',
        position: 'relative',
    },
    h1: {
        textAlign: 'center',
        top: 100,
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
    },
    h2: {
        textAlign: 'center',
        top: '13%',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container2: {
        position: 'relative',
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        justifyContent: 'center'
    },
    botao: {
        backgroundColor: '#cccccc',
        borderRadius: 50,
        width: '40%',
        padding: 10,
        alignItems: 'center',
        top: '950%',
    }
    })

export default Inicio;