import React, { useState, useEffect, useRef } from 'react';
import qs from 'qs';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Categories from '../components/Categories';
import Sort, { listArr } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
// import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import { fetchItems } from '../redux/slices/itemSlice';

const Home = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isSearch = useRef(false);
  // const isMounted = useRef(false);

  const { items, status } = useSelector((state) => state.item);
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);

  const { searchValue } = React.useContext(SearchContext);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getItems = async () => {
    const sortBy = sort.sortProp.replace('-', '');
    const order = sort.sortProp.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchItems({
        sortBy,
        order,
        category,
        search,
        currentPage,
      }),
    );
  };

  // если изменили параметры и был первый рендер
  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProp: sort.sortProp,
  //       categoryId,
  //       currentPage,
  //     });

  //     navigate(`?${queryString}`);
  //   }
  //   isMounted.current = true;
  // }, [categoryId, sort.sortProp, currentPage]);

  // eсли был первый рендер , то проверяем  URL-парамерты и сохраняем в Redux
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));

  //     const sort = listArr.find((obj) => obj.sortProp === params.sortProp);
  //     dispatch(
  //       setFilters({
  //         ...params,
  //         sort,
  //       }),
  //     );
  //     isSearch.current = true;
  //   }
  // }, []);

  // если был первый рендер, то запрашиваем товары
  useEffect(() => {
    window.scrollTo(0, 0);

    // if (!isSearch.current) {
    getItems();
    // }
    // isSearch.current = false;
  }, [categoryId, sort.sortProp, searchValue, currentPage]);

  const pizzas = items.map((el) => (
    <React.Fragment key={el.id}>
      <PizzaBlock {...el} />
    </React.Fragment>
  ));

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      {' '}
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2> Произошла ошибка 😕 </h2>
          <p>К сожалению, не удалось получить товары. Попробуйте повторить попытку позже</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
