import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import ServiceList from '../components/ServiceList';
const COLOR = "#85929e";

const QueryDetailsScreen2 = ({ navigation }) => {
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
        {/* <View style={{alignItems: 'center', paddingBottom: 15}}> 
            <Text style={{fontWeight: '700', fontSize: 18, color:'rgba(96,149,19,1)'}}>
                Select your complain type
            </Text>
        </View> */}
        
        
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('QueryUpdate', {
                otherParam: 'অতিরিক্ত বৃষ্টিপাতে রাস্তায় পানি সমস্যা',
              })}
        >
            <Text style={styles.buttonText}>অতিরিক্ত বৃষ্টিপাতে রাস্তায় পানি সমস্যা </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('QueryUpdate', {
                otherParam: 'ওয়াসার পানির লাইনে সমস্যা',
              })}
        >
            <Text style={styles.buttonText}>ওয়াসার পানির লাইনে সমস্যা</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('QueryUpdate', {
                otherParam: 'ব্যক্তিগত কাজে রাস্তা বন্ধ রাখা',
              })}
        >
            <Text style={styles.buttonText}>ব্যক্তিগত কাজে রাস্তা বন্ধ রাখা</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('QueryUpdate', {
                otherParam: 'রাস্তায় ময়লা আবর্জনা ও দুর্গন্ধ',
              })}
        >
            <Text style={styles.buttonText}>রাস্তায় ময়লা আবর্জনা ও দুর্গন্ধ</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
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
      fontWeight: '500', 
      fontSize: 13
}

});

export default QueryDetailsScreen2;
