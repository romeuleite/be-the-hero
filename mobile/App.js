import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; // or any other locale you need

import Routes from './src/routes';


export default function App() {
  return (
    <Routes />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7159c1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   title:{
//     color: '#FFF',
//   }
// });
