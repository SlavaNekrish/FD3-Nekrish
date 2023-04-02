import { useState } from 'react';

function Categories() {
  const [activeindex, setActiveIndex] = useState(0);

  const catArr = [
    { name: 'Все', code: 0 },
    { name: 'Мясные', code: 1 },
    { name: 'Вегетарианские', code: 2 },
    { name: 'Гриль', code: 3 },
    { name: 'Острые', code: 4 },
    { name: 'Закрытые', code: 5 },
  ];

  const categories = catArr.map((el) => (
    <li
      onClick={() => setActiveIndex(el.code)}
      className={activeindex === el.code ? 'active' : ''}
      key={el.code}>
      {el.name}
    </li>
  ));

  return (
    <div className="categories">
      <ul>{categories}</ul>
    </div>
  );
}

export default Categories;
