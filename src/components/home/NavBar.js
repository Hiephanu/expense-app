import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { FontAwesome6 } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"

const NavBar = () => {
    const [status, setStatus] = useState(true)
    const navigate = useNavigation()
    return (
        <View style={styles.navBar}>
            <Text style={styles.title}>
                Transactions
            </Text>
            <View style={styles.nav}>
                <Pressable onPress={() => setStatus(true)}>
                    <Text style={status ? styles.active : styles.normal}>
                        All
                    </Text>
                </Pressable>
                <Pressable onPress={() => setStatus(false)}>
                    <Text style={status ? styles.normal : styles.active}>
                        Recent
                    </Text>
                </Pressable>
            </View>
            <Pressable onPress={()=> navigate.navigate("Add")}>
                <View>
                    <FontAwesome6 name="add" size={24} color="black" />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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

export default NavBar