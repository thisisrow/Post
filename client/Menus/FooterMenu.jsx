import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, useRoute } from "@react-navigation/native";

const FooterMenu = () => {
  const navigation = useNavigation();
  const route = useRoute()
  return (
    <View style={styles.conatainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <FontAwesome5
          name="home"
          style={styles.icon_style}
          color={route.name === "Home" && "blue"}
        />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Post");
        }}
      >
        <FontAwesome5
          name="plus-square"
          style={styles.icon_style}
          color={route.name === "Post" && "blue"}
        />
        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <FontAwesome5
          name="info-circle"
          style={styles.icon_style}
          color={route.name === "About" && "blue"}
        />
        <Text>About</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate("Account");
        }}
      >
        <FontAwesome5
          name="user"
          style={styles.icon_style}
          color={route.name === "Account" && "blue"}
        />
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterMenu;

const styles = StyleSheet.create({
  conatainer: {
    
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-around",
  },
  icon_style: {
    
    marginTop: 4,
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 20,
  },
});
