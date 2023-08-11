import { View, Text, Image, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import arrowBack from './assets/ArrowBack.png'
import financeIcon from './assets/FinanceIcon.png'
import TaskIcon from './assets/TaskIcon.png'
import calenderLogo from './assets/calendar.png'
import DatePicker from 'react-native-date-picker'
import arrowDown from './assets/arrowdown2.png'
import ArrowUp from './assets/arrowTop.png'


export default function Transaction({ navigation, route }) {
    const [activeTab, setActiveTab] = useState("finance")
    const [type, setType] = useState(route.params?.type)
    const [showDatePicker, setShowdatePicker] = useState(false)
    const today = new Date()
    const [date, setDate] = useState(today)
    const [showtags, setshowTags] = useState(false)
    const [tag, setTag] = useState("NEFT")
    const tags = ["NEFT", "IMPS", "UPI"]
    const navigateBack = () => {
        navigation.goBack()
    }

    const navigateToHistory = () =>{
        navigation.navigate("History", {type: type})
    }
    return (
        <LinearGradient colors={["rgba(49, 50, 80, 1)", "rgba(31, 32, 54, 1)"]} style={styles.root}>
            <View style={styles.headerContainer}>
                <Pressable style={{ width: "20%" }} onPress={() => navigateBack()}>
                    <Image source={arrowBack} style={styles.userLogo} />

                </Pressable>


            </View>
            <View style={styles.EmojiContainer}>
                <View style={styles.emoji}>

                </View>
                <Text style={styles.Text}>Add a Emoji</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.Text}> {type == "Income" ? " What is the Income or Source ?" : "What is the expense ?"}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={() => onChangeText()}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.Text}>How much it is ?</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={() => onChangeText()}
                />
            </View>
            <View style={styles.dateandtagContainer}>
                <View >

                    <Text style={styles.Text}>date</Text>

                    <Pressable style={styles.dateContainer} onPress={() => setShowdatePicker(true)}>
                        <Image source={calenderLogo} style={styles.userLogo} />

                        <Text style={styles.dateText}>{date.toString().slice(4, 15)}</Text>
                    </Pressable>
                    <DatePicker
                        modal
                        mode='date'
                        open={showDatePicker}
                        date={date}
                        onConfirm={(date) => {
                            setShowdatePicker(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setShowdatePicker(false)
                        }}
                    />


                </View>
                <View>
                    <Text style={styles.Text}>Tags</Text>
                    <Pressable style={styles.dateContainer} onPress={() => setshowTags(!showtags)}>
                        <Text style={styles.tag}>{tag}</Text>
                        {showtags ?
                            <Image source={arrowDown} style={styles.userLogo} key={showtags} />
                            :
                            <Image source={ArrowUp} style={styles.userLogo} key={showtags} />

                        }
                        {showtags &&
                            <View style={styles.tagsContainer}>
                                {tags.map((i) => (
                                    <Pressable key={i} onPress={() => { setTag(i); setshowTags(false) }}><Text style={styles.tag}>{i}</Text></Pressable>
                                ))
                                }
                            </View>
                        }
                    </Pressable>

                </View>


            </View>
            <Pressable style={styles.saveButton} onPress={()=> navigateToHistory()}>
                <Text style={styles.saveText}>Save</Text>
            </Pressable>
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
        height: "8%",
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
    EmojiContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "15%",
    },
    Text: {
        color: "rgba(155, 166, 202, 1)",
        fontSize: 18,
        fontWeight: "400",
        marginTop: 10
    },
    emoji: {
        height: 84,
        width: 84,
        borderRadius: 15,
        backgroundColor: "rgba(43, 45, 72, 1)"
    },
    inputContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: 10
    },
    input: {
        height: 57,
        marginTop: 10,
        borderRadius: 10,
        width: '100%',
        backgroundColor: "rgba(43, 45, 72, 1)"
    },

    dateandtagContainer: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between"

    },
    dateContainer: {
        height: 57,
        width: 173,
        borderRadius: 10,
        backgroundColor: "rgba(43, 45, 72, 1)",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"

    },
    dateText: {
        fontWeight: "400",
        fontSize: 22,
        color: "rgba(255, 255, 255, 1)",
        marginLeft: 10
    },
    tag: {
        fontSize: 16,
        color: "rgba(202, 215, 233, 1)",
        fontWeight: "400"
    },
    tagsContainer: {
        position: "absolute",
        width: " 100%",
        top: 0,
        left: 0,
        marginTop: 55,
        backgroundColor: "rgba(43, 45, 72, 1)",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10
    },
    saveButton: {
        backgroundColor: "rgba(33, 45, 80, 1)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        alignSelf: "center",
        width: 237,
        height: 56,
        marginTop: 100
    },
    saveText: {
        fontSize: 16,
        fontWeight: "400",
        color: "rgba(202, 215, 233, 1)"
    }
});