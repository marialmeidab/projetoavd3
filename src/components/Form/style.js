import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "90%",
        justifyContent:"space-around",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems:"center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form: {
        width:"100%",
        height:"auto",
        marginTop: 20,
        paddingLeft:10,
    },
    formLabel: {
        color: "#000",
        fontSize:18,
        paddingLeft:20,
    },
    input: {
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    buttonEnviar: {
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#4682b4",
        width:"90%",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:10,
        
    },
    textButtonEnviar: {
        fontSize:15,
        color:"#fff",
    },
    errorMessage: {
        fontSize:12,
        color:"red",
        paddingLeft:20,
    }
    
});

export default styles