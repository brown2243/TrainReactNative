/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

class CustomDrawer extends Component {
    constructor(props) {
        super(props);
        this.items = [
            {
                navOptionIcon: 'home', // FontAwesome icon이름
                navOptionName: 'HOME',  // 메뉴표시 이름
                screenName: 'Home', // 스크린 이름
            },
            {
                navOptionIcon: 'road',
                navOptionName: 'DETAIL',
                screenName: 'Detail',
            },
            {
                navOptionIcon: 'gear',
                navOptionName: 'SETTING',
                screenName: 'Setting',
            },
        ];
    }

    render() {
        return (
            <View style={styles.drawer}>
                <Image
                    source={require('./images/cat2.png')}
                    style={styles.profile} />
                <View style={styles.menuGroup}>
                    {this.items.map((item, key) => (
                        <View key={key}
                            style={styles.menuItem}>
                            {/* <Text children={item.screenName} /> */}
                            <TouchableOpacity onPress={() => {
                                console.log(item.screenName);
                                this.props.navigation.navigate(item.screenName);
                                }}>
                                <View style={styles.touch}>
                                    <Icon name={item.navOptionIcon} size={25} style={styles.menuIcon} />
                                    <Text children={item.navOptionName} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#a9a9a9',
        alignItems: 'baseline',
    },
    profile: {
        width: '100%',
        height: 150,
        resizeMode: 'stretch',
    },
    touch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuGroup: {
        backgroundColor: 'white',
        width: '100%',
    },
    menuItem: {
        paddingTop: 8,
        paddingLeft: 10,
    },
    menuIcon: {
        paddingRight:5,
    },
});

export default CustomDrawer;