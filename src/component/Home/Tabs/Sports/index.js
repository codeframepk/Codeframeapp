import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Header, H3 } from "native-base";
import img from "../../../../assets/bc.jpg";
import {withNavigation} from 'react-navigation'
import GeoSuper from '../../../../assets/PakistaniSportsImages/GeoSuper.png';
import PTVSports from '../../../../assets/PakistaniSportsImages/PTVSports.png';
import TenSport from '../../../../assets/PakistaniSportsImages/TenSports.jpg'
import DSport from '../../../../assets/PakistaniSportsImages/DSportlogo.jpg';
import ddSports from '../../../../assets/PakistaniSportsImages/ddSports.jpg';
import IPLlogo from '../../../../assets/PakistaniSportsImages/IPLlogo.jpg'
import SonyEspn from '../../../../assets/PakistaniSportsImages/SonyEspn.jpeg'
import SonySix from '../../../../assets/PakistaniSportsImages/SonySix.png'
import Sonysixhd from '../../../../assets/PakistaniSportsImages/Sonysixhd.png'
import starsportsselect from '../../../../assets/PakistaniSportsImages/starsportsselect.png'
import starselcthd2 from '../../../../assets/PakistaniSportsImages/starselcthd2.png'
import starspoerts1 from '../../../../assets/PakistaniSportsImages/starspoerts1.jpg'
import starsports1hindi from '../../../../assets/PakistaniSportsImages/starsports1hindi.jpg'
import StarSports2 from '../../../../assets/PakistaniSportsImages/StarSports2.jpg'
import starsports3 from '../../../../assets/PakistaniSportsImages/starsports3.jpeg'
import startSportsFirst from '../../../../assets/PakistaniSportsImages/startSportsFirst.jpg'
import sonyten1 from '../../../../assets/PakistaniSportsImages/sonyten1.jpg'
import sonyten1hd from '../../../../assets/PakistaniSportsImages/sonyten1hd.png'
import sonyten2 from '../../../../assets/PakistaniSportsImages/sonyten2.jpg'
import SonyTen2HD from '../../../../assets/PakistaniSportsImages/SonyTen2HD.jpg'
import sonyten3 from '../../../../assets/PakistaniSportsImages/sonyten3.jpg'
import Sonyten3hd from '../../../../assets/PakistaniSportsImages/Sonyten3hd.jpg'
import ArenaSports1 from '../../../../assets/PakistaniSportsImages/ArenaSports1.png'
import ArenaSports2 from '../../../../assets/PakistaniSportsImages/ArenaSports2.png'
import arenaSports3 from '../../../../assets/PakistaniSportsImages/arenaSports3.png'
import astroCricket from '../../../../assets/PakistaniSportsImages/astroCricket.png'

import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
 class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <ScrollView>
      <View style={{ backgroundColor: "#1a1a00" }}>
        <H3 style={styles.HeadingText}>Pakistani</H3>
        {/* Pakistani Channel list Start */}
        <View style={styles.LineView} />
        <View style={styles.boxImage}> 
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('WebViewScreen')
          }>
            <Image source={GeoSuper} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={PTVSports} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={TenSport} style={styles.channelImage} />
          </TouchableOpacity>
        </View>
        {/* Pakistani Channel List End */}

        {/* Indian Sports Start Here */}
        <H3 style={styles.HeadingText}>Indian</H3>
        <View style={styles.LineView} />
        <View style={styles.boxImage}> 
          <TouchableOpacity>
            <Image source={DSport} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={ddSports} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IPLlogo} style={styles.channelImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.boxImage}> 
          <TouchableOpacity>
            <Image source={SonyEspn} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={SonySix} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Sonysixhd} style={styles.channelImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.boxImage}> 
          <TouchableOpacity>
            <Image source={starsportsselect} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={starselcthd2} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={starspoerts1} style={styles.channelImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.boxImage}> 
          <TouchableOpacity>
            <Image source={starsports1hindi} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={StarSports2} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={starsports3} style={styles.channelImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.boxImage}> 
          <TouchableOpacity>
            <Image source={startSportsFirst} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={sonyten1} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={sonyten1hd} style={styles.channelImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.boxImage}> 
          <TouchableOpacity>
            <Image source={sonyten2} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={SonyTen2HD} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={sonyten3} style={styles.channelImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.boxImage}> 
          <TouchableOpacity>
            <Image source={Sonyten3hd} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Sonyten3hd} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Sonyten3hd} style={styles.channelImage} />
          </TouchableOpacity>
         
        </View>
        {/* International Channel list Start */}

        <H3 style={styles.HeadingText}>International</H3>
        <View style={styles.LineView} />
        <View style={styles.boxImage}> 
          <TouchableOpacity>
            <Image source={ArenaSports1} style={styles.channelImage}
            
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={ArenaSports2} style={styles.channelImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={arenaSports3} style={styles.channelImage} />
          </TouchableOpacity>
        </View>


        {/* International Channel list End */}


      </View>
      </ScrollView>
    );
  }
}


export default withNavigation(Sports)
