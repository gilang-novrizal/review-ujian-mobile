import React from "react"
import {useDispatch} from "react-redux"
import {View, Text, StyleSheet} from "react-native"
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


import { getData } from "../action"

const Home = () =>{
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(getData("Indonesia"))
    },[])
    return(
        <View style={styles.root}> 
            <Text>HOME PAGE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button:{
        alignSelf: "center",
        padding: 15
    }
})

export default Home