import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { Text, View } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <View>
      <Text>Teste</Text>
      <Routes />
    </View>
  );
}

