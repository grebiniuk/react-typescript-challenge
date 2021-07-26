import {FilterObjT} from '../app/App';
import ButtonGroup from '../button-group/ButtonGroup';
import React from 'react';

type FilterPropsT = {
  statuses: string[],
  languages: string[],
  filters: FilterObjT,
  clickHandler: (type: string, value: string) => void
};

function Filter({statuses, languages, filters, clickHandler}: FilterPropsT) {

  return (
      <div className="row g-4">
        <ButtonGroup elements={statuses} label={'statuses'} filters={filters.statuses}
                     clickHandler={clickHandler}/>
        <ButtonGroup elements={languages} label={'languages'} filters={filters.languages}
                     clickHandler={clickHandler}/>
      </div>
  )
}

export default Filter;
