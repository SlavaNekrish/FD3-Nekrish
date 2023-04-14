import React from 'react';
import ToolTipStyled from './ToolTipStyled';

export const catArr = [
  { name: 'Все', TtFraze: 'Все категории общим списком', code: 0 },
  {
    name: 'Готовые сеты',
    TtFraze: 'Композиции, которые не один раз заказывались, и радовали наших дорогих клиентов',
    code: 1,
  },
  {
    name: 'Коробки шаров',
    TtFraze: 'Коробки, до верху наполненные шарами. Вызовут взрыв эмоций у виновника торжества',
    code: 2,
  },
  {
    name: 'Цифры и шары',
    TtFraze:
      'К памятной дате подойдёт именно этот вариант, который подчеркнёт важность даты и момента',
    code: 3,
  },
  {
    name: 'Арки из шаров',
    TtFraze: 'Оформление торжественного открытия вашего заведения: магазина, ресторана или кафе',
    code: 4,
  },
];

const Categories = React.memo(({ value, onChangeCategory }) => {
  const categories = catArr.map((category) => (
    <ToolTipStyled title={category.TtFraze} enterDelay={2000} leaveDelay={0} key={category.code}>
      <li
        onClick={() => onChangeCategory(category.code)}
        className={value === category.code ? 'active' : ''}>
        {category.name}
      </li>
    </ToolTipStyled>
  ));

  return (
    <div className="categories">
      <ul>{categories}</ul>
    </div>
  );
});

export default Categories;
