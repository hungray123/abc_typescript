import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Images from "../../Themes/Images";
import Icon from "react-native-vector-icons/FontAwesome";
const EditProfile: React.FC = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.View_Top}>
        <View style={Styles.View_top_header}>
          <View style={{ width: "33%" }}>
            <Text></Text>
          </View>
          <View style={Styles.Title_Header_block}>
            <Text style={Styles.Title_Header}>Thong tin</Text>
          </View>
          <View style={Styles.btn_Save_block}>
            <TouchableOpacity>
              <Text style={Styles.btn_Save}> Save</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.View_top_body}>
          <Image source={Images.Img_Profile} style={Styles.Avatar} />
          <Text style={Styles.txt_UserName}>JONNY KEN</Text>
        </View>
      </View>
      <View style={Styles.View_body}>
        <View style={Styles.body_block}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="pencil" size={20} color="#900" style={{ padding: 5 }} />
            <Text style={Styles.txt_info}> Email</Text>
          </View>
          <TextInput
            placeholder="Hungvan804@gmail.com"
            style={Styles.txt_info_2}
          />
        </View>
        <View style={Styles.body_block}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="mobile" size={24} color="#900" style={{ padding: 5 }} />
            <Text style={Styles.txt_info}> Điện thoại</Text>
          </View>
          <TextInput placeholder="0961461262" style={Styles.txt_info_2} />
        </View>
        <View style={Styles.body_block}>
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="facebook-square"
              size={20}
              color="#900"
              style={{ padding: 5 }}
            />
            <Text style={Styles.txt_info}> Facebook</Text>
          </View>
          <TextInput placeholder="shyn.one.love" style={Styles.txt_info_2} />
        </View>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  View_Top: {
    flex: 0.35,
    backgroundColor: "purple",
    borderRadius: 30,
  },
  View_top_header: {
    flexDirection: "row",
    height: "30%",
    //justifyContent: 'space-around',
    alignItems: "flex-end",
    // backgroundColor:'green',
    marginBottom: 5,
  },
  Title_Header_block: {
    width: "33%",
    //  backgroundColor:'red',
    // fontSize:17,
    // fontWeight:'bold',
    alignItems: "center",
    height: 30,
    //fontWeight:'bold',
  },
  Title_Header: {
    // width:'33%',
    //backgroundColor:'red',
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 5,
    // alignItems: 'center',
    // height:50,
    //fontWeight:'bold',
    color: "white",
  },
  btn_Save_block: {
    width: "33%",
    // backgroundColor:'green',
    justifyContent: "center",
    alignItems: "flex-end",
  },
  btn_Save: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: "green",
    fontWeight: "bold",
    color: "white",
  },
  View_top_body: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    // backgroundColor:'pink'
  },
  Avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderColor: "white",
    borderWidth: 2,
  },
  txt_UserName: {
    fontSize: 28,
    marginVertical: 10,
    textAlign: "center",
    marginStart: 5,
    color: "white",
  },

  //View_body
  View_body: {
    flex: 0.5,
  },
  body_block: {
    marginHorizontal: 30,
    marginTop: 5,
    paddingVertical: 15,
  },
  txt_info: {
    fontSize: 15,
    paddingVertical: 3,
    color: "grey",
    marginTop: 5,
  },
  txt_info_2: {
    fontSize: 20,
    paddingVertical: 3,
    color: "black",
    marginHorizontal: 33,
  },
});
export default EditProfile;
