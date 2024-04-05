import { View, Text, StyleSheet, Pressable } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from 'expo-linear-gradient'

const NavLayout = ({ children, type }) => {
    const navigate = useNavigation()

    return (
        <View style={styles.navLayout}>
            <LinearGradient colors={['rgb(51,165,230)', 'rgb(190,111,253)', 'rgb(244,141,139)']} start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }} style={styles.totalExpensive}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Pressable onPress={() => navigate.goBack()}>
                            <AntDesign name="arrowleft" size={28} color="white" />
                        </Pressable>
                        <Text style={styles.text}>{type}</Text>
                    </View>
                    {!(type === 'Add expense') &&
                        <View>
                           <Pressable onPress={()=> navigate.navigate("Add")}>
                            <Ionicons name="add-outline" size={28} color="white" />
                           </Pressable>
                        </View>
                    }
                </View>
            </LinearGradient>
            <View style={styles.childrenWrapper}>
                <View style={styles.children}>
                    <View style={{flex:1}}>
                        {children}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navLayout: {
        backgroundColor:'white',
        flex:1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:10,
        marginLeft:8,
        marginRight:8
    },
    headerLeft: {
        flexDirection: 'row',
        gap:10
    },
    text: {
        color:'white',
        fontSize:20
    },
    childrenWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    children: {
        width:'90%',
        flex:1
    }
})

export default NavLayout