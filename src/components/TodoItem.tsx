import styles from './TodoItem.module.scss'
type Props = {
    text: string;
  };
   
  const TodoItem = (props: Props) => {
    return <li className={styles.item}>{props.text}</li>;
  };
   
  export default TodoItem;