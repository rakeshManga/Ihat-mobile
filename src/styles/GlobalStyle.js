import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Constants from './Const';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
    centerView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderUnderline: {
        borderStyle: 'solid',
        borderWidth: 0,
        borderBottomWidth: 2,
        borderColor: Constants.UNDERLINE_COLOR
    },

    bottomContainer: {
        backgroundColor: Constants.THEME_COLOR,
        shadowColor: "rgba(0, 0, 0, 0.19)",
        shadowOffset: {
        width: 0,
        height: 6
        },
        shadowRadius: 30,
        elevation: 5,
        shadowOpacity: 1,
        height: RFValue(60, Constants.STANDARD_SCREEN_HEIGHT)
    },

    shadowEffect: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,

        elevation: 20,
    },

    bottomTabText: {
        color: Constants.WHITE_COLOR,
        fontSize: RFValue(Constants.SMALL_FONT_SIZE, Constants.STANDARD_SCREEN_HEIGHT),
        fontFamily: Constants.FONT_REGULAR,
    },

    card: {
        backgroundColor: Constants.WHITE_COLOR,
        alignSelf:'center',
        zIndex: 100,
        borderRadius: 6,
        borderColor: Constants.AXA_THEME_COLOR,//Constants.THEME_COLOR,
        borderWidth: 1
    },

    tabStyle: {
        alignItems: "center",
        justifyContent: 'flex-end',
        paddingVertical: 4,
        backgroundColor: Constants.THEME_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    listContainerStyle: {
        flex: 1,
        width: wp('90%'),
        flexDirection: 'row',
        marginHorizontal: wp('5%'),
        //height: LIST_ITEM_HEIGHT,
        backgroundColor: Constants.WHITE_COLOR,
        marginTop: RFValue(5, Constants.STANDARD_SCREEN_HEIGHT),
        marginBottom: RFValue(5, Constants.STANDARD_SCREEN_HEIGHT),
        borderRadius: RFValue(Platform.OS == 'ios' ? 5 : 1, Constants.STANDARD_SCREEN_HEIGHT),
        borderColor: Constants.ICON_COLOR,
        borderWidth: 1,
        //overflow: 'hidden',
        shadowColor: Constants.ICON_COLOR,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.8,
        shadowRadius: 1.41,
        elevation: 2,
      },
      listTitle: {
        color: Constants.WHITE_COLOR,
        marginBottom: 4,
        marginLeft: RFValue(10, Constants.STANDARD_SCREEN_HEIGHT),
        fontSize: RFValue(Constants.NORMAL_FONT_SIZE, Constants.STANDARD_SCREEN_HEIGHT),
        fontFamily: Constants.FONT_REGULAR,
      },
})


/* fonts */
export const FontFamily = {
    kadwaRegular: "Kadwa_regular",
    kadwaBold: "Kadwa_bold",
    avenirLTStdRegular: "AvenirLTStd_regular",
    robotoRegular: "Roboto_regular",
    robotoMedium: "Roboto_medium",
    robotoBold: "Roboto_bold",
    robotoSemibold: "Roboto_semibold",
    poppinsRegular: "Poppins_regular",
    sourceSansProSemibold: "SourceSansPro_semibold",
  };
  /* font sizes */
  export const FontSize = {
    size_xs: 12,
    size_base: 16,
    size_base1: 19,
    size_base2: 18,
    size_mini: 15,
    size_sm: 14,
    size_smi: 13,
    size_mini_3: 14,
    size_sm_3: 13,
    size_6xl: 25,
    size_xl: 20,
    size_xxl: 24,
    size_11xl: 30,
  };
  /* Colors */
  export const Color = {
    white: "#fff",
    black: "#000",
    gray_100: "#fefefe",
    gray_200: "#818181",
    gray_300: "#777",
    gray_400: "#202020",
    gray_500: "#0b0b0b",
    gray_600: "rgba(255, 255, 255, 0)",
    dimgray_100: "#6b6b6b",
    dimgray_200: "#575757",
    darkslategray_100: "#363636",
    honeydew_100: "#e9f9e5",
    honeydew_200: "#cef3db",
    aliceblue_100: "#e6ebf5",
    aliceblue_200: "#daedf3",
    mediumseagreen_100: "#34af5f",
    mediumseagreen_200: "#34af5e",
    forestgreen: "#1b9e49",
    darkgray_100: "#a5a5a5",
    darkgray_200: "#969696",
    darkolivegreen: "#20562b",
  };
  /* border radiuses */
  export const Border = {
    br_3xs: 10,
    br_8xs: 5,
    br_10xs: 3,
    br_5xs: 8,
    br_xl: 20,
    br_9xs_1: 3,
    br_mini_7: 15,
  };
  