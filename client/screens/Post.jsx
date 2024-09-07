import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FooterMenu from "../Menus/FooterMenu";
const Post = () => {

  return (
    <View style={styles.container}>
        <Text>Post</Text>
      <FooterMenu />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 10,
  },
});
