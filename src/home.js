import React, { Component } from 'react';
import firestore, { firebase } from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

import Icon from 'react-native-vector-icons/Ionicons';
import { Text, StyleSheet, Button, View, Image, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
// import database from '@react-native-firebase/database';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: [],
            searchPilih: [],
            data1:[],
            data5:[]
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
        users.forEach(doc =>{
            collection[doc.id] = doc.data();
        })
        console.log('koleksi', collection)
        console.log('object key' ,Object.keys(collection))
        let newArray = [];
        for(const key of Object.keys(collection))
        
        {
            console.log('kunci' , key)
            newArray.push({...collection[key],key})
        }
        console.log('newArray', newArray)
        this.setState({data: newArray})
    }
    getFullDataCollection = async () =>{
        
        const users = await firestore().collection('resi').get();
        const allData = users.docs.map((doc) =>
        Object.assign({id: doc.id}, doc.data()),);
        this.setState({ data: allData });
        console.log('semua data baru', allData)
    }
    EditResiPilihan = async (id) => {
        const waktu = new Date().toLocaleString()
        const antar = 'barang melayuh kerumahmu'
        
        for(const item of this.state.data1){
            const user = await firestore()
                .collection('resi')
                .doc(item.id)
                .update({
                    ...item, keterangan2: antar, ...item, waktu2: waktu
                        
                })
                .then(() => {

                    console.log('User updated!');
                })
                .catch(err=> console.log(err) )
                ;
        
            }
            this.setState({data1: []})
    }
    


    
 
    // }
    getDatapilihan = (fixdata) => {
        let newData = this.state.data1
        newData.push(fixdata)
        console.log(fixdata);
        this.setState({data1: newData, search:''})
        
        
    }
    deleteRow = (index) =>{
        let newData = this.state.data1
        newData.splice(index,1)
        
        this.setState({ data1: newData })
    }
    
    
    render() {
        
        return (
            <View style={styles.MainPage}>
                <SearchBar containerStyle={{width:300}}
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                    
                />
               

                <FlatList
                    data={this.state.search.length>0 && this.state.data.filter((val)=> val.id == this.state.search)}
                    
                    renderItem={({ item, index }) => (

                        
                        <View style={{
                            backgroundColor: '#FFFF',
                            marginVertical: 10,
                            borderRadius: 3,
                        }}>
                            <Text style={styles.Titletext}>{item.id}</Text>
                            {/* <Text>{item.alamat}</Text> */}
                             <Button
                             title="pilih"
                             onPress={()=>this.getDatapilihan(item)}
                              />
                            
                        </View>
                    )}
                
                />
                <FlatList
                data = {this.state.data1}
                renderItem={({ item, index }) => (


                        <View style={{
                            backgroundColor: '#FFFF',
                            marginVertical: 10,
                            borderRadius: 3,
                        }}>
                            <Text style={styles.Titletext}>{item.id}</Text>
                            <Text style={styles.Titletext}>{item.alamat}</Text>
                            <Button
                            title="delete"
                            onPress={()=>this.deleteRow(index)}


                            />
                        
                        </View>
                        
                    )}
                    
                            
                />
                {/* <Text style={styles.Titletext}>Welcome to Basscoots APP !</Text>
                    <Text style={styles.choose}>Select the type</Text> */}
                {/* <View style={{width:300, height:60, backgroundColor: 'black', marginTop: 20, }}> */}
                {/* <Image style={{width:40, height:40, backgroundColor:'yellow' }} source ={require('./icon/led.svg')} /> */}
                {/* <Icon name="alarm-outline"></Icon> */}
                {/* <Text style={{color:'white', fontSize:40, textAlign:'center'}}>Spion</Text> */}
                {/* </View> */}
                {/* <View style={{ width: 300, height: 60, backgroundColor: 'black', marginTop: 30 }}> */}
                {/* <Image source={require('./icon/led.svg')} /> */}
                {/* <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }} >Hand Grip</Text> */}
                {/* </View>
                <View style={{ width: 300, height: 60, backgroundColor: 'black', marginTop: 30 }} >
                    <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }} >LED</Text>
                </View> */}
                {/* <View style={{ width: 300, height: 60, backgroundColor: 'black', marginTop: 30 }} >
                    <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }}>Accessories</Text>
                </View> */}

                {/* <Button
                    title="go to profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                /> */}
                <Button 

                    title="kirim"
                    onPress={() => this.EditResiPilihan()}

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
            //   justifyContent:'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
            fontFamily: 'serif'

        },


        Titletext:
        {
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 20

        },
        choose:
        {
            fontSize: 25,
            marginTop: 40,
        }
    }
);

export default Home;

