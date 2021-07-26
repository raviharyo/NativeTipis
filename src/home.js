import React, { Component } from 'react';
import firestore, { firebase } from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

import Icon from 'react-native-vector-icons/Ionicons';
import { Text, StyleSheet, Button, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
// import database from '@react-native-firebase/database';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: [],
            searchPilih: [],
            data1: [],
            data5: []
            //data dari server pasti array of object atau data json
        }
    }

    updateSearch = (search) => {
        console.log(search);
        this.setState({ search })

    }

    componentDidMount() {

        // this.getDataCollection();
        // this.getAllDataCollection();
        this.getFullDataCollection();
        

    }
    componentDidUpdate(){
        this.getFullDataCollection();
    }


    getDataCollection = async () => {
        const users = await firestore().collection('resi').get();
        // const users = firebase.database().ref(`/resi`).get();
        const allData = users.docs.map((doc) => doc.data());
        this.setState({ data: allData });
        console.log(allData)

    }
    getAllDataCollection = async () => {
        const users = await firestore().collection('resi').get();
        const collection = {};
        users.forEach(doc => {
            collection[doc.id] = doc.data();
        })
        console.log('koleksi', collection)
        console.log('object key', Object.keys(collection))
        let newArray = [];
        for (const key of Object.keys(collection)) {
            console.log('kunci', key)
            newArray.push({ ...collection[key], key })
        }
        console.log('newArray', newArray)
        this.setState({ data: newArray })
    }
    getFullDataCollection = async () => {

        const users = await firestore().collection('resi').get();
        const allData = users.docs.map((doc) =>
            Object.assign({ id: doc.id }, doc.data()));
        this.setState({ data: allData });
        console.log('semua data baru', allData)
    }
    EditResiPilihan = async (id) => {
        const waktu = new Date().toLocaleString()
        const antar = "barang sedang diantar kerumahmu"

        for (const item of this.state.data1) {
            const user = await firestore()
                .collection('resi')
                .doc(item.id)
                .update({
                    ...item, keterangan2: antar,
                    waktu2: waktu

                })
                .then(() => {

                    console.log('User updated!');
                })
                .catch(err => console.log(err))


        }
        this.setState({ data1: [] })
        // window.location.reload(id)
    }





    // }
    getDatapilihan = (fixdata) => {
        let newData = this.state.data1
        newData.push(fixdata)
        console.log(fixdata);
        this.setState({ data1: newData, search: '' })


    }
    deleteRow = (index) => {
        let newData = this.state.data1
        newData.splice(index, 1)

        this.setState({ data1: newData })
    }


    render() {

        return (
            <View style={styles.MainPage}>
                <Text style={styles.judul}>Daftar Paket</Text>

                <SearchBar containerStyle={{ marginHorizontal: 10, backgroundColor: 'transparent', }}

                    round={true}
                    lightTheme={true}
                    placeholder="Cari Nomor Resi"
                    onChangeText={this.updateSearch}
                    value={this.state.search}

                />


                <FlatList
                    data={this.state.search.length > 0 && this.state.data.filter((val) => val.id == this.state.search && val.waktu2 == "diisi oleh kurir" && val.waktu1 != "kosong" )}

                    renderItem={({ item, index }) => (


                        <View style={{
                            
                            backgroundColor: '#FFFF',
                            marginVertical: 10,
                            marginHorizontal: 5
                            // borderRadius: 3,
                        }}>
                            <Text onPress={()=>this.getDatapilihan(item)} style={styles.textsearch}>{item.id}</Text>
                            {/* <Text>{item.alamat}</Text> */}
                            
                            {/* <Button
                                title="pilih"
                                onPress={() => this.getDatapilihan(item)}
                            /> */}

                        </View>
                    )}

                />
                <FlatList
                
                    data={this.state.data1}
                    renderItem={({ item, index }) => (
              
                        
                        <View style={{
                            backgroundColor: '#6C86BA',
                            marginVertical: 10,
                            marginHorizontal:15,
                            borderRadius: 25,
                        }}>
                            <Text style={ styles.Titletext}>Resi: {item.id}</Text>
                            <Text style={styles.textkecil}>{item.alamat}</Text>
                            <TouchableOpacity>
                                <Text 
                                onPress={()=>this.deleteRow(index)}
                                style={{
                                    fontSize: 15, color: 'red', textDecorationLine: 'underline', paddingLeft:166,paddingBottom:7,paddingTop:5}}>
                                    batal

                                </Text>
                            </TouchableOpacity>
                            {/* <Button
                                title="delete"
                                onPress={() => this.deleteRow(index)}
                            /> */}

                        </View>

                    )}


                />

<View style={{position:'relative' ,paddingVertical:5}}>

                 <Button
                 
                    title="kirim"
                    
                    onPress={() => this.EditResiPilihan()}
                /> 
</View>
                
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
            color:'white',
            marginLeft:10,
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 20

        },
        textsearch: {
            paddingVertical:5,
            color: 'black',
            fontSize: 20,
            marginBottom: 3,
            marginLeft: 20
        },
        textkecil:{
            color: 'white',
            fontSize:18,
            marginTop:3,
            marginBottom:3,
            marginLeft:10
        },
        pilih:{
            fontSize: 20,
            alignContent:"flex-end"
        },
        choose:
        {
            fontSize: 25,
            marginTop: 40,
        }
    }
);

export default Home;

