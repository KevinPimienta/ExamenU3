
import React, {useContext} from 'react';
import {View, StyleSheet, Text, ScrollView, Button} from 'react-native';
import {ProducContex} from '../Context/ProducContex';
import {ListItem} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';


export default function Productos1({navigation}){
   const {carrito, productos, setCarrito, setTotal, total, eliminar }= useContext(ProducContex);
   const limpiar =()=>{
        setCarrito({})
        setTotal(0)
        navigation.goBack();
        alert("¡Gracias por su compra!")
    }

    return(
        <View style={styles.container}>
            <ScrollView>
            {
            carrito.length>0
            ?
            carrito.map((d,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{d.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>${(d.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</ListItem.Subtitle>
                    </ListItem.Content>
                      <Ionicons name='ios-trash' size={30} color={'blue'} onPress={()=>eliminar(i,d.precio)}/>
                </ListItem>
            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}> No hay producto</Text>
        }
        </ScrollView>
        <Text style={{marginTop:50, textAlign:'center', fontSize:20}}> Total: ${(total)} </Text>
        <Button buttonStyle={styles.buttons}onPress={limpiar}title="Comprar"
                />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      margin:20,
      marginTop:Constants.statusBarHeight
   
    },
    buttons:{
      backgroundColor:'gray', 
      color:'black', 
      marginTop:10, 
      borderRadius:10
    },
    
   
  });