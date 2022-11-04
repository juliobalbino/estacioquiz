import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  bckGnd: {
    resizeMode: 'cover',
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff'
  },

  imgpreset4k: {
    marginTop: 150,
    width: "72%",
    height: "45.5%"
  },

  imgpresethd: {
    marginTop: 80,
  },

  apreset4k: {
    width: "62%", height: "5%",
    position: 'relative',
    top: -780,
    borderRadius: 15,
    borderWidth: 4,
  },

  bpreset4k: {
    width: "62%", height: "5%",
    position: 'relative',
    top: -790,
    borderRadius: 15,
    borderWidth: 4,
  },

  cpreset4k: {
    width: "62%", height: "5%",
    position: 'relative',
    top: -810,
    borderRadius: 15,
    borderWidth: 4,
  },

  apresethd: {
    width: 780, height: 90,
    position: 'relative',
    top: -440,
    borderRadius: 15,
    borderColor: 'yellow',
    borderWidth: 4,
  },

  bpresethd: {
    width: 780, height: 90,
    position: 'relative',
    top: -433,
    borderRadius: 15,
    // borderColor: 'yellow',
    borderWidth: 4,
  },

  cpresethd: {
    width: 780, height: 90,
    position: 'relative',
    top: -425,
    borderRadius: 15,
    // borderColor: 'yellow',
    borderWidth: 4,
  },

  timerpreset4k: {
    position: 'relative',
    top: -400,
    backgroundColor: '#144BC8',
    padding: 20,
    borderRadius: 10
  },

  timerpresethd: {
    position: 'relative',
    top: -120,
    backgroundColor: 'transparent',
    marginTop: -130,
    borderRadius: 10
  }

});