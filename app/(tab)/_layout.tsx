import React from 'react'
import { View } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Tabs } from "expo-router";

const Tabroot = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} /> }} />
            
            <Tabs.Screen name="about" options={{
                title: "About Us", tabBarIcon: ({ color, size }) => {
                    return (<View style={{ width: 70, justifyContent: "center", alignItems: "center", height: 70, borderRadius: 50, bottom: 20, backgroundColor: "skyblue" }}  >
                        <AntDesign size={28} name="contacts" color={"White"} />
                    </View>)
                }
            }} />
            
            <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ color }) => <AntDesign size={28} name="user" color={color} /> }}  />
        </Tabs>
    )
}

export default Tabroot