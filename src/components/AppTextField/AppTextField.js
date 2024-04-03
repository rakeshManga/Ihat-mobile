import React, {Component} from 'react';
import {
    View, Text, StyleSheet, TextInput,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONT_ROBOTO, STANDARD_SCREEN_HEIGHT } from '../../styles/Const';


class AppTextField extends Component {

    constructor(props) {
        super(props);

    }


    // componentDidMount(): void {

    // }

    // componentWillUnmount(): void {

    // }

    render() {
        let {value, changeText, placeHolder} = this.props;

        return (
            <View style={{padding: RFValue(30, STANDARD_SCREEN_HEIGHT), paddingVertical: 10}}>
                <View style={[{...styles.viewStyle}]}>
                    <TextInput
                        {...this.props}
                        value={value}
                        placeholder={placeHolder}
                        style={styles.textFiledStyle}
                        
                        onChangeText={(text) => {
                            changeText(text);
                        }}
                        
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    textFiledStyle: {
        height: '100%',
        fontFamily: FONT_ROBOTO,
        fontWeight: '400',
        width: '100%',
        padding: 10,
        paddingLeft: RFValue(20, STANDARD_SCREEN_HEIGHT),
        paddingRight: RFValue(20, STANDARD_SCREEN_HEIGHT),
       
    },
    viewStyle: {
        height: 44,
        width: '100%',
        borderRadius: 8,
        backgroundColor: 'white',
        borderColor: '#ddd',
        borderWidth: 1
    },
});


export default AppTextField;
