import 'react-native';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

function Login() {
return(
    <View style={css.container}>
        <Text style={css.msgLogin}>Faça seu Login ou Cadastro</Text>
        <View style={css.container2}>
            <TextInput style={css.input} placeholder='E-mail'></TextInput>
            <View style={css.break}></View>
            <TextInput style={css.input} placeholder='Senha'></TextInput>
            <TouchableOpacity style={css.botao}>
            <Text>Enviar</Text>
            </TouchableOpacity>
        <TouchableOpacity style={css.noLogin}>
            <Text>Quero continuar sem uma conta</Text>
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
    msgLogin: {
        textAlign: 'center',
        top: 200,
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
    },
    container2: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
    },
    input: {
        top: '44%',
        width: '70%',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 40
    },
    break: {
        height: 10
    },
    botao: {
        backgroundColor: '#cccccc',
        borderRadius: 50,
        width: '70%',
        padding: 10,
        alignItems: 'center',
        top: '47%',
    },
    noLogin: {
        backgroundColor: '#cccccc',
        borderRadius: 50,
        width: '55%',
        padding: 10,
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30,
    }
})

export default Login;