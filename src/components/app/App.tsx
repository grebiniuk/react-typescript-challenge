import React, {useEffect, useState} from 'react';

import {fetchData} from '../../utils/fetch-data';
import {getAllLanguages, getAllStatuses, getFilteredData, toggleElem} from '../../utils/helpers';
import {useStyles} from './App.styles';
import Card from '../card/Card';
import Filter from '../filter/Filter';

export type CardItem = {
  id: number;
  name: string;
  cover: string;
  languages: string[];
  status: 'ready' | 'error' | 'transcribing';
  createdAt: string;
  updatedAt: string;
}

export type FilterObjT = { statuses: string[], languages: string[] }

type CardArray = CardItem[];

function App() {
  const [data, setData] = useState<CardArray>([]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [filter, setFilter] = useState<FilterObjT>({statuses: [], languages: []});
  const [filteredData, setFilteredData] = useState<CardArray>([]);
  useEffect(() => {
    fetchData().then(response => setData(response?.data?.media));

  }, []);

  useEffect(() => {
    setStatuses(getAllStatuses(data));
    setLanguages(getAllLanguages(data));
  }, [data]);

  useEffect(() => {
    setFilter({statuses: statuses, languages: languages});
  }, [statuses, languages]);

  useEffect(() => {
    setFilteredData(getFilteredData(data, filter));
  }, [data, filter]);

  const updateFilter = (type: string, value: string) => {
    if (type === 'statuses') {
      setFilter((prevState) => ({...prevState, ...{statuses: (toggleElem(prevState.statuses, value))}}));
    } else if (type === 'languages') {
      setFilter((prevState) => ({...prevState, ...{languages: (toggleElem(prevState.languages, value))}}));
    }
  }

  const styles = useStyles();

  return (
      <div className={styles.app}>
        <div className="container g-4 mt-4">
          {data.length ? (<Filter statuses={statuses} languages={languages} filters={filter}
                                  clickHandler={updateFilter}/>
          ) : ''}
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {filteredData.length ? filteredData.map((el: CardItem) => <Card key={el.id}
                                                                            children={el}/>) : 'Nothing found, sorry'}
          </div>
        </div>
      </div>
  );
}

export default App;
