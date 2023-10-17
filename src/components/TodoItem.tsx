type Props = {
    text: string;
  };
   
  const TodoItem = (props: Props) => {
    return <li>{props.text}</li>;
  };
   
  export default TodoItem;