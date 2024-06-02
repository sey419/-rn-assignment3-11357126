import React from 'react';
import { useFonts } from "expo-font";
const Stack = createNativeStackNavigator();
import { NavigationContainer } from "@react-navigation/native";
import tasks from '@/components/Tasks/tasks';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Lato-Regular.ttf": require("rn3/assets/fonts/Lato-Regular.ttf"),
    "Lato-Light.ttf": require("rn3/assets/fonts/Lato-Light.ttf"),
    "Lato-Bold.ttf": require("rn3/assets/fonts/Lato-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="tasks"
              component={tasks}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
