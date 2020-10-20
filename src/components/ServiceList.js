import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const COLOR = "rgba(96,149,19,1)";

function ServiceList(props) {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap',
        alignItems: 'flex-start', paddingBottom: 15}}> 
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '50%', paddingLeft: 3}}>
            <MaterialCommunityIcons
                name={props.leftIcon}
                style={{ color: COLOR, fontSize: 24, paddingRight: 3}}
            />
            <Text style={{ color: COLOR, fontWeight:'400'}}>{props.leftTitle}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start'}}>
            <MaterialCommunityIcons
                name={props.rightIcon}
                style={{ color: COLOR, fontSize: 24, paddingRight: 3}}
            />
            <Text style={{ color: COLOR, fontWeight:'400'}}>{props.rightTitle}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ServiceList;