import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Typography, Button } from 'antd';

import { deleteTodo, selectTodo } from '../../store/todoSlice';
import TodoItem from '../TodoItem/TodoItem';
import EditForm from '../EditForm/EditForm';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

const TodoList = ({ showAddModal }) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    // sync data from localStorage
    // const savedTodos = localStorage.getItem('todos');
    // if (savedTodos) {
    //   dispatch(getLocalStorageTodos(JSON.parse(savedTodos)));
    // }
    // console.log(todos);
  }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  let sortedData = [...todos].sort(
    (a, b) => a.date.timestamp - b.date.timestamp
  );

  const handleDeleteTodo = (payload) => {
    dispatch(deleteTodo(payload));
  };
  const handleSelectTodo = (payload) => {
    dispatch(selectTodo(payload));
  };

  const showModalEdit = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <>
      <List itemLayout="horizontal">
        {sortedData.length !== 0 ? (
          sortedData.map((todo, idx) => (
            <div key={todo.id}>
              <TodoItem
                todo={todo}
                handleDeleteTodo={handleDeleteTodo}
                handleSelectTodo={handleSelectTodo}
                showModalEdit={showModalEdit}
                idx={idx}
              />
              <EditForm
                id={todo.id}
                isModalVisible={isModalVisible}
                handleCancel={handleCancel}
                // handleEditTodo={handleEditTodo}
              />
            </div>
          ))
        ) : (
          <div className="empty-list">No data to show...</div>
        )}
      </List>
      <Button className="add-icon" onClick={showAddModal}>
        <PlusOutlined style={{ fontSize: '2rem' }} />
      </Button>
    </>
  );
};

export default TodoList;
