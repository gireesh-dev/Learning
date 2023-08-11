import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import arrowBack from './assets/ArrowBack.png'
import financeIcon from './assets/FinanceIcon.png'
import TaskIcon from './assets/TaskIcon.png'
import HomeLogo from './assets/homelogo.png'
import bitcoin from './assets/bitcoin.png'

const Activity = ({ logo, title, type, amount, tag, date }) => {
    return (
        <View style={styles.ActivityContainer}>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={{ marginLeft: 10, }}>
                    <Text style={styles.actTitle}>{title}</Text>
                    <Text style={styles.actTag}>{type} <Text style={[styles.actTag, { color: type == "Sent" ? "rgba(255, 57, 116, 1)" : "rgba(28, 172, 171, 1)" }]}> {amount}</Text></Text>
                </View>
            </View>
            <View style={{ alignItems: "flex-end" }} >
                <Text style={styles.actTag}>Tag : {tag}</Text>
                <Text style={styles.actdatekey}>Date<Text style={styles.actTag}>{date}</Text></Text>
            </View>
        </View>
    )
}

export default function History({navigation, route}) {
    const [activeTab, setActiveTab] = useState("finance")
    const [type, setType] = useState(route.params?.type)

    const navigateBack =()=>{
        navigation.goBack()
    }

    return (
        <LinearGradient colors={["rgba(49, 50, 80, 1)", "rgba(31, 32, 54, 1)"]} style={styles.root}>
            <View style={styles.headerContainer}>
                <Pressable style={{ width: "20%" }} onPress={()=> navigateBack()}>
                    <Image source={arrowBack} style={styles.userLogo} />

                </Pressable>
                <View style={{ width: "60%", alignItems: "center" }}>
                    <Text style={styles.title}>{type == "Expenses" ? "Total Expenses" : "Total Income"}</Text>
                </View>
                <View style={{ width: "20%" }}>

                </View>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.currencyText}>₹<Text style={styles.ValueText}>45,000</Text>.14</Text>
                <Text style={styles.uptoText}>Upto<Text style={styles.dateText}> 13th Feb 2023</Text></Text>

            </View>
            {type == "Income" &&
            <ScrollView>
                
                <Activity logo={HomeLogo} title={"Home Rent"} type={"Sent"} tag={"Home"} date={"12 Feb 2023"} amount={"6000"} />
                <Activity logo={bitcoin} title={"Aviral Cryptopool"} type={"Received"} tag={"Freelance"} date={"12 Feb 2023"} amount={"14,000"} />
               
                
            </ScrollView>
            }
            {type == "Expenses" &&
            <ScrollView>
                <Activity logo={HomeLogo} title={"Home Rent"} type={ "Sent"} tag={"Home"} date={"12 Feb 2023"} amount={ "6000"} />
                <Activity logo={HomeLogo} title={"Home Rent"} type={ "Sent"} tag={"Home"} date={"12 Feb 2023"} amount={ "6000"} />
                <Activity logo={HomeLogo} title={"Home Rent"} type={ "Sent"} tag={"Home"} date={"12 Feb 2023"} amount={ "6000"} />
                <Activity logo={HomeLogo} title={"Home Rent"} type={ "Sent"} tag={"Home"} date={"12 Feb 2023"} amount={ "6000"} />
                <Activity logo={HomeLogo} title={"Home Rent"} type={ "Sent"} tag={"Home"} date={"12 Feb 2023"} amount={ "6000"} />
                <Activity logo={HomeLogo} title={"Home Rent"} type={ "Sent"} tag={"Home"} date={"12 Feb 2023"} amount={ "6000"} />
            </ScrollView>
            }
            {type == "Balance" &&
            <ScrollView>
                <Activity logo={bitcoin} title={"Aviral Cryptopool"} type={"Received"} tag={"Freelance"} date={"12 Feb 2023"} amount={"14,000"} />
                <Activity logo={bitcoin} title={"Aviral Cryptopool"} type={"Received"} tag={"Freelance"} date={"12 Feb 2023"} amount={"14,000"} />
                <Activity logo={bitcoin} title={"Aviral Cryptopool"} type={"Received"} tag={"Freelance"} date={"12 Feb 2023"} amount={"14,000"} />
                <Activity logo={bitcoin} title={"Aviral Cryptopool"} type={"Received"} tag={"Freelance"} date={"12 Feb 2023"} amount={"14,000"} />
                <Activity logo={bitcoin} title={"Aviral Cryptopool"} type={"Received"} tag={"Freelance"} date={"12 Feb 2023"} amount={"14,000"} />
                <Activity logo={bitcoin} title={"Aviral Cryptopool"} type={"Received"} tag={"Freelance"} date={"12 Feb 2023"} amount={"14,000"} />

            </ScrollView>
            }

            <View style={styles.footer}>
                <Pressable style={[styles.footerElement, { backgroundColor: activeTab == "finance" ? "rgba(44, 58, 97, 1)" : "transparent" }]} onPress={() => setActiveTab("finance")}>
                    <Image source={financeIcon} style={styles.footericon} />
                    <Text style={styles.footerTitle}> Finance</Text>
                </Pressable>
                <Pressable style={[styles.footerElement, { backgroundColor: activeTab == "task" ? "rgba(44, 58, 97, 1)" : "transparent" }]} onPress={() => setActiveTab("task")}>
                    <Image source={TaskIcon} style={styles.footericon} />
                    <Text style={styles.footerTitle}> Todo Manager</Text>
                </Pressable>
            </View>
        </LinearGradient>
    )
}



