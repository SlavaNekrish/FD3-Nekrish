import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = ({ isLoading, items }) => {
  return (
    <>
      {' '}
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((el) => (
              <React.Fragment key={el.id}>
                <PizzaBlock {...el} />
              </React.Fragment>
            ))}
      </div>
    </>
  );
};

export default Home;
