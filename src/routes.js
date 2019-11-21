import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~./pages/SignIn';
import SignUp from '~/pages/SignUp';
import HelpOrder from '~/pages/HelpOrder';
import CheckIn from '~/pages/CheckIn';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    CheckIn,
    SignUp,
    HelpOrder,
  })
);
