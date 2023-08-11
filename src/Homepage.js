import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import userLogo from './assets/Rahul.png'
import HomeLogo from './assets/homelogo.png'
import bitcoin from './assets/bitcoin.png'
import financeIcon from './assets/FinanceIcon.png'
import TaskIcon from './assets/TaskIcon.png'
import downArrow from './assets/ArrowDown.png'
import upArrow from './assets/ArrowUp.png'
import { RadioButton } from 'react-native-paper';
import crosspng from './assets/close.png'


const Tasks = ["Adding Podcast Section", "Mind map View Design"]
const DoneTasks = ["Onefitness app Design"]

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

export default function Homepage({ navigation, route }) {
    const [activeTab, setActiveTab] = useState("finance")
    const [checked, setChecked] = useState("");
    const [addTask, setAddTask] = useState(false)
    const navigateToExpenses = () => {
        navigation.navigate("History", { type: "Expenses" })
    }
    const navigateToBalance = () => {
        navigation.navigate("History", { type: "Balance" })
    }
    const navigateToRecents = () => {
        navigation.navigate("History", { type: "Income" })
    }
    const naviagteToTransaction = (type) => {
        navigation.navigate("Transaction", { type: type })
    }
    const CardOne = ({ title, balance, point }) => {
        return (
            <Pressable style={styles.cardOneCoontainer} onPress={() => title == "Balance" ? null : navigateToExpenses()}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.currencyText}>₹<Text style={styles.ValueText}>{balance}</Text>.{point}</Text>
            </Pressable>
        )
    }

    return (
        activeTab == "finance" ?
            <LinearGradient colors={["rgba(49, 50, 80, 1)", "rgba(31, 32, 54, 1)"]} style={styles.root}>
                <View style={styles.headerContainer}>
                    <Text style={styles.morningText}>Good morning</Text>
                    <Pressable onPress={()=> navigation.navigate("Profile")}>
                        <Image source={userLogo} style={styles.userLogo} />

                    </Pressable>
                </View>
                <View style={styles.balanceContainer}>
                    <CardOne title={"Balance"} balance={"20,000"} point={"14"} />
                    <CardOne title={"Expense"} balance={"22,000"} point={"14"} />
                </View>
                <Pressable style={styles.incomeCoontainer} onPress={() => navigateToBalance()}>
                    <View style={styles.incomesubcontainer} >
                        <Text style={styles.subContainerText}>Total Income</Text>
                        <Text style={styles.uptoText}>Upto<Text style={styles.dateText}> 13th Feb 2023</Text></Text>

                    </View>
                    <Text style={styles.incomeValueText}>₹ 42,000.14</Text>
                </Pressable>
                <View style={styles.showRecents}>
                    <View style={styles.recentHeader}>
                        <Text style={styles.recentTitle}>Recent Activity</Text>
                        <Pressable onPress={() => navigateToRecents()}><Text style={styles.recentall}>See all</Text></Pressable>

                    </View>
                    <Activity logo={HomeLogo} title={"Home Rent"} type={"Sent"} tag={"Home"} date={"12 Feb 2023"} amount={"6000"} />
                    <Activity logo={bitcoin} title={"Aviral Cryptopool"} type={"Received"} tag={"Freelance"} date={"12 Feb 2023"} amount={"14,000"} />
                    <Activity logo={HomeLogo} title={"Home Rent"} type={"Sent"} tag={"Home"} date={"12 Feb 2023"} amount={"6000"} />
                    <Activity logo={bitcoin} title={"Aviral Cryptopool"} type={"Received"} tag={"Freelance"} date={"12 Feb 2023"} amount={"14,000"} />
                    <View style={styles.operationContainer}>
                        <Pressable style={styles.receiveCard} onPress={() => naviagteToTransaction("Balance")}>
                            <Image source={downArrow} />
                        </Pressable>
                        <Pressable style={styles.sendCard} onPress={() => naviagteToTransaction("Expenses")}>
                            <Image source={upArrow} />

                        </Pressable>
                    </View>
                </View>
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
            :
            <LinearGradient colors={["rgba(49, 50, 80, 1)", "rgba(31, 32, 54, 1)"]} style={styles.root}>
                <View style={styles.headerContainer}>
                    <Text style={styles.morningText}>Your Tasks</Text>
                    <Image source={userLogo} style={styles.userLogo} />
                </View>
                <View style={styles.onGoingTaks}>
                    <Text style={styles.subHeader}>On Going Tasks</Text>
                    <View style={styles.divider}></View>
                    {Tasks.map((item) => (
                        <View style={styles.radioButtonContainer} key={item}>
                            <RadioButton
                                value={item}
                                status={checked === item ? 'checked' : 'unchecked'}
                                onPress={() => setChecked(item)}
                                color='#FFF'
                            />
                            <Text style={styles.radioText}>{item}</Text>
                        </View>

                    ))}
                </View>
                <View style={styles.onGoingTaks}>
                    <Text style={styles.subHeader}>Done Tasks</Text>
                    <View style={styles.divider}></View>
                    {DoneTasks.map((item) => (
                        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                            <View style={styles.radioButtonContainer} key={item}>
                                <RadioButton
                                    value={item}
                                    status={checked === item ? 'checked' : 'checked'}
                                    color='#FFF'
                                />
                                <Text style={styles.doneTaskText}>{item}</Text>
                            </View>
                            <Pressable style={{alignSelf:"flex-end",margin: 10}} >
                                <Image source={crosspng}/>
                            </Pressable>
                        </View>
                    ))}
                </View>
                {addTask &&
                    <View style={styles.onGoingTaks}>
                        <Text style={styles.subHeader}>Add Task</Text>
                        <View style={styles.divider}></View>
                            <View style={styles.addtaskContainer} >
                                <Text style={styles.radioText}>Mind map View Design</Text>
                                <Pressable style={styles.addbuttonText}><Text style={{color:"#FFF"}}>Add</Text></Pressable>
                            </View>
                    </View>
                }
                <View style={styles.addButtonContainer}>
                    <Pressable style={styles.addButton} onPress={()=> setAddTask(!addTask)}>
                        <Text style={{ fontSize: 40, color: "rgba(202, 215, 233, 1)" }}>+</Text>
                    </Pressable>
                </View>

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
        justifyContent: "space-between",
        height: "10%"
    },

    morningText: {
        color: "#FFF",
        fontSize: 30,
        fontWeight: "400",
        fontFamily: "Manrope"
    },

    userLogo: {
        height: 45,
        width: 45,
    },
    cardOneCoontainer: {
        height: 97,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        backgroundColor: "rgba(29, 28, 47, 1)"
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
    title: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "200"
    },
    incomeCoontainer: {
        height: 59,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        backgroundColor: "rgba(29, 28, 47, 1)",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    incomeValueText: {
        color: "#FFF",
        fontWeight: "200",
        fontSize: 24
    },
    incomesubcontainer: {

    },
    subContainerText: {
        fontSize: 16,
        fontWeight: "400",
        color: "#FFF"
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
    recentHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20

    },
    recentTitle: {
        fontWeight: "400",
        fontSize: 16,
        color: "rgba(202, 215, 233, 1)"
    },
    recentall: {
        fontWeight: "400",
        fontSize: 16,
        color: "rgba(148, 148, 161, 1)"
    },
    showRecents: {
        marginTop: 40,
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
    operationContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // position: "absolute",
        bottom: 100,
        marginLeft: -16,
        marginRight: -16
    },
    receiveCard: {
        backgroundColor: "rgba(54, 65, 96, 1)",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        width: 88,
        height: 60
    },
    sendCard: {
        backgroundColor: "rgba(54, 65, 96, 1)",
        borderBottomLeftRadius: 100,
        borderTopLeftRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        width: 88,
        height: 60
    },
    onGoingTaks: {
        padding: 15,
        backgroundColor: "rgba(29, 28, 47, 1)",
        borderRadius: 10,
        marginTop: 20
    },
    subHeader: {
        fontSize: 16,
        fontWeight: "400",
        color: "rgba(202, 215, 233, 1)"
    },
    divider: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(49, 47, 74, 1)",
        marginTop: 15,

    },
    radioButtonContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 10
    },
    radioText: {
        fontSize: 18,
        fontWeight: "400",
        color: "rgba(202, 215, 233, 1)"
    },
    doneTaskText: {
        fontSize: 18,
        fontWeight: "400",
        color: "rgba(202, 215, 233, 1)",
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    addButton: {
        justifyContent: "center",
        alignItems: "center",
        height: 64,
        width: 64,
        paddingBottom: 10,
        paddingTop: 5,
        backgroundColor: "rgba(29, 28, 47, 1)",
        borderRadius: 100,
        
    },
    addButtonContainer:{
        alignItems:"flex-end",
        position: "absolute",
        bottom: 120,
        right: 15
    },
    addbuttonText:{
        width: 72,
        height: 32,
        borderRadius: 100,
        justifyContent:"center",
        alignItems:"center",
        borderColor: "rgba(202, 215, 233, 1)",
        borderWidth: 1
    },
    addtaskContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 10
        
    }
});