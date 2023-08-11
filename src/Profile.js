import { View, Text, Image, ScrollView, Pressable, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import arrowBack from './assets/ArrowBack.png'
import financeIcon from './assets/FinanceIcon.png'
import TaskIcon from './assets/TaskIcon.png'
import userLogo from './assets/RahulProfile.png'
import callCenter from './assets/callCenter.png'
import about from './assets/about.png'



export default function Profile({ navigation }) {
    const [activeTab, setActiveTab] = useState("finance")
    const [aboutModal, setAboutModal] = useState(false);
    const [customerCareModal, setCustomerCareModal] = useState(false);

    const navigateBack = () => {
        navigation.goBack()
    }
    return (
        <LinearGradient colors={["rgba(49, 50, 80, 1)", "rgba(31, 32, 54, 1)"]} style={styles.root}>
            <View style={styles.headerContainer}>
                <Pressable onPress={() => navigateBack()}>
                    <Image source={arrowBack} />
                </Pressable>
                <View>

                </View>
                <Pressable style={styles.logoutButton} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.logoutText}>Logout</Text>
                </Pressable>


            </View>
            <View style={styles.profilesection}>
                <Image source={userLogo} style={styles.userLogo} />
                <Text style={styles.title}>Yamparala Rahul</Text>
                <Text style={styles.email}>Email Id : rahulvignanwork@gmail.com</Text>

            </View>
            <View style={{ marginTop: 50 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.taskHeading}>My Tags</Text>
                    <Pressable style={styles.addTaskButton}><Text style={styles.addTaskText}>Add new</Text></Pressable>
                </View>
                <View style={styles.taskContainer}>
                    <Text style={styles.tag}>NEFT</Text>
                    <Text style={styles.tag}>IMPS</Text>
                    <Text style={styles.tag}>UPI</Text>

                </View>
            </View>
            <View style={styles.aboutContainer}>
                <Pressable style={styles.aboutButton} onPress={() => setAboutModal(true)}>
                    <Text style={styles.aboutText}>About App</Text>
                    <Image source={about} />
                </Pressable>
                <Pressable style={styles.aboutButton} onPress={() => setCustomerCareModal(true)}>
                    <Text style={styles.aboutText}>Support</Text>
                    <Image source={callCenter} />
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={aboutModal}
                onRequestClose={() => {
                    setAboutModal(false);
                }}>
                <View style={styles.modalroot}>
                    <Text style={styles.modalHead}>Information</Text>
                    <View style={styles.modalView}>
                        <View style={styles.subHeaderContainer}>
                            <View style={styles.dot}></View>
                            <Text style={styles.subHeader}>About 37Dev app. </Text>
                        </View>
                        
                        
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setAboutModal(!aboutModal)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={customerCareModal}
                onDismiss={()=>setCustomerCareModal(false)}
                onRequestClose={() => {
                    setCustomerCareModal(false);
                }}>
                <View style={styles.modalroot}>
                <Text style={styles.modalHead}>Support</Text>
                    <View style={styles.modalView}>
                        <Text style={styles.subHeader}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setCustomerCareModal(!customerCareModal)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

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
        height: "8%",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center"
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
    logoutButton: {
        backgroundColor: "rgba(32, 33, 55, 1)",
        width: 97,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
    logoutText: {
        color: "rgba(255, 57, 116, 1)",
        fontSize: 16,
        fontWeight: "400"
    },
    userLogo: {
        height: 136,
        width: 136,
        alignSelf: "center"
    },
    profilesection: {
        alignItems: "center"
    },
    title: {
        fontSize: 25,
        fontWeight: "400",
        color: "rgba(202, 215, 233, 1)",
        marginTop: 20

    },
    email: {
        fontSize: 14,
        fontWeight: "400",
        color: "rgba(202, 215, 233, 1)",
        marginTop: 10,
        textDecorationLine: "underline"
    },
    addTaskButton: {
        width: 97,
        height: 31,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(43, 45, 72, 1)"
    },
    addTaskText: {
        fontSize: 14,
        fontWeight: "400",
        color: "rgba(155, 166, 202, 1)"
    },
    taskHeading: {
        fontSize: 18,
        fontWeight: "400",
        color: "rgba(155, 166, 202, 1)"
    },
    taskContainer: {
        backgroundColor: "rgba(43, 45, 72, 1)",
        width: "100%",
        marginTop: 10,
        justifyContent: "space-evenly",
        height: 110,
        padding: 10,
        borderRadius: 10
    },
    tag: {
        color: "rgba(202, 215, 233, 1)",
        borderRadius: 19,
        fontSize: 16,
        fontWeight: "300",
        lineHeight: 20,
    },
    aboutContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
    aboutButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(48, 49, 79, 1)",
        height: 42,
        width: 153,
        borderRadius: 100

    },
    aboutText: {
        fontSize: 16,
        fontWeight: "400",
        color: "rgba(217, 217, 217, 1)",
        marginRight: 10
    },
    modalroot:{
        height: 345,
        width: 345,
        backgroundColor:"rgba(32, 33, 55, 1)",
        borderRadius: 20,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },
    modalHead:{
        fontSize: 20,
        fontWeight:"400",
        color:"rgba(155, 166, 202, 1)"
    },
    dot:{
        height: 10,
        width: 10,
        backgroundColor:"rgba(43, 45, 72, 1)",
        borderRadius: 100
    },
    subHeaderContainer:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    subHeader:{
        fontSize: 16,
        fontWeight:"400",
        color:"rgba(155, 166, 202, 1)"
    }
})