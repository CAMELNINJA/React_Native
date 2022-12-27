import React, {FC, useState} from 'react';
import {Product as Prod } from "../../models/eShop";
import {StyleSheet, View, Image, Text, ScrollView, Dimensions,  TouchableOpacity,Platform,Pressable} from "react-native";
import { Icon } from 'react-native-elements'
import ProductStore from "../../stores/ProductStore";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {RootStackParamList} from "../../models/Param";


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductScreen'>;
type ProductProp = RouteProp<RootStackParamList, 'ProductScreen'>;
const widthWindow:number= Dimensions.get('window').width;
const heightWindow:number= Dimensions.get('window').height;
function Product() {
    const navigation = useNavigation<NavigationProp>();
    const props = useRoute<ProductProp>();

        return(
        <View style={styles.container}>


            <ScrollView>
            <View style={styles.imageContainer}>
                <ScrollView horizontal={true}>
                    {props.params.image.map((image:string)=>
                        <Image
                        style={styles.image}
                        source={{

                        uri:image
                    }}/>)
                    }

                </ScrollView>

            </View>

            <View style={styles.infoContainer}>
                <View
                    style={[styles.infoBlock,styles.priceContainer,{ backgroundColor: 'rgba(234,234,208,0.58)', borderWidth:1}]}
                >
                    <Text style={styles.text}>Цена: {props.params.price} ₽</Text>

                </View>
                <View style={[styles.infoBlock,styles.priceContainer,{ backgroundColor:   'rgba(175,175,172,0.12)'}]}>
                    <TouchableOpacity  onPress={() => navigation.goBack()} >
                        <View style={styles.buttonBack}>
                            <Text style={styles.textButton}>Назад</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>ProductStore.setBuy(props.params.id,1)} >
                        <View style={styles.buttonAdd}>
                            <Text style={styles.textButton}>Добавить в корзину</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => ProductStore.setLike(props.params.id)}
                    >
                        <Icon
                            raised
                            name={props.params.isLiked?"favorite-border":"favorite"}
                            type="material-icons"
                            color="#f50"
                        />
                    </TouchableOpacity>
                </View>

                <View style={[styles.infoBlock,{ backgroundColor:   'rgba(175,175,172,0.12)'}]}>
                    <Text style={[styles.text, {marginBottom:10}]}>Описание</Text>
                    <Text style={styles.text}>{props.params.description}</Text>
                </View>
                </View>


            </ScrollView>
        </View>
        )

}

export default Product

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor:'#ffffff'
    },
    imageContainer:{
        flex:1,
        flexDirection: "column",
        alignItems: "center"
    },
    priceContainer:{
        flexDirection: "row",
    },
    image:{

        borderWidth: 1,
        width: widthWindow ,
        height: heightWindow*0.4,
        borderRadius: 50,
        margin: 1,
    },
    text:{
        fontSize:0.05*widthWindow,
        color:'#2b2b2b'
    },
    infoContainer:{
        padding:10,
        flex:1,
        alignItem:"flex-start",
        flexDirection:"column",
        justifyContent:'flex-end',
    },
    infoBlock:{
        borderRadius: 50,
        padding:25,
        marginBottom:10,
    },
    buttonsContainer: {
        flexDirection: "row",
        width: "70%",
        height: 60,
        justifyContent: "center",
        marginVertical: 10,
    },buttonAdd: {
        height: 60,
        width: 150,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: "#fe931b",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonBack: {
        height: 60,
        width: 65,
        borderRadius: 50,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white",
    },
    border: {
        marginTop: 15,
        borderWidth: 0.5,
        width: "90%",
        borderColor: "gray",
        marginBottom: 10,
    },
})