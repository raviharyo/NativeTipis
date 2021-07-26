import React,{Component} from 'react';
import {StyleSheet, View, Button, Text, Image, Alert} from 'react-native';
import firestore, { firebase } from '@react-native-firebase/firestore';
// import ImagePicker from 'react-native-image-picker';
// import storage from '@react-native-firebase/storage';
// import * as Progress from 'react-native-progress';


class details extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    EditResiPilihan = async (id) => {
        console.log(id)
        const waktu = new Date().toLocaleString()
        const antar = "barang sudah diterima oleh pemesan"

        // for (const item of this.state.data1) {
            const user = await firestore()
                .collection('resi')
                .doc(id)
                .update({
                    ...this.props.route.item, keterangan3: antar,
                    waktu3: waktu

                })
                .then(() => {

                    console.log('User updated!');
                    // window.location.reload()
                    this.props.navigation.goBack();
                })
                .catch(err => console.log(err))


        // }

        
    }
    

    render() {
        
        return ( 
            <View style={styles.MainPage}>
            <Text style={styles.judul}>Detail Resi</Text>
                <View style={{
                    backgroundColor: '#E2FFCE',
                    marginVertical: 10,
                    marginTop: 15,
                    borderRadius: 25,
                    // shadowColor: '#000',
                    // shadowOffset: {
                    //     width: 3,
                    //     height: 3,
                    // },
                    elevation: 5,
                    shadowOpacity: 1,
                    shadowRadius: 5,
                    marginBottom: 16
                }}>
                    {/* <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    /> */}
                <Text style={styles.Titletext}>No. Resi:</Text>
                <Text style={styles.Titleresi}>{this.props.route.params.item.id}</Text>
                <Text style={styles.Titletext}>Nama Penerima:</Text>
                <Text style={styles.textkecil}>{this.props.route.params.item.penerima}</Text>
                <Text style={styles.Titletext}>No. Handphone:</Text> 
                <Text style={styles.textkecil}>{this.props.route.params.item.nohp}</Text>
                <Text style={styles.Titletext}>Alamat: </Text>
                <Text style={styles.textkecil}>{this.props.route.params.item.alamat}</Text>
                    <Text style={styles.Titletext}>Kode Pos: </Text>
                    <Text style={styles.textkecilkode}>{this.props.route.params.item.kodepos}</Text>
                </View>
                

                <Button
                
                    color="#6C86BA"
                    title="selesai"
                    onPress={()=>this.EditResiPilihan(this.props.route.params.item.id)}
                />
            </View>
         );
    }
}
const styles = StyleSheet.create(
    {
        MainPage:
        {
            flex: 1,

            backgroundColor: '#f7f7f7',
            fontFamily: 'serif'

        },
        judul: {

            fontSize: 25,
            fontWeight: "bold",
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 10
        },
        Titletext:
        {
            color: 'black',
            marginLeft: 10,
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 18

        },
        Titleresi:
        {
            color: 'black',
            marginLeft: 10,
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 8

        },
        textkecil: {
            color: 'black',
            fontSize: 18,
            marginTop: 3,
            marginBottom: 3,
            marginLeft: 10
        },
        textkecilkode: {
            color: 'black',
            fontSize: 18,
            marginTop: 3,
            marginBottom: 3,
            marginLeft: 10,
            paddingBottom: 10
        },
        
    }
);
export default details;
