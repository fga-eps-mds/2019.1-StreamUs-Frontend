import React, { Component } from 'react';
import { StyleSheet, View , Text, TouchableOpacity, Picker, TextInput } from 'react-native'
import styles from './styleSheets'


export default class EditarSala extends Component {
  constructor(props) {
    super(props);
    this.state = {roomName: ''};
  }
    state = {permission: ''}
    updatePermission = (permission) => {
       this.setState({ permission : permission })
    }
   render() {
     return (
       <View style = {stylesx.container}>
         <View  style = {stylesx.background}>
         <View style = {stylesx.cont2}>
           <Text style = {styles.titulo} > EDITAR SALA  </Text>     
           <Text style = {styles.texto} >  Nome da sala </Text>
           <TextInput style = {styles.textInput}
             placeholder = 'Digite o nome da sala'
             paddingLeft = {5}>       
           </TextInput>
           <Text style = {styles.texto}> Permissão da sala </Text>
           <Picker        
             selectedValue={this.state.permission}
             style={{marginTop : 5, borderRadius: 20, width: 150, height : 30, backgroundColor : 'white',}}
             onValueChange = {this.updatePermission}
             >
             <Picker.Item label = "Selecione o item" value = "" />
             <Picker.Item label="Pública" value="public" />
             <Picker.Item label="Privada" value="private" />
           </Picker>
           <TouchableOpacity style = {stylesx.apagar}>
           <Text style = {styles.textoBotao}> DELETAR SALA </Text>
           </TouchableOpacity>
         </View>
         
         <View style = {stylesx.cont3}>
           <TouchableOpacity style = {styles.botao}>
             <Text style = {styles.textoBotao}> SALVAR </Text>
           </TouchableOpacity>
           <TouchableOpacity style = {styles.botao}>
             <Text style = {styles.textoBotao}> VOLTAR </Text>
           </TouchableOpacity>
         </View>
          
         </View>
       </View>
     );
   }
 }
 
 const stylesx = StyleSheet.create({
   container: {
     flex: 1,
     alignItens: 'center',
     backgroundColor: '#191414',
     
   },
   background : {
     flex : 1,
     backgroundColor : 'gray',  
     marginLeft: 15,
     marginRight : 15,
     marginTop : 50,
     marginBottom : 50,
   },
   cont2 : {        
     marginTop: 50,
     marginLeft: 15,
     marginRight : 15,
     justifyContent: 'center',
     alignItens : 'center',
         
     
   },
   cont3: {
     flexDirection : 'row',
     justifyContent : 'center',
     alignItens : 'center',
     marginTop : 15,
 
 
   },
   apagar : {
     
     justifyContent: 'center',
     backgroundColor: 'red',
     marginTop : 10,
     marginBottom : 10,
     width: 250,
     height: 40,
     borderRadius: 20,
     elevation: 5,
   },
 });