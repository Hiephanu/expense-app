import { useNavigation } from "@react-navigation/native"
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from "react-native"
import NavLayout from "../layout/Navlayout";
import { formatDate } from "../utils/formatDate";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from 'react-redux';
import { addExpense } from "../redux/reducer/expenseReducer";
const AddScreen = () => {
    const navigate = useNavigation()
    const dispatch = useDispatch()
    const { convertDate, convertFromString,isValidDate } = formatDate();
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;

    
    const handleCancel = () => {
        navigate.goBack()
    };

    const handleAdd = () => {
        if (description != null && (amount != null && !isNaN(amount)) && (dateRegex.test(date) && isValidDate(date))) {
            const expenseData = {
                description: description,
                amount: amount,
                date: convertFromString(date)
            }
            dispatch(addExpense(expenseData))
            alert("CREATE SUCCESS")
            navigate.goBack(expenseData)
        } else {
            alert("Invalid input!!!")
        }
    };

    return (
        <NavLayout type={'Add expense'}>
            <ScrollView>
                <View>
                    <View>
                        <Text style={styles.title}>
                            Description
                        </Text>
                        <TextInput
                            value={description}
                            onChangeText={setDescription}
                            style={styles.textInput}
                            placeholder="Description of expense"
                        />
                    </View>
                    <View>
                        <Text style={styles.title}>
                            Amount
                        </Text>
                        <TextInput
                            value={amount}
                            onChangeText={setAmount}
                            style={styles.textInput}
                            placeholder="The amount of money"
                        />
                    </View>
                    <View>
                        <Text style={styles.title}>
                            Date
                        </Text>
                        <TextInput
                            value={date}
                            onChangeText={setDate}
                            style={styles.textInput}
                            placeholder="dd-mm-yyyy"
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Pressable onPress={handleCancel}>
                            <Text style={styles.cancel}>
                                Cancel
                            </Text>
                        </Pressable>
                        <LinearGradient colors={['rgb(51,165,230)', 'rgb(190,111,253)', 'rgb(244,141,139)']} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }} style={{ borderRadius: 10 }}>
                            <Pressable onPress={handleAdd}>
                                <Text style={styles.update}>Add</Text>
                            </Pressable>
                        </LinearGradient>
                    </View>
                </View>
            </ScrollView>
        </NavLayout>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    textInput: {
        borderColor: 'black',
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 10
    },
    cancel: {
        backgroundColor: 'gray',
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 10
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginTop: 30,
        paddingBottom:20
    },
    update: {
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 10
    }
})

export default AddScreen
