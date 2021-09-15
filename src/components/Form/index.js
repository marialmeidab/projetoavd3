import React, { useState } from "react";
import {    View , 
            Text, 
            TextInput, 
            Button, 
            TouchableOpacity, 
            Vibration, 
            Share,
            Pressable,
            Keyboard,
            FlatList} from "react-native"
import ResultCadastro from "./ResultCadastro" 
import styles from "./style";

export default function Form(){

const [nome, setNome] = useState(null)
const [email, setEmail] = useState(null)
const [telefone, setTelefone] = useState(null)
const [cadastro, setCadastro] = useState(null)
const [messageCadastro, setMessageCadastro] = useState("Preencha nome, email e telefone");
const [textButton, setTextButton] = useState("Adicionar")   
const [errorMessage, setErrorMessage] = useState(null)  
{/* const [dadosList, setDadosList] = useState([]) */}

function retornaCadastro(){
    let totalDados = (nome + ", " + email + ", " + telefone)
   {/*} setDadosList((arr) => [...arr, { id: new Date().getTime(), dados: totalDados }]) */}
    setCadastro(totalDados)
}

function verification(){
    if(nome == null || email == null || telefone == null){
        Vibration.vibrate();
        setErrorMessage("campo obrigatório*")
    }
}

function validation(){
    if(nome != null && email != null && telefone != null){
        setMessageCadastro("Seus dados são:")
        retornaCadastro()
        setTextButton("Adicionar Novo")
        setNome(null)
        setEmail(null)
        setTelefone(null)
        setErrorMessage(null)
        return 
    }else{
        verification()
        setCadastro(null)
        setTextButton("Adicionar")
        setMessageCadastro("Preencha nome, email e telefone")
    }


}

    return(        
        <View style={styles.formContext}>
            <Pressable onPress={Keyboard.dismiss} style={styles.form} >
                <Text style={styles.formLabel} >Nome</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText = {setNome}
                    value = {nome}
                    placeholder= "nome"
                    keyboardType= "default"/>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Text style={styles.formLabel}>Email</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText = {setEmail}
                    value={email}
                    placeholder= "email"
                    keyboardType= "default"/>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Text style={styles.formLabel}>Telefone</Text>
                <TextInput
                    style={styles.input}
                    onChangeText = {setTelefone}
                    value={telefone}
                    placeholder= "telefone"
                    keyboardType="number-pad"
                    returnKeyType="done"/>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TouchableOpacity
                    onPress = {() => {validation()}}
                    style={styles.buttonEnviar}
                >
                    <Text style={styles.textButtonEnviar}>{textButton}</Text>
                </TouchableOpacity>
                
            </Pressable>
            <ResultCadastro messageResult={messageCadastro} 
                            ResultCadastro={cadastro}  
                           /> 
            { /* <FlatList
                                style={styles.listDados}
                                data={dadosList.reverse}
                                renderItem={({item}) => {
                                        return (
                                            <Text>
                                                {item.dados}
                                            </Text>
                                        )
                                    } 
                                } keyExtractor={(item) => {
                                    item.id 
                                }}
                            ></FlatList> */}
        </View>
        
    );
}