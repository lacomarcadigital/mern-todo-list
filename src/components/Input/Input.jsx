import "./Input.scss";

const Input = ({ type, placeholder, name, id }) => {
  
  return (
    <input
      className='input'
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  )
}

export default Input;
