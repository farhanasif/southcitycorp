import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";


const COLOR = "#609513";


const QuerySuccessScreen = ({ route, navigation }) => {

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
            <View style={{ alignItems: 'center',}}> 
              <MaterialCommunityIcons
                name="check"
                style={styles.icon}
              ></MaterialCommunityIcons>
            </View>
            
            <View style={{alignItems: 'center', paddingBottom: 15}}> 
                <Text style={{fontWeight: '500', fontSize: 15, color:'rgba(96,149,19,1)'}}>
                    Your query submitted successfully.
                </Text>
            </View>

            <View style={{alignItems: 'center'}}> 
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Query')}
              >
                  <Feather
                    name="arrow-left"
                    style={styles.icon2}
                  ></Feather>
                  <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('HomeRoot')}
              >
                  <Feather
                    name="arrow-right"
                    style={styles.icon2}
                  ></Feather>
                  <Text style={styles.buttonText}>Back home</Text>
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
    width: 300,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
      color: 'white', 
      fontWeight: '500', 
      fontSize: 13
  },
  icon: {
    color: "rgba(96,149,19,1)",
    fontSize: 140,
  },
  icon2: {
    color: "white",
    fontSize: 20,
    paddingRight: 4
  },

});

export default QuerySuccessScreen;
