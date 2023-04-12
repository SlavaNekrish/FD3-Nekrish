import React from 'react';

export const catArr = [
  { name: 'Все', code: 0 },
  { name: 'Готовые сеты', code: 1 },
  { name: 'Коробки шаров', code: 2 },
  { name: 'Цифры и шары', code: 3 },
  { name: 'Фольгированные', code: 4 },
];

const Categories = React.memo(({ value, onChangeCategory }) => {
  const categories = catArr.map((category) => (
    <li
      onClick={() => onChangeCategory(category.code)}
      className={value === category.code ? 'active' : ''}
      key={category.code}>
      {category.name}
    </li>
  ));

  return (
    <div className="categories">
      <ul>{categories}</ul>
    </div>
  );
});

export default Categories;
