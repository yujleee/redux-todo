import { Button } from './style';

const Buttons = ({ name, type }) => {
  return <Button type={type}>{name}</Button>;
};

export default Buttons;
