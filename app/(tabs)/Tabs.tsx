import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { HomeTab } from "../../navigation"
import Index from "./Home"

const Tabs = createBottomTabNavigator<HomeTab>()

const HomeTabs = () => {

    return <Tabs.Navigator>
        <Tabs.Screen name="Index" component={Index}></Tabs.Screen>
    </Tabs.Navigator>
}

export default HomeTabs