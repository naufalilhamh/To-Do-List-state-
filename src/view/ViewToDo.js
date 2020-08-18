import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import { Divider } from 'react-native-paper';
import TodoCard from '../components/TodoCard';
import InlineInputAndButton from '../components/InlineInputAndButton';

const TodoAppScreen = () => {

    const initialTodo = [{ value: "Contoh List Kamu Ini" }];
    const [todos, setTodos] = useState(initialTodo);
    const [text, setText] = useState("");

    const handleChangeText = (text) => {
        setText(text);
    }

    const handleAddButton = (text) => {

        setTodos([...todos, { value: text }]);
        setText("");

    }

    const handleClickEdit = ({ index: i, text }) => {

        setTodos(prevTodo => prevTodo.map((todo, index) => {

            if (index === i) {
                todo.value = text;
                return todo;
            }

            return todo;
        }));
        
    }

    const handleDeleteTodo = (i) => {

        setTodos(prevTodo => {

            prevTodo.splice(i, 1);
            const newTodo = [...prevTodo];
            return newTodo;
        });

    }


    return (
        <>
            <Header title="To Di List Saya" />
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Selamat Datang</Text>
                <Text style={styles.subtitle}>Mau Ngapain Aja Kamu Hari Ini</Text>
                <InlineInputAndButton
                    name='Add'
                    text={text}
                    handleChangeText={handleChangeText}
                    handleAddButton={handleAddButton}
                    placeholder='Tuliskan List Kami Disini'
                    mode='contained'
                />
                <Text style={[styles.subtitle, { fontSize: 22, paddingTop: 16, paddingBottom: 8 }]}> List Kamu</Text>
                <Divider style={styles.divider} />
                {
                    todos.map((todo, index) => <TodoCard
                        key={index}
                        index={index}
                        data={todo}
                        handleClickEdit={handleClickEdit}
                        handleDeleteTodo={handleDeleteTodo}
                        />)
                }
            </ScrollView>
        </>
    );
};

export default TodoAppScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'purple',
    },
    subtitle: {
        fontSize: 20,
        color: 'purple',
        marginBottom: 16
    },
    divider: {
        borderBottomColor: '#aaa',
        borderBottomWidth: 1
    }
})