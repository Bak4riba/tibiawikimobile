import React, {useState, useEffect} from 'react';
import {View, TextInput, Image, Text, TouchableOpacity, FlatList, Keyboard} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import logoImg from "../../../assets/logo.png";
import styles from "./styles";
import api from '../../services/api'
import { StatusBar } from 'expo-status-bar';

import itemImg from "../../../assets/item.gif";

import rashid from "../../../assets/rashid.gif"

const itemsA = require('./items.json');



import { ImageBackground } from 'react-native'

import rashidmap from "../../../assets/rashidlb.png"

export default function Home(){
    const [searchResult, setSearchResult]   = useState([]);
    const [searchItems, setSearchItems]     = useState([]);
    const [searchText, setSearchText]       = useState('');
    const [loading, setLoading]             = useState(false);
    const [items, setItems]                 = useState(itemsA);
    const [total, setTotal] = useState(0);
    const navigation = useNavigation();
    const [page, setPage] = useState(1);

    function navigateToDetail(item){
        navigation.push('Detail', { item });
    }

    async function resetSearch() {
        setSearchText('')
        setSearchItems([])
        setSearchResult([])
    }

    async function search(){
        Keyboard.dismiss()

        if (searchText === '') {
            return resetSearch()
        }

        const text = searchText.toLowerCase()
        let res = items.filter((item) => {
            return item.name.toLowerCase().includes(text)
        })

        let arr1 = []
        let arr2 = res;

        for (let i = 0; i < 5; i++) {
            if (arr2[0] !== undefined) {
                arr1.push(arr2.shift())
            }
        }

        setSearchItems(arr1)
        setSearchResult(arr2)
    }

    function loadResults() {
        if (loading || searchResult.length === 0) return

        setLoading(true)

        let arr1 = searchItems;
        let arr2 = searchResult;

        for (let i = 0; i < 5; i++) {
            if (arr2[0] !== undefined) {
                arr1.push(arr2.shift())
            }
        }

        setSearchItems(arr1)
        setSearchResult(arr2)

        setLoading(false)

        console.log("loaded!")
    }

    useEffect(()=>{
        loadResults();
    }, [])
    return(
        <View style={styles.container}>
            <StatusBar style="light" />

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={()=>resetSearch()}
                >
                    <Image source={logoImg}/>
                </TouchableOpacity>
            </View>

            <View style={styles.searchSection}>
                <TextInput style={styles.searchInput}
                    placeholder="Pesquisar..."
                    placeholderTextColor="#3A3A3A"
                    onChangeText={search => setSearchText(search)}
                    onSubmitEditing={() => search()}
                    defaultValue={searchText}
                />

                <TouchableOpacity
                    onPress={()=>search()}
                >
                    <Feather style={styles.searchIcon}
                        name="search"
                       size={28}
                        color="#3A3A3A"
                    />
                </TouchableOpacity>

            </View>

            {searchItems.length === 0 &&
            <ImageBackground source={rashidmap} style={styles.rashidCard} imageStyle={{ borderRadius: 18 }}>
                <Image style={styles.rashidImage} source={rashid}/>
                <Text style={styles.itemName}>Hoje, Rashid está em Liberty Bay.</Text>
            </ImageBackground>

            // <View style={styles.rashidCard}>
                    
            //     <ImageBackground source={rashidmap} style={styles.rashidCard}>
            //         <Text style={styles.text}>Inside</Text>
            //     </ImageBackground>

            //     <View style={styles.itemImg}>
            //         <Image source={rashid}/>
            //     </View>

            //     <Text style={styles.itemName}>Hoje, Rashid está em Liberty Bay.</Text>

            // </View>
            }

            <FlatList
                data = {searchItems}
                style={styles.itemsList}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadResults}
                onEndReachedThreshold={0.2}
                renderItem={({item: item})=>(

                <TouchableOpacity
                    onPress={()=>navigateToDetail(item)}
                >
                    <View style={styles.item}>
                    
                        <View style={styles.itemImg}>
                            <Image source={itemImg}/>
                        </View>

                        <View style={styles.itemInfo}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemCategory}>{item.category}</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                )}
            />  
        </View>        
    )
}