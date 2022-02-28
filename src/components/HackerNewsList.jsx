import React, { useEffect, useState } from 'react';
import HackerFetchApi from '../js/fetchApi';
import HackerNav from './HackerNav';
import HackerNews from './HackerNewsElement';
import { FaSpinner } from 'react-icons/fa';

export default function HackerNewsList() {
  const _api = new HackerFetchApi();
  const [newsList, setNewsList] = useState(null);
  const [query, setQuery] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    // console.log('api: ', _api);
    setNewsList(null);
    _api?.getMockData().then((data) => setNewsList(data));
    // _api?.searchByDate().then((data) => setNewsList(data));
  }, []);

  useEffect(() => {
    console.log('newsList: ', newsList);
  }, [newsList]);

  useEffect(() => {
    // fetch data...

    return () => {
      // todo
    };
  }, [query, page]);

  return (
    <div>
      <HackerNav />
      {!newsList && <FaSpinner />}
      {newsList &&
        newsList?.hits?.map((news, index) => (
          <>
            <HackerNews key={news.objectID} news={news} />
            <br />
          </>
        ))}
    </div>
  );
}
