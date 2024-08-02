import React, { useState } from 'react';
import { Badge, Calendar, Modal, Form, Input, Button, Select } from 'antd';
import { ChromePicker } from 'react-color';
import moment from 'moment';

// Define priority options
const priorityOptions = [
  { label: 'High', value: 'high' },
  { label: 'Medium', value: 'medium' },
  { label: 'Low', value: 'low' },
];

const CalendarTodo = () => {
  const [todos, setTodos] = useState({});
  const [visible, setVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentDate, setCurrentDate] = useState(null);
  const [form] = Form.useForm();
  const [color, setColor] = useState('#ffffff'); // Default color

  // Get list of TODOs for a specific date
  const getListData = (value) => {
    const dateKey = value.format('YYYY-MM-DD');
    return todos[dateKey] || [];
  };

  // Get monthly data (example: backlog number)
  const getMonthData = (value) => {
    if (value.month() === 8) { // Example: September
      return 1394;
    }
    return null;
  };

  // Handle form submission
  const handleFormSubmit = (values) => {
    if (!currentDate) return;

    const dateKey = currentDate.format('YYYY-MM-DD');
    const newTodo = {
      type: values.priority,
      content: values.content,
      date: values.date ? values.date.format('YYYY-MM-DD') : dateKey,
      color: color,
      tags: values.tags ? values.tags.split(',').map(tag => tag.trim()) : [],
    };

    if (editMode) {
      const updatedTodos = [...(todos[dateKey] || [])];
      updatedTodos[editMode.index] = newTodo;
      setTodos(prevTodos => ({
        ...prevTodos,
        [dateKey]: updatedTodos,
      }));
    } else {
      setTodos(prevTodos => ({
        ...prevTodos,
        [dateKey]: [...(prevTodos[dateKey] || []), newTodo],
      }));
    }

    setVisible(false);
    form.resetFields();
    setColor('#ffffff'); // Reset color picker to default
  };

  // Handle deleting a TODO
  const handleDeleteTodo = (index) => {
    if (!currentDate) return;

    const dateKey = currentDate.format('YYYY-MM-DD');
    const updatedTodos = [...(todos[dateKey] || [])];
    updatedTodos.splice(index, 1);

    setTodos(prevTodos => ({
      ...prevTodos,
      [dateKey]: updatedTodos,
    }));
  };

  // Render the month cell
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month text-center">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  // Render the date cell
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events list-none p-0">
        {listData.map((item, index) => (
          <li key={index} className="mb-2">
            <Badge
              status="default"
              style={{ backgroundColor: item.color }}
              text={`${item.content} ${item.tags.join(', ')}`}
            />
            <div className="flex gap-2 mt-2 ">
              <Button className='w-4 h-5' 
              onClick={() => {
                form.setFieldsValue({
                  content: item.content,
                  date: moment(item.date),
                  priority: item.type,
                  tags: item.tags.join(', '),
                });
                setColor(item.color);
                setCurrentDate(value);
                setEditMode({ index });
                setVisible(true);
              }}>Edit</Button>
              <Button className='w-12 h-5' danger onClick={() => handleDeleteTodo(index)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  // Render cells based on their type (date or month)
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  // Show modal for adding or editing TODO
  const showModal = (date) => {
    setCurrentDate(date);
    form.resetFields();
    setColor('#ffffff'); // Default color
    setVisible(true);
    setEditMode(false);
  };

  return (
    <>
      <div className="container p-4 sm:p-2">
        <Calendar cellRender={cellRender} onSelect={showModal} />
        <Modal
          title={editMode ? "Edit Todo" : "Add Todo"}
          visible={visible}
          onCancel={() => {
            setVisible(false);
            form.resetFields();
            setEditMode(false);
          }}
          footer={[
            <Button key="back" onClick={() => {
              setVisible(false);
              form.resetFields();
              setEditMode(false);
            }}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={() => form.submit()}>
              {editMode ? "Update" : "Add"}
            </Button>,
          ]}
          className="max-w-md mx-auto"
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleFormSubmit}
            className="space-y-4"
          >
            <Form.Item
              name="content"
              label="Todo Content"
              rules={[{ required: true, message: 'Please enter your TODO content!' }]}
            >
              <Input.TextArea placeholder="Enter TODO description" rows={4} />
            </Form.Item>
      
            <Form.Item
              name="priority"
              label="Priority"
              rules={[{ required: true, message: 'Please select priority!' }]}
            >
              <Select placeholder="Select priority">
                {priorityOptions.map(option => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="tags"
              label="Tags"
            >
              <Input placeholder="Enter tags separated by commas" />
            </Form.Item>
            <Form.Item
              name="color"
              label="Color"
            >
              <div className="w-full">
                <ChromePicker
                  color={color}
                  onChangeComplete={(newColor) => setColor(newColor.hex)}
                />
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default CalendarTodo;
