import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, Typography } from 'antd';

import { deleteTodo, selectTodo, filterTodo } from '../../store/todoSlice';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const { Group, Button } = Radio;
const { Title } = Typography;

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const [value, setValue] = useState('date');

  const handleDeleteTodo = (payload) => dispatch(deleteTodo(payload));
  const handleSelectTodo = (payload) => dispatch(selectTodo(payload));
  const handleFilter = () => dispatch(filterTodo({ filterType: value }));

  useEffect(() => {
    handleFilter();
  }, [value, todos]);

  return (
    <>
      <div className="filter-row">
        <Title level={5} className="filter-label">
          Sort by
        </Title>
        <Group
          className="filter-list"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          buttonStyle="solid"
        >
          <Button value="date">Date</Button>
          <Button value="priority">Priority</Button>
          <Button value="status">Status</Button>
        </Group>
      </div>
      {todos.length > 0 ? (
        <div className="todo-wrap">
          {todos.map((todo, idx) => (
            <TodoItem
              idx={idx}
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleSelectTodo={handleSelectTodo}
            />
          ))}
        </div>
      ) : (
        // <List
        //   dataSource={todos}
        //   renderItem={(todo) => (
        //     <List.Item ref={cardRef} style={{ gridRowEnd: `span ${spans}` }}>
        //
        //     </List.Item>
        //   )}
        // />
        <div className="empty-list">No data to show...</div>
      )}
    </>
  );
};

export default TodoList;
