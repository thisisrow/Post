import { StyleSheet,TouchableOpacity, View } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../context/authContext'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
const HederMenu = () => {
    //global state
    const [state,setState] =useContext(AuthContext);
    //logout
    const handelLogout =async()=>{
        setState({token:'',user:null})
        await AsyncStorage.removeItem('@auth')
        alert('Logout Successfull')
    }
  return (
    <View>
      <TouchableOpacity>
        <FontAwesome5
          name="sign-out-alt"
          style={styles.icon_style}
          onPress={handelLogout}
        />
      </TouchableOpacity>
    </View>
  );
}

export default HederMenu

const styles = StyleSheet.create({
  icon_style: {
    marginTop: 4,
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 20,
    color:'red',
  },
});