import React from 'react';
import { View, Text, Image ,} from 'react-native';
import { styles } from './BatLogoStyles'; // Importe os estilos do arquivo separado
import batLogo from '../../../assets/bat-logo.png'; // Verifique se este é o caminho correto

export function BatLogo() {
  return (
    <>
      <Text style={styles.title}>
        BAT PASS GENERATOR</Text>
      <Image source={batLogo}
        style={{
            resizeMode:'contain',
            height:180,
            
        }}
      />
    </>
  );
}
