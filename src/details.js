import React,{Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import firestore, { firebase } from '@react-native-firebase/firestore';


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
                    this.props.navigation.goBack();
                })
                .catch(err => console.log(err))


        // }

        
    }

    render() { 
        return ( 
            <View>
                <Text>{this.props.route.params.item.id}</Text>
                <Text>{this.props.route.params.item.penerima}</Text>
                <Text>{this.props.route.params.item.hp_penerima}</Text>
                <Text>{this.props.route.params.item.alamat}</Text>

                <Button
                    title="selesai"
                    onPress={()=>this.EditResiPilihan(this.props.route.params.item.id)}
                />
            </View>
         );
    }
}
 
export default details;


// export default function details({route, navigation}){
//     console.log('params', route.getParam)
//     // const{item} = route.params
//     return(
//         <View>
//             {/* <Text>ID = {item.id}</Text>
//             <Text>ID = {item.penerima}</Text>
//             <Text>ID = {item.alamt}</Text> */}
//             <Text>ID = halo coj</Text>
            
//         </View>
//     )
// }