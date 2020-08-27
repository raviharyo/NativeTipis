import React, { Component } from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';
import { Avatar, Accessory } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        // var name = ['ravi', 'haryo', 'baskoro'];
        // var role = ['CEO', 'Vice President', 'Programmer']
        // var avatar_url = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
        return (
            <View style={styles.main}>
                <Text style={styles.title}>Account Profile</Text>
                <Avatar style={styles.ava}
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' ,
                    }}
                >
                    <Accessory />
                </Avatar>
                <Text>Ravi Haryo Baskoro</Text>
                <Text>raffiiphone99@gmail.com</Text>
                <Text>081228915102</Text>
                <Text>Silver Member</Text>
                <Text>Address : </Text>
                <Text>Perumahan Palem Hijau 2 Blok A-10 </Text>

                  
                {/* <ListItem
                    leftAvatar={{
                        title: name[0],
                        source: { uri: avatar_url },
                        showAccessory: true,
                    }}
                    title= {name}
                    subtitle={role}
                    chevron
                />; */}

                {/* <Button
                    title='back to home'
                    onPress={() => this.props.navigation.navigate('Home')}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        main:
        {
        alignItems : 'center',
        fontFamily: 'serif',
        },

        title:
        {
            
            textAlign: 'center',
            fontSize: 30,
            marginTop: 20
        },
        ava:
        {
            // alignItems : 'center',
            height:80,
            width:80,
            marginTop: 20,
            marginLeft: 10,
        }
    }
)

export default Profile;

