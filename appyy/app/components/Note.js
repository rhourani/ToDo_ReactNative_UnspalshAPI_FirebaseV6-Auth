/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Rıdvan Alhourani
** G151210575
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
TouchableOpacity,
} from 'react-native';


export default class Main extends React.Component{
  render(){
    return(

      <View key={this.props.keyval} style={styles.note}>

  <Text style={styles.noteText}>{this.props.val.date}</Text>
  <Text style={styles.noteText}>{this.props.val.note}</Text>
  
  <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
  <Text style={styles.noteDeleteText}>D</Text>
  </TouchableOpacity>

      </View>


    );
  }
  

}


const styles = StyleSheet.create({
 
  note:{
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderLeftWidth:2,
    borderBottomColor:'#e91E63',

  },
  noteText:{
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
  },
  noteDelete:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29BBb9',
    padding: 10,
    top: 10,
    bottom: 10,
    right:10,
  },
  noteDeleteText:{
    color: 'white',
  },
  });