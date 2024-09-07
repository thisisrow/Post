import { StyleSheet, Text, View } from 'react-native'
import React,{useContext,} from 'react'
import { AuthContext } from '../context/authContext'
import FooterMenu from '../Menus/FooterMenu'
const Home = () => {
    //global state
    const [state]=useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(state,null,4)}</Text>
      <FooterMenu/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'space-between',
        marginTop:30,
        marginHorizontal:10,
    }
})