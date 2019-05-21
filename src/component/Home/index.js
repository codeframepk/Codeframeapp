import React, { Component } from "react";
import { View, Text, StatusBar, ImageBackground } from "react-native";
import {
  Container,
  Header,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Title,
  Subtitle
} from "native-base";
import { styles } from "../sidebar/styles";
import Tabs from './Tabs'
import HeaderImage from '../../assets/bc.jpg'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
      <Header style={{backgroundColor:'#ff8c1a'}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Live NetTV</Title>
            <Subtitle>All Channels</Subtitle>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="video" type="Entypo" />
            </Button>
            <Button transparent>
              <Icon name="settings" type="SimpleLineIcons" />
            </Button>
          </Right>
        </Header>
        <Tabs />
      </Container>
    );
  }
}
