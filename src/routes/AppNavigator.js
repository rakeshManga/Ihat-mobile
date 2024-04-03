import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashPage from '../pages/SplashPage/SplashPage';
import * as RouteConst from './RouteConst';
import LoginPage from '../pages/LoginPage/LoginPage';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: { backgroundColor: '#F58123' },
                headerTitleStyle: { color: 'white' }
            }}>
            <Stack.Screen
                name={RouteConst.SPLASH_PAGE}
                component={SplashPage}
            />
            <Stack.Screen
                name={RouteConst.LOGIN_PAGE}
                component={LoginPage}
            />
        </Stack.Navigator>
    )
}

export default AppNavigator