/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View,  } from 'react-native';
import { WebView } from 'react-native-webview';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{ flex:1 }}>
        <WebView source={{ uri: 'https://jovial-northcutt-ffc0c1.netlify.com/' }} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
