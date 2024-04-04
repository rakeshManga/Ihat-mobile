import React, { Component } from 'react';
import { View, Animated, StyleSheet, TextInput, Alert } from 'react-native';
import { string, func, object, number } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../../utils/metrics';
import { COLORS } from '../constants/colors';

export class FloatingTitleTextInputField extends Component {
  static propTypes = {
    attrName: string.isRequired,
    title: string.isRequired,
    value: string.isRequired,
    updateMasterState: func.isRequired,
    keyboardType: string,
    titleActiveSize: number, // to control size of title when field is active
    titleInActiveSize: number, // to control size of title when field is inactive
    titleActiveColor: string, // to control color of title when field is active
    titleInactiveColor: string, // to control color of title when field is active
    textInputStyles: object,
    otherTextInputProps: object,
    updateIconState:func.isRequired,
    enableViewPassword:Boolean,
    viewPassword:Boolean,
    secureTextEntry:Boolean
  }

  
  static defaultProps = {
    keyboardType: 'default',
    titleActiveSize: 11.5,
    titleInActiveSize: 15,
    titleActiveColor: 'black',
    titleInactiveColor: 'dimgrey',
    textInputStyles: {}, 
    otherTextInputAttributes: {},
  }

  constructor(props) {
    super(props);
    const { value } = this.props;
    this.position = new Animated.Value(value ? 1 : 0);
    this.state = {
      isFieldActive: false,
    }
  }

  _handleFocus = () => {
   
    if (!this.state.isFieldActive) {
      this.setState({ isFieldActive: true });
      Animated.timing(this.position, {
        toValue: 1,
        duration: 150,
      }).start();
    }
  }

  _handleBlur = () => {
    if (this.state.isFieldActive && !this.props.value) {
      this.setState({ isFieldActive: false });
      Animated.timing(this.position, {
        toValue: 0,
        duration: 150,
      }).start();
    }
  }

  _onChangeText = (updatedValue) => {
    const { attrName, updateMasterState } = this.props; 
    updateMasterState(attrName, updatedValue);
  }
  _onClickIcon=()=>{
    
    const { viewPassword, updateIconState } = this.props; 
    updateIconState();
  }
  _returnAnimatedTitleStyles = () => {
    const { isFieldActive } = this.state;
    const {
      titleActiveColor, titleInactiveColor, titleActiveSize, titleInActiveSize
    } = this.props;
  
    return {
      top: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0],
      }),
      fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
      color: isFieldActive ? titleActiveColor : titleInactiveColor,
    }
  }

  _returnAnimatedFocusStyles = () => {
    const { isFieldActive } = this.state;
    const {
      titleActiveColor, titleInactiveColor, titleActiveSize, titleInActiveSize
    } = this.props;
  
    return {
      // top: this.position.interpolate({
      //   inputRange: [0, 1],
      //   outputRange: [0, 0],
      // }),
      //fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
      //color: isFieldActive ? titleActiveColor : titleInactiveColor,
      borderColor:isFieldActive?'grey':'grey'
    }
  }

  render() {
    return (
      <View style = {[Styles.container,this._returnAnimatedFocusStyles(),this.props.container]}>
        <Animated.Text
          style = {[Styles.titleStyles, this._returnAnimatedTitleStyles()]}
        >
          {this.props.title}
        </Animated.Text>
        <View style={Styles.inputContainer}>
        <TextInput
          value = {this.props.value}
          style = {[Styles.textInput, this.props.textInputStyles]}
          underlineColorAndroid = 'transparent'
          onFocus = {this._handleFocus}
          onBlur = {this._handleBlur}
          onChangeText = {this._onChangeText}
          keyboardType = {this.props.keyboardType}
          secureTextEntry={this.props.secureTextEntry}
          {...this.props.otherTextInputProps}
        />
        {this.props.enableViewPassword&&
              <Icon
                name={!this.props.viewPassword ? 'eye-slash' : 'eye'}
                //name={'eye-slash'}
                color={COLORS.black}
                size={Metrics.rfv(20)}
                style={{
                  position:'absolute',
                  right:10
                }}
                onPress={() => {
                  //Alert.alert('c');
                  this._onClickIcon()
                  //setViewPassword(!this.props.viewPassword);
                }}
              />
            }
            </View>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 9,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 40,
    marginVertical: 8,
    
  },
  textInput: {
    fontSize: 25,
    marginTop: 10,
    fontFamily: 'Avenir-Medium',
    color: 'black',
  },
  titleStyles: {
    position: 'absolute',
    fontFamily: 'Avenir-Medium',
    left: 3,
    left: 4,
  },inputContainer:{
    justifyContent: 'center'
  }
})