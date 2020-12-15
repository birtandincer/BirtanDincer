import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import HomePage from './src/pages/homepage/index';
import DetailPage from './src/pages/detailspage/index';

const RootStack = createStackNavigator({
  HomePage:
  {
    screen: HomePage,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3c3e44',
      },
      headerTintColor: '#fff',
      title: "Home"
    }
  },
  DetailPage:
  {
    screen: DetailPage,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3c3e44',
      },
      headerTintColor: '#fff',
      title: "Detail"
    }
  }
},
  {
    initialRouteName: 'HomePage'
  },

)

const App = createAppContainer(RootStack);

export default App;