import {sizes, colors, fontSize, fontFamily} from '../../services';
const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: sizes.baseMargin,
    borderTopRightRadius: sizes.baseMargin,
    width: sizes.screenWidth * 1,
  },
  contentView: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    width: sizes.screenWidth * 1,
    alignSelf: 'center',
    position: 'absolute',
    borderTopLeftRadius: sizes.doubleBaseMargin,
    borderTopRightRadius: sizes.doubleBaseMargin,
    top: sizes.doubleBaseMargin * 5.5,
  },
  heading: {
    paddingTop: sizes.doubleBaseMargin,
    paddingLeft: sizes.doubleBaseMargin,
    fontSize: fontSize.h4,
    color: colors.textColor,
  },
  text: {
    paddingLeft: sizes.doubleBaseMargin,
    fontSize: fontSize.h6,
  },
  form: {
    paddingTop: sizes.doubleBaseMargin,
  },
  passwordForm: {
    paddingTop: sizes.baseMargin,
  },
  input: {
    bottom: sizes.TinyMargin,
    borderBottomWidth: 1,
    borderBottomColor: colors.textColor,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.8,
  },
  label: {
    paddingLeft: sizes.doubleBaseMargin,
    color: colors.label,
  },
  iconField: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: sizes.baseMargin * 2,
  },
  icon: {
    right: sizes.baseMargin * 2,
  },
  btnView: {
    backgroundColor: colors.buttonColor,
    padding: sizes.baseMargin,
    marginTop: sizes.doubleBaseMargin,
    width: sizes.screenWidth * 0.5,
    alignSelf: 'center',
    borderRadius: sizes.doubleBaseMargin,
  },
  btnText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: fontFamily.appTextBold,
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: sizes.baseMargin,
  },
  row: {flexDirection: 'row', right: sizes.TinyMargin},
  redText: {
    fontStyle: 'italic',
    color: colors.red,
  },
  socialLinks: {
    paddingTop: sizes.baseMargin,
    alignItems: 'center',
  },
  socialView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fbImg: {
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.13,
    right: sizes.baseMargin,
  },
  twitterImg: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.1,
    right: sizes.baseMargin / 2,
  },
  googleImg: {
    height: sizes.screenHeight * 0.055,
    width: sizes.screenWidth * 0.11,
  },
});
