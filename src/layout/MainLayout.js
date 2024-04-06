import { Dimensions, ScrollView, StyleSheet, View } from "react-native"
import Header from "../components/common/Header"
import TotalExpenstive from "../components/common/TotalExpenstive"
import { useState, useEffect } from "react"

const MainLayout = ({ children }) => {
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    const [dimensions, setDimensions] = useState({
        window: width,
        screen: height,
    });


    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            'change',
            ({ window, screen }) => {
                setDimensions({ window, screen });
            },
        );
        return () => subscription?.remove();
    });
    return (
        <View style={styles.mainLayout}>
            {width > height
                ?
                <View style={styles.scrollWrapper}>
                    <ScrollView contentContainerStyle={styles.hori}>
                        <View style={styles.wrapper}>
                            <View>
                                <Header />
                            </View>
                            <View style={styles.total}>
                                <TotalExpenstive />
                            </View>
                            <View style={styles.children}>
                                {children}
                            </View>
                        </View>
                    </ScrollView>
                </View>
                :
                <View style={styles.wrapper}>
                    <View>
                        <Header />
                    </View>
                    <View style={styles.total}>
                        <TotalExpenstive />
                    </View>
                    <View style={styles.children}>
                        {children}
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    hori: {
        width: '90%',
        flexGrow: 1,
        marginLeft:'10%'
    },
    scrollWrapper:{
        flex:1,
        width: '100%',
    },
    mainLayout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    wrapper: {
        width: '90%',
        flex: 1
    },
    total: {
        marginTop: 30
    },
    nav: {
        marginTop: 20
    },
    children: {
        flex: 1,
        flexGrow: 1,
        paddingBottom:20
    }
})
export default MainLayout