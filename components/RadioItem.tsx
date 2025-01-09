const RadioItem = ({ name, isActive, update } : {name: string, isActive: boolean, update: (name: string) => void}) => {
  return (
    <button 
      onClick={() => update(name)}
      className={isActive ? "flex1 button-light-blue py-1 round-soft" : "flex1 button-outline bg-white py-1"}
    >{name}</button>
  );
};

export default RadioItem;
