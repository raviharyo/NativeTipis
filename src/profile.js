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
    
    componentDidUpdate(){
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
            <Text style={styles.title}>Kirim Paket</Text>
                <FlatList
                    data={this.state.data.filter((val)=>val.waktu2 != "diisi oleh kurir" && val.waktu3 == "diisi oleh kurir")}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('detailScreen', {item})}>

                        <View style={{
                                backgroundColor: '#6C86BA',
                                marginVertical: 10,
                                marginHorizontal: 15,
                                borderRadius: 25,
                                // shadowColor: '#000',
                                // shadowOffset: {
                                //     width: 3,
                                //     height: 3,
                                // },
                                elevation:5,
                                shadowOpacity: 1,
                                shadowRadius: 5,
                        }}>
                            <Text style={styles.resitext}>Resi: {item.id}</Text>
                            <Text style={styles.textkecil}>{item.alamat}</Text>
                            <Text style={styles.textkecill}>Nama: {item.penerima}</Text>
                            

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
        flex:1,
            backgroundColor: '#f7f7f7',
        
        fontFamily: 'serif',
        },
        resitext:
        {
            color: 'white',
            marginLeft: 15,
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 20,
            paddingBottom: 6

        },
        textkecil: {
            color: 'white',
            fontSize: 18,
            marginTop: 3,
            marginBottom: 3,
            marginLeft: 15 ,
            
        },
        textkecill: {
            color: 'white',
            fontSize: 18,
            marginTop: 3,
            marginBottom: 3,
            marginLeft: 15,
            paddingBottom:10

        },
        title:
        {
            
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 10
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

