import { View, Text, StyleSheet, ScrollView,Pressable } from "react-native"
import MainLayout from "../layout/MainLayout"
import { useContext,useEffect,useState } from "react"
import { ExpensesContext } from "../redux/store"
import { FontAwesome6 } from '@expo/vector-icons'
import ExpensiveItem from "../components/home/ExpensiveItem"
import { useNavigation } from "@react-navigation/native"

const MainScreen = () => {
    const expenseAll = useContext(ExpensesContext).expenses

    const [status, setStatus] = useState(true)
    const [expenseShow, setExpenseShow] = useState([])
    const navigate = useNavigation()
    

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const expenseRecent = expenseAll.filter(expense => {
        return expense.date >= oneWeekAgo;
    })

    const allExpenseHandle = ()=>{
        setStatus(true)
    }
    const recentExpenseHanle = ()=>{
        setStatus(false)
    }

    useEffect(()=>{
        if(status){
            setExpenseShow(expenseAll)
        } else {
            setExpenseShow(expenseRecent)
        }
    },[status])
    return (

        <MainLayout>
            <View style={styles.navBar}>
                <Text style={styles.title}>
                    Transactions
                </Text>
                <View style={styles.nav}>
                    <Pressable onPress={() => allExpenseHandle()}>
                        <Text style={status ? styles.active : styles.normal}>
                            All
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => recentExpenseHanle()}>
                        <Text style={status ? styles.normal : styles.active}>
                            Recent
                        </Text>
                    </Pressable>
                </View>
                <Pressable onPress={() => navigate.navigate("Add")}>
                    <View>
                        <FontAwesome6 name="add" size={24} color="black" />
                    </View>
                </Pressable>
            </View>
            <ScrollView>
                {
                    expenseShow.map(expense => (
                        <ExpensiveItem key={expense.id} expensive={expense} />
                    ))
                }
            </ScrollView>
        </MainLayout>
    )
}

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