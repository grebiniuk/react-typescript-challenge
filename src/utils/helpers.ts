import {CardItem, FilterObjT} from '../components/app/App';

type CardArrayT = CardItem[];

export const getAllStatuses = (serverData: CardArrayT) => {
  return Array.from(new Set(serverData.map(el => el.status)));
}

export const getAllLanguages = (serverData: CardArrayT) => {
  return Array.from(new Set(serverData.map(el => el.languages).flat()));
}

export const getFilteredData = (data: CardArrayT, filter: FilterObjT) => {
  return data
      .filter((el: CardItem) =>
          filter.languages.length ? el.languages.some(r => filter.languages.includes(r)) : ''
      )
      .filter((el: CardItem) =>
          filter.statuses.length ? filter.statuses.includes(el.status) : ''
      );
}

export const toggleElem = (array: string[], elem: string) => {
  const index = array.indexOf(elem);
  if (index !== -1) {
    return array.filter((el: string, i: number) => i !== index);
  }
  return [...array, elem];
}
