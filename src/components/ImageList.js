import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

const COLOR = "rgba(96,149,19,1)";

function ImageList(props) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 5}}> 
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '50%', paddingLeft: 3}}>
            <Image
            source={require("../assets/images/placeholder-img-1.jpg")}
            resizeMode="contain"
            style={styles.image}
            ></Image>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start'}}>
            <Image
            source={require("../assets/images/placeholder-img-1.jpg")}
            resizeMode="contain"
            style={styles.image}
            ></Image>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 110,
    height: 110,
  },
});

export default ImageList;