import React, { useState, useReducer } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, Alert, TouchableWithoutFeedback } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

function dispatchFun(prevState, action) {
    switch(action.type){
        case "append":
            if(prevState == "0")
                return ""+action.value 
            return prevState + action.value
        case "point":
            if(prevState.indexOf(".") == -1)
                return prevState + "."
            return prevState
        case "del":
            if(prevState != "0"){
                if(prevState.length == 1)
                    return "0"
                return prevState.substring(0, prevState.length-1)
            }
            else
                return prevState
        default :
            return prevState
    }
}

export function FadeNumberPad({ label, initialValue = 0, onDone, disablePoint = false }){

    const [modalVisible, setModalVisible] = useState(false);
    const [value, dispatcher] = useReducer(dispatchFun, initialValue+"")

    function hideModal(){
        onDone(+value);
        setModalVisible(false);
    }
    
    return(
        <View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ borderRadius: 5, padding: 5, paddingLeft: 10, borderWidth: 1}}>
                <Text style={{fontSize: 22, color: 'black'}}>{`${+value}`}</Text>
            </TouchableOpacity>
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={modalVisible}
            >
            <TouchableWithoutFeedback onPress={()=> hideModal()}>
            <View style={styles.fadeModalView}>
            <TouchableWithoutFeedback>
            <View style={{paddingLeft: 8, paddingRight: 8, backgroundColor: 'white', borderRadius: 10}}>
                <View style={styles.modalHeader}>
                    <AntDesign name={"close"} size={25} onPress={() => hideModal()} color={"black"} />
                    <Text numberOfLines={1} style={{flex: 1, textAlign: 'center', fontSize: 18 }}> {label} </Text>
                    <AntDesign name="close" size={25} color={"white"} />
                </View>
                <View /* value container */ style={{alignItems: 'center'}} >
                    <View style={{width: '50%', alignItems: 'center', padding: 3, borderBottomWidth: 1}}>
                        <Text style={{fontSize: 22}}>{value}</Text>
                    </View>
                </View>
                <View /* numbers container */ style={{paddingTop: 10, paddingBottom: 10}} >
                    <Row 
                        cell_1="1" onPress_1={() => dispatcher({type: 'append', value: 1})} 
                        cell_2="2" onPress_2={() => dispatcher({type: 'append', value: 2})}
                        cell_3={
                            <Text style={{fontSize: 22, color: 'white'}}>3</Text>
                        } onPress_3={() => dispatcher({type: 'append', value: 3})}
                    />
                    <Row 
                        cell_1="4" onPress_1={() => dispatcher({type: 'append', value: 4})}
                        cell_2="5" onPress_2={() => dispatcher({type: 'append', value: 5})}
                        cell_3={
                            <Text style={{fontSize: 22, color: 'white'}}>6</Text>
                        } onPress_3={() => dispatcher({type: 'append', value: 6})}
                    />
                    <Row 
                        cell_1="7" onPress_1={() => dispatcher({type: 'append', value: 7})}
                        cell_2="8" onPress_2={() => dispatcher({type: 'append', value: 8})}
                        cell_3={
                            <Text style={{fontSize: 22, color: 'white'}}>9</Text>
                        } onPress_3={() => dispatcher({type: 'append', value: 9})}
                    />
                    <Row 
                        cell_1="." onPress_1={() => dispatcher({type: 'point'})} disablePoint={disablePoint}
                        cell_2="0" onPress_2={() => dispatcher({type: 'append', value: 0})}
                        cell_3={
                            <Feather name="delete" size={25} color={"white"} />
                        } onPress_3={() => dispatcher({type: 'del'})}
                    />
                </View>
                <View style={{ paddingTop: 10}} />
            </View>
            </TouchableWithoutFeedback>
            </View>
            </TouchableWithoutFeedback>
            </Modal>
        </View>
    )

}

