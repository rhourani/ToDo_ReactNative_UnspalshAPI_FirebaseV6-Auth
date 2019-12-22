/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Rıdvan Alhourani
** G151210575
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
TextInput,
TouchableOpacity,
} from 'react-native';

import Note from './Note';
import { observable } from 'mobx';

export default class Main extends React.Component{

//@observerable
constructor(props){
    super(props);
    this.state = {
        noteArray: [],
        noteText: '',
        uri:'https://picsum.photos/200/300',


    }
}

  render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val ={val}
                deleteMethod={()=> this.deleteNote(key)}/>
               
        });

    return(
      <> 
      <Image style={styles.image} source={{uri:this.state.uri}} />
     

<View style = {styles.container}>
 
  <ScrollView style={styles.scrollContainer}>
        {notes}
  </ScrollView> 
  <View style={styles.footer}>
    <TextInput
    style={styles.TextInput}
    onChangeText={(noteText) => this.setState({noteText}) }
    value = {this.state.noteText}
    placeholder='Type your note here!'
    placeholderTextColor='white'
    underlineColorAndroid='transparent'>
    </TextInput>
  </View>
                                                            
 

     
  <TouchableOpacity  onPress={this.addNote.bind(this)} style= {styles.addButton}>
        <Text style={styles.addButtonText}>Note</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.setState({uri:`https://picsum.photos/id/${Math.round((Math.random()*1000))}/200`})}  style= {styles.addButtonImage}>
        <Text style={styles.addButtonText}>Api</Text>
      </TouchableOpacity>



</View>
</>
    );
  }
addNote(){
    if (this.state.noteText){
        var d = new Date();
        this.state.noteArray.push({
            'date': d.getFullYear() +
            "/" + (d.getMonth()+1) +
            "/" + d.getDate(),
            'note': this.state.noteText
        });
        this.setState({ notearray: this.state.noteArray })
        this.setState({ noteText: '' });
    }
}

deleteNote(key){
  alert("Deleted!");
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray })
}
/*@observable
compineedFunctions(){
  this.addNote.bind(this)
  this.setState({uri:`https://picsum.photos/id/${Math.round((Math.random()*1000))}/200`})

}

  <TouchableOpacity  onPress={() => this.compineedFunctions() } style= {styles.addButton}>
        <Text style={styles.addButtonText}>Note</Text>
      </TouchableOpacity>


*/
}


const styles = StyleSheet.create({
  container:{
  flex: 1,
  marginBottom:10,
  },
  header:{
    backgroundColor:'#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer:{
    flex: 1,
    marginBottom:100,
    },
  footer:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right:0,
    zIndex:10,
  },
  TextInput:{
    alignSelf: 'stretch',
    color: '#fff',
    padding:20,
    backgroundColor: 'seagreen',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addButton:{
    position: 'absolute',
    zIndex: 10,
    right:20,
    bottom:90,
    backgroundColor:'deeppink',
    width:60,
    height:60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  
  addButtonText:{
    color:'white',
    fontSize: 24,
  },
  addButtonImage:{
    position: 'absolute',
    zIndex: 10,
    right:90,
    bottom:90,
    backgroundColor:'green',
    width:60,
    height:60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  image:{
    flex:1/2,
     backgroundColor:  'rgba(52, 52, 52, 0.8)',
     resizeMode: 'stretch',
 
   },
  });