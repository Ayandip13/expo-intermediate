import { View, Text } from "react-native";
import { Link } from "expo-router";
const Index = () => {
  return (
    <View style={{backgroundColor:'blue', flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:20, color:'white'}}>Hello From new App setup</Text>
      <Link href={"/about"}>Go to about</Link>
    </View>
  )
}

export default Index