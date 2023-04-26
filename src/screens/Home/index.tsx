import { useState } from 'react';
import { Alert, FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Logo from '../../assets/logo.svg';
import PlusCircleIcon from '../../assets/plus-circle.svg';
import ClipboardIcon from '../../assets/clipboard.svg';

import { TaskCard } from '../../components/TaskCard';

import theme from '../../theme';

import { styles } from './styles';

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksDone, setTasksDone] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleTaskAdd() {
    if (newTask.trim().length === 0) {
      return Alert.alert('Nova tarefa', 'Por favor, preencha o campo com uma tarefa.');
    }

    if (tasks.includes(newTask)) {
      return Alert.alert('Nova tarefa', 'Essa tarefa já existe.');
    }

    setTasks(prevState => [newTask.trim(), ...prevState]);
    Keyboard.dismiss()
    setNewTask('');
  }

  function handleTaskToggle(taskToggled: string) {
    if (tasksDone.includes(taskToggled)) {
      setTasksDone(prevState => prevState.filter(tasksDone => tasksDone !== taskToggled));
    } else {
      setTasksDone(prevState => [...prevState, taskToggled]);
    }
  }

  function handleTaskRemove(taskRemoved: string) {
    return Alert.alert("Remover tarefa", `Tem certeza de que deseja remover essa tarefa?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks(prevState => prevState.filter(tasks => tasks !== taskRemoved));
          setTasksDone(prevState => prevState.filter(tasksDone => tasksDone !== taskRemoved));
        }
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.COLORS.GRAY_300}
          onChangeText={setNewTask}
          value={newTask}
          returnKeyType="done"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleTaskAdd}
        >
          <PlusCircleIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.containerList}>
        <View style={styles.taskListStatus}>
          <View style={styles.taskStatusContainer}>
            <Text style={styles.tasksCreatedText}>
              Criadas
            </Text>
            <View style={{ width: 24, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333333' }}>
              <Text style={styles.taskCount}>{tasks.length}</Text>
            </View>
          </View>
          
          <View style={styles.taskStatusContainer}>
            <Text style={styles.tasksDoneText}>
              Concluídas
            </Text>
            <View style={{ width: 24, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333333' }}>
              <Text style={styles.taskCount}>{tasksDone.length}</Text>
            </View>
          </View>
        </View>
        
        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TaskCard
              key={item}
              description={item}
              done={tasksDone.includes(item) ? true : false}
              onToggle={() => handleTaskToggle(item)}
              onRemove={() => handleTaskRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyContainer}>
              <ClipboardIcon />
              <Text style={styles.listEmptyTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}