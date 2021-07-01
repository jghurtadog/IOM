import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Splash from "../splash";
import Login from "../login";
import Registre from "../registre";
import Profile from "../profile";
import Home from "../global/Home";
import DirectoryItem from "../directory/_children/DirectoryItem";
import LinkItem from "../links/_children/LinkItem";
import PointItem from "../settings/_children/PointItem";
import PointItemComents from "../settings/_children/PointItemComents";
import FilterSetting from "../settings/_children/FilterSetting";

const AppNavigation = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Registre: {
    screen: Registre,
    navigationOptions: {
      headerShown: false,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  DirectoryItem: {
    screen: DirectoryItem,
    navigationOptions: {
      headerShown: false,
    },
  },
  LinkItem: {
    screen: LinkItem,
    navigationOptions: {
      headerShown: false,
    },
  },
  PointItem: {
    screen: PointItem,
    navigationOptions: {
      headerShown: false,
    },
  },
  PointItemComents: {
    screen: PointItemComents,
    navigationOptions: {
      headerShown: false,
    },
  },
  FilterSetting: {
    screen: FilterSetting,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AppNavigation);
