import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Radio, Typography } from 'antd';

import { deleteTodo, selectTodo, filterTodo } from '../../store/todoSlice';
import TodoItem from '../TodoItem/TodoItem';
const { Group, Button } = Radio;
const { Title } = Typography;
const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const [value, setValue] = useState('date');

  const handleFilter = () => dispatch(filterTodo({ filterType: value }));

  const handleDeleteTodo = (payload) => dispatch(deleteTodo(payload));
  const handleSelectTodo = (payload) => dispatch(selectTodo(payload));
  useEffect(() => {
    handleFilter();
  }, [value]);
  return (
    <>
      <Title level={5}>Sort by</Title>
      <Group
        className="filter-list"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        buttonStyle="solid"
      >
        <Button value="date">Date</Button>
        <Button value="priority">Priority</Button>
        <Button value="status">Status</Button>
      </Group>
      {todos.length > 0 ? (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={todos}
          renderItem={(todo) => (
            <List.Item>
              <TodoItem
                key={todo.id}
                todo={todo}
                handleDeleteTodo={handleDeleteTodo}
                handleSelectTodo={handleSelectTodo}
              />
            </List.Item>
          )}
        />
      ) : (
        <div className="empty-list">No data to show...</div>
      )}
    </>
  );
};

export default TodoList;
