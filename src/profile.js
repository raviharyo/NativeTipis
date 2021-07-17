import React, { Component } from 'react';
import { Text, StyleSheet, Button, View, FlatList} from 'react-native';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { Avatar, Accessory } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

        }
    }
    componentDidMount(){
        this.gettingFullDataCollection();
    }

    gettingFullDataCollection = async () => {

        const users = await firestore().collection('resi').get();
        const allData = users.docs.map((doc) =>
            Object.assign({ id: doc.id }, doc.data()));
        this.setState({ data: allData });
        console.log('semua data terpilih', allData)
    }

    render() {
        
        return (
            <View style={styles.main}>
                <FlatList
                    data={this.state.data.filter((val)=>val.waktu2 != "diisi oleh kurir")}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('details', item)}>

                        <View style={{
                            backgroundColor: '#FFFF',
                            marginVertical: 10,
                            borderRadius: 3,
                        }}>
                            <Text style={styles.Titletext}>{item.id}</Text>
                            <Text style={styles.Titletext}>{item.alamat}</Text>
                            

                        </View>
                        </TouchableOpacity>
                    )}


                />
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
            marginBottom:10,
            marginRight:10
        },
        bio: 
        {
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            
        }
    }
)

export default Profile;

