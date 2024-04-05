import { View, Text, StyleSheet, ScrollView,Pressable } from "react-native"
import MainLayout from "../layout/MainLayout"
import { useEffect,useState } from "react"
import { FontAwesome6 } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import ExpensiveItem from "../components/home/ExpensiveItem"
import { useNavigation } from "@react-navigation/native"

const MainScreen = () => {
    const expenseAll = useSelector(state => state.expenses);

    const navigate = useNavigation();

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const expenseRecent = expenseAll.expenses.filter(expense => expense.date >= oneWeekAgo);

    const [status, setStatus] = useState(true);

    const allExpenseHandle = () => {
        setStatus(true);
    };

    const recentExpenseHandle = () => {
        setStatus(false);
    };

    const expenseToShow = status ? expenseAll.expenses : expenseRecent;
    console.log("show", expenseToShow);

    return (
        <MainLayout>
            <View style={styles.navBar}>
                <Text style={styles.title}>Transactions</Text>
                <View style={styles.nav}>
                    <Pressable onPress={allExpenseHandle}>
                        <Text style={status ? styles.active : styles.normal}>All</Text>
                    </Pressable>
                    <Pressable onPress={recentExpenseHandle}>
                        <Text style={status ? styles.normal : styles.active}>Recent</Text>
                    </Pressable>
                </View>
                <Pressable onPress={() => navigate.navigate("Add")}>
                    <FontAwesome6 name="add" size={24} color="black" />
                </Pressable>
            </View>
            <ScrollView>
                {expenseToShow.map((expense,index) => (
                    <ExpensiveItem key={index} expensive={expense} />
                ))}
            </ScrollView>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:15,
        marginBottom:15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    nav: {
        marginTop: 5,
        flexDirection: 'row',
        gap: 10
    },
    normal: {
        color: 'gray'
    },
    active: {
        color: 'red'
    }
})


export default MainScreen