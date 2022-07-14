import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/bg2.png')} style={styles.image} />
      <View style={styles.contentView}>
        <Text style={styles.heading}>Hosgeldiniz</Text>
        <Text style={styles.text}>Lütfen bilgileriniz ile giriç yapiniz</Text>
        <View style={styles.form}>
          <Text style={styles.label}>E-posta Adresin</Text>
          <View style={styles.iconField}>
            <TextInput
              onChangeText={text => setEmail(text)}
              value={email}
              style={styles.input}
            />
            {email !== '' && (
              <Image
                source={require('../../assets/tick.png')}
                style={styles.icon}
              />
            )}
          </View>
        </View>
        <View style={styles.passwordForm}>
          <Text style={styles.label}>Parola</Text>
          <View style={styles.iconField}>
            <TextInput
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
              style={styles.input}
            />
            {password !== '' && (
              <Image
                source={require('../../assets/eye.png')}
                style={styles.icon}
              />
            )}
          </View>
        </View>
        <View style={styles.footerView}></View>
        <TouchableOpacity>
          <View style={styles.btnView}>
            <Text style={styles.btnText}>GiRiS YAP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
