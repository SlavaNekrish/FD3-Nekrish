import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <p>{item.description}</p>
      <h4>{item.price} Br</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullItem;
