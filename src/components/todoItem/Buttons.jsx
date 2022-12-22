import { Button } from './style';

const Buttons = ({ id, name, type, onDelete }) => {
  return (
    <Button onClick={() => onDelete(id)} type={type}>
      {name}
    </Button>
  );
};

export default Buttons;
