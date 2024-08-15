import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import { styles } from './style'; // Certifique-se de que a importação está correta
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatTextInput } from '../../BatTextInput/BatTextInput';
import { BatButton } from '../../BatButton/BatButton';

export default function Home() {
  return (
    <View style={styles.appcontainer}>

      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      
    <View>
        <BatButton/>
    </View>

      
    <StatusBar style="light" />
    </View>
  )
}
