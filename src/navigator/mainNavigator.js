import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings196890Navigator from '../features/Settings196890/navigator';
import Settings196887Navigator from '../features/Settings196887/navigator';
import UserProfile196880Navigator from '../features/UserProfile196880/navigator';
import Settings196877Navigator from '../features/Settings196877/navigator';
import SignIn2196875Navigator from '../features/SignIn2196875/navigator';
import Settings196858Navigator from '../features/Settings196858/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings196890: { screen: Settings196890Navigator },
Settings196887: { screen: Settings196887Navigator },
UserProfile196880: { screen: UserProfile196880Navigator },
Settings196877: { screen: Settings196877Navigator },
SignIn2196875: { screen: SignIn2196875Navigator },
Settings196858: { screen: Settings196858Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
