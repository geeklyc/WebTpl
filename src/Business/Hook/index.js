/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-11 19:18:03
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-11 20:04:44
 */
import React, { useState, useEffect } from 'react';

function Example(props) {
  const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  // const [age, setAge] = useState(42);
  // const [fruit, setFruit] = useState('banana');
  // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    // ChatAPI.subscribeToFriendStatus(props.friedn.id, handleStatusChange);
  })
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;