function Input({ placeholder, type = 'text', required = false, id,
  value, onChange, name = '', checked }) {
  return (
    <div>

      <input
        type={ type }
        required={ required }
        placeholder={ placeholder }
        id={ id }
        value={ value }
        onChange={ onChange }
        name={ name }
        checked={ checked }
      />

    </div>
  );
}

export default Input;