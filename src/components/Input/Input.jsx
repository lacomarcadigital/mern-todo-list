import "./Input.scss";

const Input = ({ type, placeholder, name, id, value }) => {
  
  return (
    <input
      className='input'
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default Input;