export function SlideNumberPad({ label, initialValue = 0, onDone, disablePoint = false }){

    const [modalVisible, setModalVisible] = useState(false);
    const [value, dispatcher] = useReducer(dispatchFun, initialValue+"")

    function hideModal(){
        onDone(+value);
        setModalVisible(false);
    }
    
    return(
        <View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ borderRadius: 5, padding: 5, paddingLeft: 10, borderWidth: 1}}>
                <Text style={{fontSize: 22, color: 'black'}}>{`${+value}`}</Text>
            </TouchableOpacity>
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={modalVisible}
            >
            <TouchableWithoutFeedback onPress={()=> hideModal()}>
            <View style={styles.slideModalView}>
            <TouchableWithoutFeedback>
            <View style={{ paddingLeft: 8, paddingRight: 8,  elevation: 45, backgroundColor: 'white',}}>
                <View style={styles.modalHeader}>
                    <AntDesign name={"down"} size={25} onPress={() => hideModal()} color={"black"} style={{flex: 1, textAlign: 'center'}} />
                    <Text numberOfLines={1} style={{flex: 4, textAlign: 'center', fontSize: 18 }}> {label} </Text>
                    <AntDesign name="close" size={25} color={"white"} style={{flex: 1}} />
                </View>
                <View /* value container */ style={{alignItems: 'center', borderColor: 'red'}} >
                    <View style={{width: '50%', alignItems: 'center', padding: 3, borderBottomWidth: 1}}>
                        <Text style={{fontSize: 22}}>{value}</Text>
                    </View>
                </View>
                <View /* numbers container */ style={{paddingTop: 10, paddingBottom: 10}}>
                    <Row 
                        cell_1="1" onPress_1={() => dispatcher({type: 'append', value: 1})} 
                        cell_2="2" onPress_2={() => dispatcher({type: 'append', value: 2})}
                        cell_3={ <Text style={{fontSize: 22, color: 'white'}}>3</Text> } 
                        onPress_3={() => dispatcher({type: 'append', value: 3})}
                    />
                    <Row 
                        cell_1="4" onPress_1={() => dispatcher({type: 'append', value: 4})}
                        cell_2="5" onPress_2={() => dispatcher({type: 'append', value: 5})}
                        cell_3={ <Text style={{fontSize: 22, color: 'white'}}>6</Text> } 
                        onPress_3={() => dispatcher({type: 'append', value: 6})}
                    />
                    <Row 
                        cell_1="7" onPress_1={() => dispatcher({type: 'append', value: 7})}
                        cell_2="8" onPress_2={() => dispatcher({type: 'append', value: 8})}
                        cell_3={ <Text style={{fontSize: 22, color: 'white'}}>9</Text> } 
                        onPress_3={() => dispatcher({type: 'append', value: 9})}
                    />
                    <Row 
                        cell_1="." onPress_1={() => dispatcher({type: 'point'})} disablePoint={disablePoint}
                        cell_2="0" onPress_2={() => dispatcher({type: 'append', value: 0})}
                        cell_3={ <Feather name="delete" size={25} color={"white"} /> } 
                        onPress_3={() => dispatcher({type: 'del'})}
                    />
                </View>
                <View style={{ paddingTop: 15}} />
            </View>
            </TouchableWithoutFeedback>
            </View>
            </TouchableWithoutFeedback>
            </Modal>
        </View>
    )

}

function Row({ cell_1 = "", cell_2 = "", cell_3 = "", onPress_1, onPress_2, onPress_3, disablePoint = false }){
    return(
        <View style={{flexDirection: "row", marginTop: 15 }} >
            <TouchableOpacity style={[styles.number, { backgroundColor: disablePoint ? 'lightgrey' : 'darkgrey' }]} onPress={onPress_1} disabled={disablePoint}>
                <Text style={{fontSize: 22, color: 'white'}}>{cell_1}</Text>
            </TouchableOpacity>
            <View style={{padding: 10}} />
            <TouchableOpacity style={styles.number} onPress={onPress_2}>
                <Text style={{fontSize: 22, color: 'white'}}>{cell_2}</Text>
            </TouchableOpacity>
            <View style={{padding: 10}} />
            <TouchableOpacity style={styles.number} onPress={onPress_3}>
                {cell_3}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    fadeModalView: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 35,
        justifyContent: 'center', //flex-end
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2 //-10
        },
        shadowOpacity: 0.25, //0.1
        shadowRadius: 3.84,
        elevation: 5,
    },
    slideModalView:{
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -10 //2
        },
        shadowOpacity: 0.1, //0.25
        shadowRadius: 3.84,
        justifyContent: 'flex-end'
    },
    modalHeader: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    number: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10, 
        paddingLeft: 13, 
        paddingRight: 13, 
        padding: 5,
        backgroundColor: 'darkgrey'
    }
})