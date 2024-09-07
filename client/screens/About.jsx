import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FooterMenu from "../Menus/FooterMenu";
const About = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <FooterMenu />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 10,
  },
});
