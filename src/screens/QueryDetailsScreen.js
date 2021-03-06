import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import CardView from '../components/CardView';
const COLOR = "#85929e";

const QueryDetailsScreen = ({ navigation }) => {
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
        <View style={{alignItems: 'center', paddingBottom: 10}}> 
            <Text style={{fontWeight: '700', fontSize: 18, color:'rgba(96,149,19,1)'}}>
                Your Query Details
            </Text>
        </View>
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />

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

export default QueryDetailsScreen;
