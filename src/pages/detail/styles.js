import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#FFF9E5'
    },

    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    logoImg: {
        width: 130,
        resizeMode: 'contain',
    },

    item:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom:16,
        marginTop:48,
    },
    itemProperty:{
        fontSize:14,
        color:'#41414D',
        marginTop:24,
        fontWeight:'bold',
    },
    itemValue:{
        marginTop:8,
        fontSize:15,
        color:'#737380',
    },
    contactBox:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom:16,
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'#13131a',
        paddingTop: 20
    },
    heroDescription:{
        fontSize:15,
        color:'#737380',
        marginTop:16,
    },
    actions:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    action:{
        backgroundColor:'#E02041',
        borderRadius:8,
        height:50,
        width:'48%',
        justifyContent:'center',
        alignItems:'center'
    },
    actionText:{
        fontSize:15,
        fontWeight:'bold',
        color:'#FFF'
    },

    text: {
        paddingTop: 10,
        textAlign: 'justify'
    },


    itemInfo: {
        flexDirection:'row',
        alignItems:'center',
    },
    itemImgContainer: {
        width: wp('20%'),
        height: 75,
        flexDirection:'row',
        alignItems: 'center',
    },
    itemImage: {
        maxWidth: 75,
        maxHeight: 75,
        resizeMode: 'contain'
    },
    itemAbout: {
        width: wp('68%'),
    },
    itemName: {
        fontSize:20,
        color:'#3A3A3A'
    },
    itemDescription: {
        fontSize:12,
        color: 'green'
    },

    headStyle: {
        height: 40,
        alignContent: "center",
        backgroundColor: '#ffedb2'
    },
    tableText: {
        padding: 4,
        fontSize: 17,
        textAlign: 'center',
        backgroundColor: '#fff3cb'
    }
})