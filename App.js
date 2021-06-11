import "react-native-gesture-handler";
import React from "react";
import AppNavigation from "./src/components/navigation/AppNavigation";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppNavigation />
    </StoreProvider>
  );
};

export default App;
