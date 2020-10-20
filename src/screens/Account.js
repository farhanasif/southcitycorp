import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
const COLOR = "#85929e";

const Account = ({ navigation }) => {
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
        <View style={{ alignItems: 'center', paddingBottom: 20}}> 
            <Image
            source={require("../assets/images/avater.png")}
            resizeMode="contain"
            style={styles.image}
            ></Image>
        </View>
        
        <TouchableOpacity
            style={styles.button}
        >
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.buttonText}>NAME: </Text>
            <Text style={styles.buttonText2}>BIPRAJIT SAHA </Text>
          </View>
          <Feather
            name="edit"
            style={styles.icon2}
          ></Feather>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
        >
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.buttonText}>ADDRESS:</Text>
            <Text style={styles.buttonText2}> 15, MALIBAG, DHAKA</Text>
            </View>
            <Feather
            name="edit"
            style={styles.icon2}
          ></Feather>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
        >
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.buttonText}>MOBILE:</Text>
            <Text style={styles.buttonText2}> 017899000987</Text>
            </View>
            <Feather
            name="edit"
            style={styles.icon2}
          ></Feather>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
        >
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.buttonText}>EMAIL:</Text>
            <Text style={styles.buttonText2}> bips@gmail.com</Text>
            </View>
            <Feather
            name="edit"
            style={styles.icon2}
          ></Feather>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
        >
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.buttonText}>NID:</Text>
            <Text style={styles.buttonText2}> 1278361782</Text>
            </View>
            <Feather
            name="edit"
            style={styles.icon2}
          ></Feather>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
        >
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.buttonText}>TOTAL QUERIES:</Text>
            <Text style={styles.buttonText2}> 11</Text>
            </View>
            
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
        >
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.buttonText}>TOTAL RESPONSE:</Text>
            <Text style={styles.buttonText2}> 06</Text>
            </View>
            
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signin')}
        >
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.buttonText}>LOG OUT</Text>
            </View>
            
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  scrollView: {
    marginHorizontal: 10,
  },
  image: {
    width: 140,
    height: 140,
  },
  button: {
    alignItems: "flex-start",
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COLOR,
    padding: 12,
    marginBottom: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 12
  },
  buttonText: {
      color: 'white', 
      fontWeight: 'bold', 
      fontSize: 13
  },
  buttonText2: {
      color: 'white', 
      fontWeight: '500', 
      fontSize: 13,
      paddingLeft: 5
  },
  icon2: {
    color: "white",
    fontSize: 20,
    paddingRight: 4
  },

});

export default Account;
