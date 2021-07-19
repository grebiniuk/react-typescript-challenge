import React, {useEffect, useState} from 'react';

import {fetchData} from '../../utils/fetch-data';
import {useStyles} from './App.styles';
import Card from '../card/Card';

type CartItem = {
  id: number;
  name: string;
  cover: string;
  languages: string[];
  status: 'ready' | 'error' | 'transcribing';
  createdAt: string;
  updatedAt: string;
}

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData().then(response => setData(response?.data?.media));
  }, []);

  const styles = useStyles();

  return (
      <div className={styles.app}>
        <div className="container g-4">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {data.length ? data.map((el: CartItem) => <Card key={el.id} children={el}/>) : ''}
          </div>
        </div>
      </div>
  );
}

export default App;
