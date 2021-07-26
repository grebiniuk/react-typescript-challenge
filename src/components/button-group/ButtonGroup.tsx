import Button from './button/Button';

type ButtonGroupPropsT = {
  elements: string[],
  label: string,
  filters: string[],
  clickHandler: (type: string, value: string) => void
};

function ButtonGroup({elements, label, filters, clickHandler}: ButtonGroupPropsT) {
  return (
      <div className="col-12 col-md-6 mb-4">
        <span>{label}</span>
        <div className="btn-group ms-2" role="group" aria-label="Checkbox toggle button group">
          {elements.map((elem, id) => (
              <Button name={elem} btnId={id} key={elem + id} isChecked={filters.includes(elem)}
                      type={label} clickHandler={clickHandler}/>
          ))}
        </div>
      </div>
  )
}

export default ButtonGroup;
