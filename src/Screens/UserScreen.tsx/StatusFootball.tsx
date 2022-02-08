import {View,Text, StyleSheet} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Styles= StyleSheet.create({
    Container:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'grey'
    },
    Title:{
        marginHorizontal:10,
        fontSize:13
    }
})
const StatusView: React.FC=()=>{
    return(
        <View style={Styles.Container}>
            <Text style={Styles.Title}><Icon name='radio-button-on' size={10} color='black' /> Không cọc</Text>
            <Text style={Styles.Title}><Icon name='radio-button-on' size={10} color='yellow' /> Đặt cọc</Text>
            <Text style={Styles.Title}><Icon name='radio-button-on' size={10}  color='green'/> Đang chơi</Text>
            <Text style={Styles.Title}><Icon name='radio-button-on' size={10}  color='purple'/> Đã thanh toán</Text>
        </View>
    )
}
export default StatusView;