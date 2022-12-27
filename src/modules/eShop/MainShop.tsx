import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductCard from "./Card";
import { observer } from "mobx-react-lite";
import ProductStore from "../../stores/ProductStore";
import {Product} from "../../models/eShop";

const MainShop = observer(() => {
    const renderHomeCard = ({ item: Product }) => (
            <View style={styles.container}>
                <ProductCard item={item} />
            </View>
    );

    return (

            <FlatList
                data={ProductStore.products}
                renderItem={renderHomeCard}
                keyExtractor={(item) => item.id}
            />

    );
});

export default MainShop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});