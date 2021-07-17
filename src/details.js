import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';


export default function details({navigation}){
    return(
        <View>
            <Text>{navigation.getParam('id')}</Text>
            <Text>{navigation.getParam('pegirim')}</Text>
            <Text>{navigation.getParam('penerima')}</Text>
            <Text>{navigation.getParam('alamat')}</Text>
            
        </View>
    )
}