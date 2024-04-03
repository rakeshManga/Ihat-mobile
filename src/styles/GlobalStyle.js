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
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,

        elevation: 5,
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
        borderColor: Constants.THEME_COLOR,
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