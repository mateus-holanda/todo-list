import { Text, TouchableOpacity, View } from 'react-native';

import UncheckedIcon from '../../assets/unchecked.svg';
import CheckedIcon from '../../assets/checked.svg';
import TrashBinIcon from '../../assets/trash-bin.svg';

import { styles } from './styles';

interface TaskCardProps {
  description: string;
  done: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

export function TaskCard({ description, done, onRemove, onToggle }: TaskCardProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkIcon}
        onPress={onToggle}
      >
        { done ? <CheckedIcon /> : <UncheckedIcon /> }
      </TouchableOpacity>

      <Text style={done ? styles.taskDescriptionDone : styles.taskDescription}>
        {description}
      </Text>

      <TouchableOpacity
        style={styles.removeIcon}
        onPress={onRemove}
      >
        <TrashBinIcon />
      </TouchableOpacity>
    </View>
  );
}