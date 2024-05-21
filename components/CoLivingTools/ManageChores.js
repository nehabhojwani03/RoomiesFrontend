
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS, SIZES } from '../../constants';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ManageChores = () => {
    const navigation = useNavigation();

    const emojisWithIcons = [
        { title: 'Low', icon: 'emoticon-happy-outline' },
        { title: 'Medium', icon: 'emoticon-cool-outline' },
        { title: 'High', icon: 'emoticon-lol-outline' },
    ];

    const [name, setName] = useState('');
    const [deadline, setDeadline] = useState('');
    const [priority, setPriority] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [submittedData, setSubmittedData] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const saveTasks = async (tasks) => {
        try {
            const jsonValue = JSON.stringify(tasks);
            await AsyncStorage.setItem('@tasks', jsonValue);
        } catch (e) {
            console.error("Failed to save tasks.", e);
        }
    };

    const loadTasks = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@tasks');
            const loadedTasks = jsonValue != null ? JSON.parse(jsonValue) : [];
            setSubmittedData(loadedTasks);
        } catch (e) {
            console.error("Failed to load tasks.", e);
        }
    };

    const handleAssign = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        const newTask = { name, deadline, priority, taskDescription };
        const updatedData = [...submittedData, newTask];
        setSubmittedData(updatedData);
        saveTasks(updatedData);
        setName('');
        setDeadline('');
        setPriority('');
        setTaskDescription('');
    };

    const handleDelete = (index) => {
        Alert.alert(
            "Delete Task",
            "Are you sure you want to delete this task?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        const updatedData = submittedData.filter((_, i) => i !== index);
                        setSubmittedData(updatedData);
                        saveTasks(updatedData);
                    }
                }
            ]
        );
    };

    const handleTick = (index) => {
        Alert.alert(
            "Complete Task",
            "Are you sure you have completed this task?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        const updatedData = submittedData.filter((_, i) => i !== index);
                        setSubmittedData(updatedData);
                        saveTasks(updatedData);
                    }
                }
            ]
        );
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.submittedDataContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.submittedDataTextOne}>Work Assign to:</Text>
                <Text style={styles.submittedDataTextTwo}> {item.name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.submittedDataTextOne}>Deadline:</Text>
                <Text style={styles.submittedDataTextTwo}> {item.deadline}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.submittedDataTextOne}>Priority:</Text>
                <Text style={styles.submittedDataTextTwo}> {item.priority}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.submittedDataTextOne}>Task:</Text>
                <Text style={styles.submittedDataTextTwo}> {item.taskDescription}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <TouchableOpacity onPress={() => handleDelete(index)}>
                    <Icon name="delete" style={{ marginHorizontal: 10 }} size={28} color="red" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTick(index)}>
                    <Icon name="check-circle" style={{ marginHorizontal: 10 }} size={28} color="green" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.backIcon}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <ArrowLeftIcon color={'white'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText(COLORS.white, SIZES.small + 47)}>Manage Chores </Text>
                </View>
            </View>
            <View style={{
                backgroundColor: '#2A4D50',
                height: 120,
                width: '90%',
                alignSelf: "center",
                borderRadius: 24,
                marginTop: 25,
                borderColor: "#ffffff",
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.7,
                elevation: 10
            }}>
                <View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: '600',
                        color: 'white',
                        marginHorizontal: 14,
                        marginTop: 16
                    }}>Manage Chores
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '300',
                            color: 'white',
                            marginHorizontal: 20,
                            marginTop: 13
                        }} >Efficient chore management  </Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '300',
                            color: 'white',
                            marginHorizontal: 20,
                            marginTop: 2
                        }}>involves organizing tasks</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '300',
                            color: 'white',
                            marginHorizontal: 20,
                            marginTop: 2
                        }}  >tracking progress effectively. </Text>
                    </View>
                    <View style={{
                        height: 75,
                        width: 140,
                        marginHorizontal: -15,
                        marginTop: 6
                    }}>
                        <Image
                            style={{
                                aspectRatio: 2,
                                height: 73,
                                width: 130,
                            }}
                            source={require('../../assets/images/manage-chores.png')} />
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    fontSize: 20,
                    marginTop: 30,
                    marginHorizontal: 20
                }}>Assign to: </Text>
                <TextInput
                    style={{
                        borderRadius: 10,
                        height: 45,
                        width: '60%',
                        marginHorizontal: 5,
                        marginTop: 20,
                        color: 'black',
                        paddingLeft: 10,
                        fontSize: 18,
                        textAlign: 'left',
                        backgroundColor: '#E9ECEF',
                    }}
                    autoCapitalize='none'
                    placeholder='Enter name'
                    placeholderTextColor={'black'}
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    fontSize: 20,
                    marginTop: 40,
                    marginHorizontal: 20
                }}>Deadline:</Text>
                <TextInput
                    style={{
                        borderRadius: 10,
                        height: 45,
                        width: '60%',
                        marginHorizontal: 14,
                        marginTop: 30,
                        color: 'black',
                        paddingLeft: 10,
                        fontSize: 18,
                        textAlign: 'left',
                        backgroundColor: '#E9ECEF',
                    }}
                    value={deadline}
                    onChangeText={setDeadline}
                    autoCapitalize='none'
                    placeholder='Enter deadline'
                    placeholderTextColor={'black'}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    fontSize: 20,
                    marginTop: 35,
                    marginHorizontal: 20
                }}>What Task?</Text>
                <TextInput
                    style={{
                        borderRadius: 10,
                        height: 45,
                        width: '60%',
                        marginHorizontal: -5,
                        marginTop: 27,
                        color: 'black',
                        paddingLeft: 10,
                        fontSize: 18,
                        textAlign: 'left',
                        backgroundColor: '#E9ECEF',
                    }}
                    autoCapitalize='none'
                    placeholder='Enter task description'
                    placeholderTextColor={'black'}
                    value={taskDescription}
                    onChangeText={setTaskDescription}
                />
            </View>
            <View>
                <Text style={{
                    fontSize: 20,
                    marginTop: 30,
                    marginHorizontal: 20
                }}>Priority:</Text>
                <View style={{ top: 20, left: 20 }}>
                    <SelectDropdown
                        data={emojisWithIcons}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                            setPriority(selectedItem.title); // Update priority state
                        }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={styles.dropdownButtonStyle}>
                                    {selectedItem && (
                                        <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
                                    )}
                                    <Text style={styles.dropdownButtonTxtStyle}>
                                        {(selectedItem && selectedItem.title) || 'Select Priority'}
                                    </Text>
                                    <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
                                </View>
                            );
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                    <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
                                    <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                                </View>
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.dropdownMenuStyle}
                    />
                </View>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
            }}>
                <TouchableOpacity
                    onPress={handleAssign}
                    style={{
                        height: 45,
                        width: '30%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#2A4D50',
                        borderRadius: 15,
                        marginTop: 15
                    }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Assign</Text>
                </TouchableOpacity>
            </View>

            <Modal
                isVisible={isModalVisible}
                onBackdropPress={() => setIsModalVisible(false)}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                backdropOpacity={0.4}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>Task assigned successfully</Text>
                    <TouchableOpacity onPress={handleOk}>
                        <Text style={styles.modalButton}>OK</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <FlatList
                data={submittedData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={{ marginTop: 20 }}
            />
        </SafeAreaView>
    );
};

export default ManageChores;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        height: 105,
        marginTop: -69,
        backgroundColor: COLORS.primary
    },
    backIcon: {
        marginLeft: 10,
        marginTop: 60
    },
    titleTextContainer: {
        marginHorizontal: 140,
        width: 200
    },
    titleText: (color, top) => ({
        fontWeight: "400",
        fontSize: SIZES.xLarge - 1,
        marginTop: top,
        color: color,
        marginLeft: -52,
    }),
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    modalText: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 20,
    },
    modalButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2A4D50',
    },
    dropdownButtonStyle: {
        width: 240,
        height: 50,
        marginTop: -50,
        marginHorizontal: 115,
        backgroundColor: '#E9ECEF',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    submittedDataContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#E9ECEF',
        borderRadius: 10,
        alignItems: 'center',
    },
    submittedDataTextOne: {
        fontSize: 18,
        color: '#151E26',
        marginVertical: 2,
    },
    submittedDataTextTwo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#151E26',
        marginVertical: 2,
    },
});

