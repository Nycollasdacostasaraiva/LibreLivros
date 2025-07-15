import 'react-native';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

const Login = () => {
return(
    <View style={css.background}>
        <View style={css.container}>
            <Image source={require('../assets/logo.png')} style={css.logo}></Image>
            <Text style={css.msgLogin}>Faça seu Login ou Cadastro</Text>
            <View style={css.container2}>
                <TextInput style={css.input} placeholder='✉️ E-mail'></TextInput>
                <TextInput style={css.input} placeholder='🔒 Senha'></TextInput>
                <TouchableOpacity style={css.button1}>
                <Text>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.button2}>
                <Text>Quero continuar sem uma conta</Text>
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
    msgLogin: {
        textAlign: 'center',
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    container2: {
        position: 'relative',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        width: '100%',
        backgroundColor: '#ccffb8',
        color: 'black',
        borderRadius: 40,
        marginBottom: 10,
        paddingLeft: 15,
    },
    button1: {
        backgroundColor: '#309606',
        borderRadius: 50,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 30,
    },
    button2: {
        backgroundColor: '#bebebeff',
        borderRadius: 50,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
    }
})

export default Login;