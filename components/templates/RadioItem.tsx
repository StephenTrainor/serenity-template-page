// Each RadioItem displays itself based on props passed from the parent component Radio. An update function is passed
// down as well to allow the parent component to properly update the rest of the components to update accordingly

// NOTE: This component is not used in the PDF generation, it is only used for displaying a preview of the template in
// the pages/templates/[id].tsx page
const RadioItem = ({
  name, isActive, update
} : {
  name: string, isActive: boolean, update: (name: string) => void
}) => {
  return (
    // the button is blue if the isActive boolean indicates that it was selected and is white otherwise
    <button 
      onClick={() => update(name)}
      className={isActive ? "flex1 button-light-blue py-1 round-soft" : "flex1 button-outline bg-white py-1"}
    >{name}</button>
  );
};

export default RadioItem;
