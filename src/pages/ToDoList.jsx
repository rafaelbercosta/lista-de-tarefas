import React, { useContext } from 'react';
import context from '../context/Context';
import Banner from '../components/Banner';
import ToDo from '../components/ToDo';
import hello from '../images/hello.png'
import pencil from '../images/pencil.png'

function ToDolist() {
  const { user } = useContext(context);
  return (
    <div>
      <h1>
        Boas vindas,
        {user}
      </h1>
      <Banner image={hello} />
        <ToDo/>
        <div className='pencil'>
      <Banner image={pencil} />
      </div>
    </div>
  );
}

export default ToDolist;