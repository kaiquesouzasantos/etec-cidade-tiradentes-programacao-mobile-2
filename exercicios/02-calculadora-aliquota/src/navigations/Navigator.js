import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Adicionar from '../screens/Adicionar';
import Listar from '../screens/Listar';
import Atualizar from '../screens/Atualizar';
import Delete from '../screens/Delete'

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Adicionar:{screen:Adicionar},
    Listar:{screen:Listar},
    Atualizar:{screen:Atualizar},
    Delete:{screen:Delete},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);