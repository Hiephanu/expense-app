import { StyleSheet, View } from "react-native"
import { FontAwesome6 } from '@expo/vector-icons'

const AddExpensive = ()=>{
    return (
        <View style={styles.addExpensive}>
            <View style={styles.add}>
                <FontAwesome6 name="add" size={24} color="black" />
            </View>
            <View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addExpensive:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    },
    add:{
        justifyContent:'center',
        alignItems:'center'
    }
})
export default AddExpensive