var styles = StyleSheet.create({
    root: {
        height: "100%",
        width: "100%",
        padding: 16
    },

    headerContainer: {
        flexDirection: "row",
        height: "6%"
    },
    title: {
        fontSize: 16,
        color: "#FFF",
        fontWeight: "400"
    },

    ActivityContainer: {
        backgroundColor: "rgba(29, 28, 47, 1)",
        padding: 10,
        borderRadius: 10,
        height: 66,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20

    },
    bodyContainer:{
        height:"15%",
        justifyContent:"center",
        alignItems:"center"
    },

    logoContainer: {
        borderRadius: 100,
        height: 46,
        width: 46,
        backgroundColor: "rgba(32, 33, 55, 1)",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: 29,
        width: 29
    },
    actTitle: {
        fontWeight: "400",
        fontSize: 20,
        color: "rgba(148, 148, 161, 1)"
    },
    actTag: {
        fontWeight: "400",
        fontSize: 14,
        color: "rgba(148, 148, 161, 1)"
    },
    actdatekey: {
        fontWeight: "400",
        fontSize: 14,
        color: "rgba(124, 122, 158, 1)"
    },
    footer: {
        position: "absolute",
        bottom: 40,
        alignItems: "center",
        backgroundColor: "rgba(33, 45, 80, 1)",
        borderRadius: 100,
        height: 66,
        width: 350,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        padding: 20


    },
    footerElement: {
        backgroundColor: "rgba(44, 58, 97, 1)",
        height: 40,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 100,
        justifyContent: "center"
    },
    footericon: {
        height: 26,
        width: 26,
        tintColor: "rgba(202, 215, 233, 1)"
    },
    footerTitle: {
        color: "rgba(202, 215, 233, 1)",
        fontSize: 16,
        fontWeight: "400"
    },
    balanceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    currencyText: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "200"
    },
    ValueText: {
        color: "#FFF",
        fontSize: 40,
        fontWeight: "200"
    },

    uptoText: {
        color: "rgba(108, 109, 129, 1)",
        fontSize: 12,
        fontWeight: "300"
    },
    dateText: {
        color: "rgba(155, 166, 202, 1)",
        fontSize: 12,
        fontWeight: "300"
    },
});