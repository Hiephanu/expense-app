import { StyleSheet, Text, View } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { useSelector } from 'react-redux'
const TotalExpenstive = () => {
    const expenses = useSelector(state => state.expenses).expenses;
    const sum = Math.round(expenses.reduce((accumulator, item) => {
        return accumulator +parseFloat(item.amount);
    }, 0)*100)/100
    return (
        <LinearGradient colors={['rgb(51,165,230)', 'rgb(190,111,253)', 'rgb(244,141,139)']} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }} style={styles.totalExpensive}>
            <View style={styles.totalExpensive}>
                <Text style={styles.title}>
                    Total Expenses
                </Text>
                <Text style={styles.total}>
                    {sum} $
                </Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    totalExpensive: {
        textAlign: 'center',
        width: "100%",
        borderRadius: 20
    },
    title: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 30
    },
    total: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 30
    }
})

export default TotalExpenstive