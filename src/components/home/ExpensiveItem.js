import { StyleSheet, View, Text, Pressable } from "react-native"
import { formatDate } from "../../utils/formatDate"
import { useNavigation } from "@react-navigation/native"

const ExpensiveItem = ({ expensive }) => {
    const { convertDate } = formatDate()
    const navigate = useNavigation()
    const RouteToEdit = () => {
        navigate.navigate('Edit', { expense: expensive })
        console.log(expensive);
    }
    return (
        <Pressable onPress={RouteToEdit}>
            <View style={styles.safeView}>
                <View style={styles.expense}>
                    <Text style={styles.description}>
                        {expensive.description}
                    </Text>
                    <Text style={styles.text}>
                        {expensive.amount}
                    </Text>
                    <Text style={styles.text}>
                        {convertDate(expensive.date)}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1
    },
    expense: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#33a5e6',
        color: '#ffffff'
    },
    description: {
        width: '40%',
        color: '#ffffff'
    },
    text: {
        width: '30%',
        color: '#ffffff'
    }
})
export default ExpensiveItem