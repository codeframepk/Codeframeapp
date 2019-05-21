import React, { Component } from 'react';
import { View, Text,WebView } from 'react-native';
import YouTube from "react-native-youtube";


export default class WebViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <WebView
        source={{uri: 'https://www.youtube.com/watch?v=sxLGz2v7-ds'}}
        style={{marginTop: 20}}
      />
    );
  }
}
