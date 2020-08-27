import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, StyleSheet, Button, View, Image } from 'react-native';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.MainPage}>
                
                    <Text style={styles.Titletext}>Welcome to Basscoots APP !</Text>
                    <Text style={styles.choose}>Select the type</Text>
                    <View style={{width:300, height:60, backgroundColor: 'black', marginTop: 20, }}>
                    {/* <Image style={{width:40, height:40, backgroundColor:'yellow' }} source ={require('./icon/led.svg')} /> */}
                    {/* <Icon name="alarm-outline"></Icon> */}
                        <Text style={{color:'white', fontSize:40, textAlign:'center'}}>Spion</Text>
                    </View>
                <View style={{ width: 300, height: 60, backgroundColor: 'black', marginTop: 30 }}>
                    {/* <Image source={require('./icon/led.svg')} /> */}
                    <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }} >Hand Grip</Text>
                </View>
                <View style={{ width: 300, height: 60, backgroundColor: 'black', marginTop: 30 }} >
                    <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }} >LED</Text>
                </View>
                <View style={{ width: 300, height: 60, backgroundColor: 'black', marginTop: 30 }} >
                    <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }}>Accessories</Text>
                </View>
                
                {/* <Button
                    title="go to profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                /> */}
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        MainPage:
        {
            flex: 1,
            //   justifyContent:'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
            fontFamily: 'serif'
            
        },
         
          Titletext:
        {
           fontSize: 30,
           fontWeight: "bold",
           marginTop: 20
           
        },
        choose:
        {
         fontSize: 25,
         marginTop:40,
        }
    }
);

export default Home;