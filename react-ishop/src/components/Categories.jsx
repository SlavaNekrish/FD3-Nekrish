function Categories({ value, onChangeCategory }) {
  const catArr = [
    { name: 'Все', code: 0 },
    { name: 'Мясные', code: 1 },
    { name: 'Вегетарианские', code: 2 },
    { name: 'Гриль', code: 3 },
    { name: 'Острые', code: 4 },
    { name: 'Закрытые', code: 5 },
  ];

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
}

export default Categories;
