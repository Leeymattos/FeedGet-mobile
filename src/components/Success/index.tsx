import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import successImage from '../../assets/success.png'
import { Copyright } from '../Copyright';
import { styles } from './styles';

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={successImage}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agradecemos o seu feedback
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onSendAnotherFeedback}
      >
        <Text
          style={styles.buttonTitle}
        >
          Quero Enviar outro
        </Text>

      </TouchableOpacity>

      <Copyright />
    </View>
  );
}