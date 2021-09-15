import React, { useState } from "react";
import { View, Text, FlatList } from "react-native"
import styles from "./style";

export default function ResultCadastro(props){
    return(
        <View style={styles.resultContent}>
            <Text style={styles.information}>{props.messageResult}</Text>
            <Text style={styles.resultDados}>{props.ResultCadastro}</Text>
        </View>
    );
}