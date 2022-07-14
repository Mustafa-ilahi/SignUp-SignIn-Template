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

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/bg2.png')} style={styles.image} />
      <View style={styles.contentView}>
        <Text style={styles.heading}>Hosgeldiniz</Text>
        <Text style={styles.text}>
          Hesabiniz yok mu? <Text style={styles.redText}>Hemen kaydol</Text>
        </Text>
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
        <View style={styles.footerView}>
          <View style={styles.row}>
            <Image
              source={require('../../assets/checkbox.png')}
              style={styles.checkboxIcon}
            />
            <Text>Beni Hatirla</Text>
          </View>
          <View>
            <Text>Sifremi Unuttum </Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.btnView}>
            <Text style={styles.btnText}>GiRiS YAP</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.socialLinks}>
          <Text>Or Login with</Text>
          <View style={styles.socialView}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/fb.png')}
                style={styles.fbImg}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/twitter.png')}
                style={styles.twitterImg}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/google.png')}
                style={styles.googleImg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
