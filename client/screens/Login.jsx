import { StyleSheet, Text, Alert, View, Button } from "react-native";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import InputBox from "../components/Form/InputBox";
import SubmitButton from "../components/Form/SubmitButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Register = ({ navigation }) => {
  //global state
  const [state, setState] = useContext(AuthContext);

  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  //function
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Faild", "Fill All Filds");
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post(
        "/auth/login",
        { email, password }
      );
      setState(data);
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      alert(data && data.message);
      navigation.navigate("Home");
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };
  //temp function to check local storage data
  const getLcoalStorageData = async () => {
    let data = await AsyncStorage.getItem("@auth");
    console.log("Local Storage ==> ", data);
  };
  getLcoalStorageData();

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Login</Text>
      <View>
        <InputBox
          inputTitle={"Email"}
          placeholder={"email"}
          keyBordType={"text"}
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"Password"}
          placeholder={"Password"}
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
        <SubmitButton
          btnTitle="Submit"
          loading={loading}
          handleSubmit={handleSubmit}
        />
        <Text style={styles.text}>
          Alredy Register Please{" "}
          <Text
            style={{
              color: "red",
              textDecorationLine: "underline",
              fontSize: 17,
            }}
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Text>
          .
        </Text>
      </View>
      <Text>{JSON.stringify({ email, password }, null, 4)}</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#edd9d8",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    marginHorizontal: 10,
    textAlign: "center",
  },
});
