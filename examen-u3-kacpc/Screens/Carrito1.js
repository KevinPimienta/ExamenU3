import React, {useContext}  from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProducContex} from '../Context/ProducContex';

const Carrito1 = ({navigation}) => {

    const {productos, agregar} = useContext(ProducContex);
    
    return (
    <View style={styles.container}>
        <Header
            centerComponent={{ text: 'Amazon', style: { color: '#fff', fontSize:20 } }}
            rightComponent={{ icon: 'md-play-outline', color: '#fff', onPress:()=>{
                 navigation.navigate('Productos1',{status:"add"})
            }}}
            containerStyle={{backgroundColor:'#192a56'}}
        /> 
        <ScrollView>
        {
            productos.length>0
            ?
            productos.map((d,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{d.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>${(d.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</ListItem.Subtitle>
                    </ListItem.Content>
            <Ionicons name='checkmark-circle-sharp' size={30} color={'green'}  onPress={()=>agregar(d,d.precio)}/>
                </ListItem>
            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay producto</Text>
        }
        </ScrollView>
    </View>
    
    );
    
}
 
export default Carrito1;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
    
});