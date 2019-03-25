import { StyleSheet } from "react-native";
import { Color } from "../../assets/color";
import { ScreenParameter } from "../../consts/ScreenParameter";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.ENSIGN
  },
  scrollContainer: {
    flex: 1,
    width: '100%'
  },
  scrollContainerContent: {
    alignItems: 'center'
  },
  contentContainer: {
    flex: 1,
    width: ScreenParameter.WIDTH * 0.90
  },
  formContainer: {
  },
  logoContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  nameControl: {
    marginVertical: 7,
  },
  passwordControl: {
    marginVertical: 7
  },
  submitButton: {
    marginVertical: 10
  }
})
