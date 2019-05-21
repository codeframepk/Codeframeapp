import React, { Component,  } from "react";
import { View, Text,ImageBackground } from "react-native";
import { styles } from "./styles";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Button
} from "native-base";
import BackImage from "../../assets/bc.jpg";
import listImage from "../../assets/listbc.jpg"
import { ScrollView } from "react-native-gesture-handler";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <ImageBackground source={BackImage} style={styles.Container}>
        <View > 
        </View>
        </ImageBackground>
        <ImageBackground source={listImage} style={styles.contnt} >
        <ScrollView style={{marginBottom:20}} >
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="tv" type="FontAwesome" />
              </Button>
            </Left>
            <Body sytle={styles.bodyBorder}>
              <Text>Live Channels</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="event" type="MaterialIcons" />
              </Button>
            </Left>
            <Body style={styles.bodyBorder}>
              <Text>Live Events</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="play-video" type="Foundation" />
              </Button>
            </Left>
            <Body style={styles.bodyBorder}>
              <Text>VOD</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="report-problem" type="MaterialIcons" />
              </Button>
            </Left>
            <Body style={styles.bodyBorder}>
              <Text>Report</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="add-box" type="MaterialIcons" />
              </Button>
            </Left>
            <Body style={styles.bodyBorder}>
              <Text>Request</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="settings" type="MaterialIcons" />
              </Button>
            </Left>
            <Body style={styles.bodyBorder}>
              <Text>Setting</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="check" type="SimpleLineIcons" />
              </Button>
            </Left>
            <Body style={styles.bodyBorder}>
              <Text>Service Status</Text>
            </Body>
          </ListItem>
          <ListItem icon >
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="copyright" type="MaterialIcons" />
              </Button>
            </Left>
            <Body style={styles.bodyBorder} >
              <Text>Copyright</Text>
            </Body>
          </ListItem>
           <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="lock" type="MaterialIcons" />
              </Button>
            </Left>
            <Body style={styles.bodyBorder}>
              <Text>Privacy Policy</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="pencil-square-o" type="FontAwesome" />
              </Button>
            </Left>
            <Body style={styles.bodyBorder}>
              <Text>Feedback</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button >
                <Icon active name="share" type="SimpleLineIcons" />
              </Button>
            </Left>
            <Body style={styles.bodyBorder}>
              <Text>Share</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="web" type="MaterialCommunityIcons" />
              </Button>
            </Left>
            <Body style={styles.bodyBorder}>
              <Text>Official Website</Text>
            </Body>
          </ListItem>
          </ScrollView>
          </ImageBackground>
      
      </Container>
    );
  }
}
