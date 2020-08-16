import React from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import * as MailComposer from 'expo-mail-composer';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import logoImg from "../../../assets/logo.png";
// import itemImg from "../../../assets/item.gif"
import itemImg from "../../../assets/tree.gif"
import { StatusBar } from 'expo-status-bar';

export default function Detail(){

    const navigation = useNavigation();
    const route = useRoute();

    const item = route.params.item
    const message = `Ola ${item.name}, estou entrando em contato pois gostaria de ajudar no caso *${item.title}* com o valor de: ${Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(item.value)}`;
    function navigateToBack(){
        navigation.goBack();
    };

    const HeadTable = ['NPC', 'Localização', 'Valor']
    const DataTable = [
        ['Anerui', 'Ab\'Dendriel', '4 gp'],
        ['Hireling (Trader)', 'Casas e Guildhalls', '5 gp'],
        ['Raffael', 'Island of Destiny', '4 gp'],
        ['Dankwart', 'Svargrond', '4 gp'],
        ['Anerui', 'Ab\'Dendriel', '4 gp'],
        ['Anerui', 'Ab\'Dendriel', '4 gp'],
    ]

    function navigateToHome () {
        navigation.navigate('Home');
    }

    function sendEmail(){
        // 
    };

    function sendWhatsApp(){
        // Linking.openURL(`whatsapp://send?phone=55${item.whatsapp}&text=${message}`)
    };

    function navigateToNewIem() {
        navigation.push('Detail', { item })
    }

    return(
        <View style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToHome}>
                    <Image style={styles.logoImg} source={logoImg}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToBack}>
                    <Feather name="x" size={28} color="#3A3A3A"></Feather>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.itemInfo}>
                    <View style={styles.itemImgContainer}>
                        <Image
                            style={styles.itemImage}
                            source={itemImg}
                        />
                    </View>
                    <View style={styles.itemAbout}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                    </View>
                </View>

                <Text style={styles.title}>
                    Notas
                </Text>

                <Text style={styles.text}>
                    Este item pode ser comercializado pelo Mercado. Elmo com o melhor "arm" do jogo, porém pouco utilizado, não só pela raridade como também devido a existência de outros que oferecem bônus de skill e proteções a algum tipo específico de dano.
                </Text>

                <Text style={styles.title}>
                    História
                </Text>

                <Text style={styles.text}>
                    Nos primórdios do jogo, era loot dos Daemons e só havia indícios de sua existência em mundos mais antigos. Contudo, com a implementação da possibilidade de transferência dos personagens, pode ser encontrado em outros mundos.
                </Text>

                <Text style={styles.title}>
                    O Primeiro Golden Helmet - Uma velha história de Karl, ex-"Wizard¹"
                </Text>

                <Text style={styles.text}>
                    "Antes de eu começar, tenho de salientar que não foi realmente o primeiro Golden Helmet que foi obtido por um jogador, mas o primeiro que existe ainda hoje. Houve uma atualização (talvez em 1999? - corrija-me se estou errado), onde agora todos os itens raros foram eliminados e toda a configuração do sistema de itens foi reformulada. Isso foi necessário porque era muito fácil chegar até aqueles itens (dragons dropavam todos eles) e no nível 5 um jogador já tinha um conjunto completo dos então melhores itens no jogo: Golden Helmet, Magic Plate Armor e Fire Sword. Então, para tornar o Tibia mais interessante, todos estes itens foram substituídos por um capacete de aço (chain helmet), uma chain armor e uma espada regular. A partir dessa atualização em diante, os raros itens se tornaram difíceis de obter.{"\n"}{"\n"}

                    Então, quando o servidor ficou online com a nova atualização, Thais se surpreendeu, com pessoas enchendo o templo imediatamente, de forma a dar ao bom e velho Quentin um choque pelo aparecimento súbito de tantos jogadores fazendo login em sua residência. Alguns ficaram chateados por que perderam os equipamentos que estavam usando, alguns foram apressados até o depósito para verificar o que aconteceu com seus itens. Um jogador correu à frente de todos os outros para ser o primeiro a ver o que o demônio dos tesouros estava escondendo. Esta foi Galadriel, provavelmente a mais poderosa dos magos na época. Ela não deveria ter tido muita pressa, já que não havia mais ninguém que estava tão ansioso quanto ela para ver o grande demônio, mas ainda assim ela teve. Havia, na época, apenas um lugar em Tibia em que você poderia enfrentar um demônio, e era bem abaixo Thais, ao sul de Mintwallin. Entre 10-15 minutos depois de o servidor vir online recebo uma mensagem de Galadriel: ela havia derrotado os demônios e encontrou o tesouro: um Helmet of The Stars e uma Magic Plate Armor. Ela ficou um pouco chateada, porque ela ainda achava fácil de obter o HOTS (Helmet of the Stars). O que não sabíamos era que este magnífico tesouro foi dado apenas uma vez pelo demônio solitário, logo, foi Galadriel a primeira e única jogadora a ter este agradável item durante algum tempo".
                </Text>

                <Text style={styles.title}>
                    Vende Para
                </Text>

                <Table style={{marginTop: 10}} borderStyle={{borderWidth: 1, borderColor: '#6A352F'}}>
                    <Row data={HeadTable} style={styles.headStyle} textStyle={styles.tableText}/>
                    <Rows data={DataTable} textStyle={styles.tableText}/>
                </Table>

            </ScrollView>

            {/* <View style={styles.item}>
                <Text style={[styles.itemProperty, {marginTop:0}]}>ONG:</Text>
                <Text style={styles.itemValue}>{item.name} de {item.city}/{item.uf}</Text>

                <Text style={styles.itemProperty}>CASO:</Text>
                <Text style={styles.itemValue}>{item.description}</Text>

                <Text style={styles.itemProperty}>VALOR:</Text>
                <Text style={styles.itemValue}>
                    {Intl.NumberFormat('pt-BR',
                    {style:'currency', currency:'BRL'}).format(item.value)
                    }
                </Text>
            </View> */}

            {/* <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso!!</Text>

                <Text style={styles.heroDescription}>Entre em contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={navigateToNewIem}>
                        <Text style={styles.actionText}>Teste</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>   
    );
}