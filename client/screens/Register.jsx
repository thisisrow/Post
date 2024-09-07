import { StyleSheet, Text, Alert, View, Button } from "react-native";
import React, { useState } from "react";
import InputBox from "../components/Form/InputBox";
import SubmitButton from "../components/Form/SubmitButton";
import axios from "axios";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  //function
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert("Please Fil All Fileds");
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post(
        "/auth/register",
        { name, email, password }
      );
      alert(data && data.message);
    } catch (error) {
      alert(error.response.data.message)
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View>
        <InputBox
          inputTitle={"User Name"}
          placeholder={"name"}
          keyBordType={"text"}
          value={name}
          setValue={setName}
        />
        <InputBox
          inputTitle={"Email"}
          placeholder={"Email"}
          keyBordType={"email-address"}
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
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
          .
        </Text>
      </View>
      <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
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
