import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullItem = () => {
  const [item, setItem] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get('https://64295fee5a40b82da4d189a9.mockapi.io/items/' + id);
        setItem(data);
      } catch (error) {
        alert('Ошибка при получении товара');
        navigate('/');
      }
    }
    fetchItem();
  }, []);

  if (!item) {
    return 'Загрузка...';
  }

  return (
    <div className="container">
      <img src={item.imageUrl} />
      <h2>{item.title}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam accusamus natus debitis
        aliquam in sint distinctio harum ut temporibus beatae ipsum recusandae qui, aliquid officiis
        quam voluptate voluptates minima ducimus.
      </p>
      <h4>{item.price} ₽</h4>
    </div>
  );
};

export default FullItem;
