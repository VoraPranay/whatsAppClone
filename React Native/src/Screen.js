import { StackNavigator } from 'react-navigation';
import Loginscreen from './Loginscreen2';
import Homescreen from './Homescreen';
import Chatscreen from './Chatscreen';
import Contactstab from './Contactstab';
import DP from './DP';


const  Screen= StackNavigator({
  Welcomescreen: { screen: Welcomescreen },
    Login: { screen: Loginscreen },
     Home: { screen: Homescreen },
     Chatscreen: { screen: Chatscreen },     
     Contact: { screen: Contactstab },
     DP: { screen: DP }
    },
    {
        headerMode: 'none',
        mode: 'modal'
    });

export default Screen;