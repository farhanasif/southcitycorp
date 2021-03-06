import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity, TextInput } from 'react-native';
const COLOR = "#609513";

const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        style={{color: '#566573', fontSize: 15, paddingHorizontal: 10,}}
      />
    );
  }

const OtpScreen = ({ route, navigation }) => {

    const [value, onChangeText] = React.useState('OTP...');
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={{ alignItems: 'center',}}> 
                <Image
                source={require("../assets/images/DSCC-logo-final.png")}
                resizeMode="contain"
                style={styles.image}
                ></Image>
            </View>
            <View style={{alignItems: 'center', paddingBottom: 15}}> 
                <Text style={{fontWeight: '400', fontSize: 13, color:'rgba(96,149,19,1)'}}>
                    Write down the 4 digit OTP send to your mobile
                </Text>
            </View>
            <View style={{alignItems: 'center', paddingBottom: 15}}> 
            <TextInput
              style={{ height: 40, borderColor: 'rgba(96,149,19,1)', borderWidth: 3, width: 80, borderRadius: 7, fontWeight: '700', fontSize: 15, paddingHorizontal: 5}}
                onChangeText={text => onChangeText(text)}
              value={value}
            />
            </View>
            
            
            <View style={{alignItems: 'center'}}> 
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Success')}
              >
                  <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  scrollView: {
    marginHorizontal: 10,
  },
  image: {
    width: 140,
    height: 140,
  },
  button: {
    alignItems: "center",
    backgroundColor: COLOR,
    paddingVertical: 12,
    marginBottom: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 12,
    width: 200
  },
  buttonText: {
      color: 'white', 
      fontWeight: '500', 
      fontSize: 13
}

});

export default OtpScreen;
