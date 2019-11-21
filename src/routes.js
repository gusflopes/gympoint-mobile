import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~./pages/SignIn';
import SignUp from '~/pages/SignUp';
import HelpOrder from '~/pages/HelpOrder';
import CheckIn from '~/pages/CheckIn';

import NewHelpOrder from '~/pages/HelpOrder/NewHelpOrder';
import DetailsHelpOrder from '~/pages/HelpOrder/DetailsHelpOrder';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    CheckIn,
    SignUp,
    HelpOrder,
    NewHelpOrder,
    DetailsHelpOrder,
  })
);
