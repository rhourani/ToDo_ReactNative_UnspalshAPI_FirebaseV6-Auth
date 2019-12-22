import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';

export default class SplashPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Main' : 'SignUp');
      });
    }, 1800);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'blue', fontSize: 40}}>Merhaba Firebase</Text>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
