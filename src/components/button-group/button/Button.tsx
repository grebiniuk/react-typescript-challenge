import React from 'react';

type ButtonPropsT = {
  name: string,
  btnId: number,
  isChecked: boolean,
  type: string,
  clickHandler: (type: string, value: string) => void
};

function Button({name, btnId, isChecked, type, clickHandler}: ButtonPropsT) {
  return (
      <>
        <input type="checkbox"
               className="btn-check"
               id={name + btnId}
               autoComplete="off"
               checked={isChecked}
               onChange={() => clickHandler(type, name)}
        />
        <label className="btn btn-outline-primary" htmlFor={name + btnId}>{name}</label>
      </>

  )
}

export default Button;
