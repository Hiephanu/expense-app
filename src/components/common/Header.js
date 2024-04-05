import { Image, StyleSheet, Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons'

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.wrapper}>
                <View style={styles.user}>
                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yVzpUFpfx4YZOQUpA5URaREz-RCyPRwSIA&usqp=CAU" }} style={styles.image} />
                    <View>
                        <Text>
                            Welcome
                        </Text>
                        <Text style={styles.name}>
                            Doan Hiep
                        </Text>
                    </View>
                </View>
                <View style={styles.icon}>
                    <AntDesign name="setting" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 200
    },
    user: {
        flexDirection: 'row',
        gap: 10
    },
    name: {
        marginTop: 5,
        fontWeight: 'bold'
    },
    icon: {
        marginTop: 10
    }
})

export default Header