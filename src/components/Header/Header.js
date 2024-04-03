import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { LARGE_FONT_SIZE, STANDARD_SCREEN_HEIGHT, THEME_COLOR, WHITE_COLOR, FONT_REGULAR, TOOLBAR_HEIGHT, BLACK_COLOR } from '../../styles/Const';
import styles from '../../styles/GlobalStyle';


const Header = (props) => {
    const {letfIcon,leftIconPress, title, rightIcon, rightIconPress, backColor } = props;
    
    return  <View style={{width:wp('100%'), height: TOOLBAR_HEIGHT, backgroundColor: backColor ? backColor : THEME_COLOR, flexDirection: 'row'}}>
                {letfIcon && <TouchableOpacity
                    style={[styles.centerView, {width: 40, height: 50, marginLeft: 4, marginTop: Platform.OS == 'ios' ? 8:0, alignSelf:'center'}]}
                    onPress={leftIconPress}
                    >
                    <Ionicons name={letfIcon}
                        color={BLACK_COLOR} size={32} />
                </TouchableOpacity>}
                
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Text style={{
                        fontSize: RFValue(LARGE_FONT_SIZE, STANDARD_SCREEN_HEIGHT), 
                        fontFamily: FONT_REGULAR, 
                        color: WHITE_COLOR}}>{title}</Text>
                </View>
                {rightIcon &&  <TouchableOpacity
                    style={[styles.centerView, {width: 40, height: 50, marginLeft: 4}]}
                    onPress={rightIconPress}
                    >
                    <Ionicons name={rightIcon}
                        color={WHITE_COLOR} size={32} />
                </TouchableOpacity>}
               
            </View>
}

export default Header;