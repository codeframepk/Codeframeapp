import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Left,
  Right,
  Subtitle,
  Title,
  Body,
  Icon,
  Button,
  TabHeading
} from "native-base";
import Favourite from "./Favourite";
import Sports from "./Sports";
import News from "./News";
import Movies from "./Movies";
import Entertainment from "./Entertainment";
import Canada from "./Canada";
import Portugal from "./Portugal";
import German from "./German";
import Indonesian from "./Indonesian";
import Australian from "./Australian";
import Italy from "./Italy";
import Thailand from "./Thailand";
import Punjabi from "./Punjabi";
import SouthIndian from "./SouthIndian";
import Afghan from "./Afghan";
import Filpino from "./Filpino";
import French from "./French";
import Documentary from "./Documentrary";
import Music from "./Music";
import Bangla from "./Bangla";
import Kids from "./Kids";
import Cooking from "./Cooking";
import Religious from "./Religious";
export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#ff8c1a" barStyle="light-content" />

        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#ff8c1a" }}>
                <Icon name="favorite-border" type="MaterialIcons" />
              </TabHeading>
            }
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Favourite />
          </Tab>
          <Tab
            heading="SPORTS"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Sports />
          </Tab>
          <Tab
            heading="NEWS"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <News />
          </Tab>
          <Tab
            heading="MOVIES"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Movies />
          </Tab>
          <Tab
            heading="ENTERTAINMENT"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Entertainment />
          </Tab>
          <Tab
            heading="CANADA"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Canada />
          </Tab>
          <Tab
            heading="PORTUGAL"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Portugal />
          </Tab>
          <Tab
            heading="GERMAN"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <German />
          </Tab>
          <Tab
            heading="INDONESIAN"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Indonesian />
          </Tab>
          <Tab
            heading="AUSTRALIAN"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Australian />
          </Tab>
          <Tab
            heading="ITALy"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Italy />
          </Tab>
          <Tab
            heading="THAILAND"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Thailand />
          </Tab>
          <Tab
            heading="PUNJABI"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Punjabi />
          </Tab>
          <Tab
            heading="SOUTH INDIAN"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <SouthIndian />
          </Tab>
          <Tab
            heading="FILPINO"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Filpino />
          </Tab>
          <Tab
            heading="FRENCH"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <French />
          </Tab>
          <Tab
            heading="DOCUMENTARY"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Documentary />
          </Tab>
          <Tab
            heading="MUSIC"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Music />
          </Tab>
          <Tab
            heading="KIDS"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Kids />
          </Tab>
          <Tab
            heading="COOKING"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Cooking />
          </Tab>
          <Tab
            heading="RELIGIOUS"
            tabStyle={{ backgroundColor: "#ff8c1a" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#ff8c1a" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Religious />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
