import { useNavigation, useRoute } from "@react-navigation/native"
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from "react-native"
import NavLayout from "../layout/Navlayout";
import { formatDate } from "../utils/formatDate";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { updateExpense } from "../redux/reducer/expenseReducer";
const EditScreen = () => {
    const expense = useRoute().params.expense;
    const navigate = useNavigation()
    const { convertDate, convertFromString,isValidDate } = formatDate();
    const [description, setDescription] = useState(expense.description);
    const [amount, setAmount] = useState(expense.amount);
    const [date, setDate] = useState(convertDate(expense.date));
    const dispatch = useDispatch()
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;

    const handleCancel = () => {
        navigate.goBack()
    };

    const handleUpdate = () => {
        const id = expense.id
        const expenseData = {
            description: description,
            amount: amount,
            date: convertFromString(date)
        }
        if(description == null && amount == null && date == null){
            alert("Input can't be null!")
        } else if(!dateRegex.test(date)){
            alert("Please input date with format dd-mm-yyyy")
        } else if(!isValidDate(date)){
            alert("Invalid date or input over now date !")
        }
        if (description != null && (amount != null && !isNaN(amount)) && (dateRegex.test(date) && isValidDate(date))) {
            dispatch(updateExpense({id: id,data: expenseData}))
            alert("Update success")
            navigate.goBack()
        }
    };

    return (
        <NavLayout type={'Edit expense'}>
            <ScrollView>
                <View>
                    <Text style={styles.title}>
                        Description
                    </Text>
                    <TextInput
                        value={description}
                        onChangeText={setDescription}
                        style={styles.textInput}
                    />
                </View>
                <View>
                    <Text style={styles.title}>
                        Amount
                    </Text>
                    <TextInput
                        value={amount.toString()}
                        onChangeText={setAmount}
                        style={styles.textInput}
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
                        <Pressable onPress={handleUpdate}>
                            <Text style={styles.update}>Update</Text>
                        </Pressable>
                    </LinearGradient>
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
        paddingBottom:30
    },
    update: {
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 10
    }
})

export default EditScreen
