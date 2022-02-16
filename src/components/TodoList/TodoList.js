import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Row, Col, Typography, Button } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
  deleteTodo,
  selectTodo,
  dragDrop,
  getLocalStorageTodos,
} from '../../store/todoSlice';
import TodoItem from '../TodoItem/TodoItem';
import EditForm from '../EditForm/EditForm';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;
const TodoList = ({ showAddModal }) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    // sync data from localStorage
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      dispatch(getLocalStorageTodos(JSON.parse(savedTodos)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDeleteTodo = (payload) => {
    dispatch(deleteTodo(payload));
  };
  const handleSelectTodo = (payload) => {
    dispatch(selectTodo(payload));
  };

  const showModalEdit = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const handleDragEnd = ({ destination, source }) => {
    // console.log('from', source);
    // console.log('to', destination);
    if (!destination) {
      // console.log('not dropped in droppable area');
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      // console.log('dropped in same position');
      return;
    }
    const itemCopy = todos[source.droppableId].find(
      (el, dx) => dx === source.index
    );
    dispatch(dragDrop({ destination, source, itemCopy }));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Row gutter={{ xs: 0, md: 24 }} className="todo-list-row">
        {_.map(todos, (data, key) => (
          <Col
            xs={24}
            md={8}
            key={key}
            className={`column column-${key.toLowerCase()}`}
          >
            <Title level={2}>{key}</Title>
            <Droppable droppableId={key}>
              {(provided) => (
                <div
                  className="droppable-area "
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <List itemLayout="horizontal">
                    {data.length !== 0 ? (
                      data.map((todo, idx) => {
                        return (
                          <Draggable
                            key={todo.id}
                            index={idx}
                            draggableId={todo.id.toString()}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  className={`darggable-list-item ${
                                    snapshot.isDragging && 'is-dragging'
                                  }`}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <TodoItem
                                    todo={todo}
                                    idx={idx}
                                    handleDeleteTodo={handleDeleteTodo}
                                    handleSelectTodo={handleSelectTodo}
                                    showModalEdit={showModalEdit}
                                    location={key}
                                  />
                                  <EditForm
                                    isModalVisible={isModalVisible}
                                    handleCancel={handleCancel}
                                    // handleEditTodo={handleEditTodo}
                                    location={key}
                                  />
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })
                    ) : (
                      <div className="empty-list">No data to show...</div>
                    )}
                  </List>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Col>
        ))}
        <Button className="add-icon" onClick={showAddModal}>
          <PlusOutlined style={{ fontSize: '2rem' }} />
        </Button>
      </Row>
    </DragDropContext>
  );
};

export default TodoList;
