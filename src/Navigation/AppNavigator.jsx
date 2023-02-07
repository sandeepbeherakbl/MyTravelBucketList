import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../components/welcome";
import Homepage from "../components/homepage";
import Myplan from "../components/Myplan";
import Iternary from "../components/Iternary";
import Splash from "../components/splash";
import Navbar from "../components/navbar";

const stack = createNativeStackNavigator();

const AppNavigator = () => {
    return(
        <>
            <stack.Navigator
                initialRouteName="SPLASH"
                screenOptions={{header: () => null}}
            >
                <stack.Screen name="SPLASH" component={Splash}/>
                <stack.Screen name="NAVBAR" component={Navbar}/>
                <stack.Screen name="WELCOME" component={Welcome}/>
                <stack.Screen name="HOMEPAGE" component={Homepage}/>
                <stack.Screen name="MYPLAN" component={Myplan}/>
                <stack.Screen name="ITERNARY" component={Iternary}/>
            </stack.Navigator>
        </>
    )
}

export default AppNavigator;