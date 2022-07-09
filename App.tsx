import React, {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';

import {Api} from 'net/Api';
import RootStack from 'navigation/RootStack';
import Loader from 'components/Loader';

const App = () => {
  const [isLoader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const init = async () => {
      const userAgent = await DeviceInfo.getUserAgent();
      Api.init({
        userAgent,
      });
    };
    init().finally(() => setLoader(false));
  }, []);
  return isLoader ? <Loader /> : <RootStack />;
};

export default App;
