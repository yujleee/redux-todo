import { Label, Input } from './style';

const Inputs = ({ label, id, value, onChange, ref }) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input
        className={id === 'contents' ? 'contents' : ''}
        type="text"
        placeholder={label}
        id={id}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    </>
  );
};

export default Inputs;
