import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
    async function fetchData() {
      try {
        const response = await axios('https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b');
        setData(response?.data?.media);
      } catch (error) {
        throw new Error(error);
      }
    }

    fetchData();
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
