import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#6A322F',
    },

    header:{
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 53,
        marginBottom: 39
    },

    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        color:'#13131a',
        fontWeight:'bold',
    },

    description:{
        fontSize:16, 
        lineHeight:24,
        color:'#737380',
    },

    itemsList:{
        marginTop:39,
    },
    item:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF9E5',
        marginBottom:16,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    itemImg:{
        
    },
    itemInfo:{
        alignItems:'flex-end',
    },
    itemName:{
        fontSize:20,
        color:'#3A3A3A',
    },
    itemCategory:{
        marginTop:8,
        fontSize:15,
        marginTop:30,
        color:'#737380',
    },

    detailsButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    detailsButtonText:{
        color:'#e02041',
        fontSize:15,
        fontWeight:'bold',
    },

    searchSection: {
        flexDirection: 'row',
        backgroundColor: '#FFF9E5',
        borderRadius: 23,
        paddingLeft: 18,
        paddingTop: 14,
        paddingBottom: 14,
        color: '#3A3A3A'
    },
    searchIcon: {
        paddingRight: 14
    },
    searchInput: {
        color: '#3A3A3A',
        fontSize: 20,
        fontStyle: 'normal',
        flex: 1,
        lineHeight: 25,
        minWidth: 1
    },


    rashidCard: {
        marginTop: 33,
        paddingTop:5,
        marginBottom:16,
        alignItems: 'center'
    },
    rashidImage: {
        marginTop: 8
    }
})