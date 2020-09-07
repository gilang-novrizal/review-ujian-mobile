import React from 'react'
import {Button} from "native-base"
import {createDrawerNavigator} from "@react-navigation/drawer"

// import screen
import Account from "../screen/account"
import Profile from "../screen/profile"

const DrawerNav = () =>{
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Account" component={Account}/>
            <Drawer.Screen name="Profile" component={Profile}/>
            {/* <Button>Logout</Button> */}
        </Drawer.Navigator>
    )
}

export default DrawerNav