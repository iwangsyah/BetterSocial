import {CommonActions} from '@react-navigation/native';

let navigator;

const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  navigator &&
    navigator.dispatch(
      CommonActions.navigate({
        routeName,
        params,
      }),
    );
};

// add other navigation functions that you need and export them
export default {
  navigate,
  setTopLevelNavigator,
};
