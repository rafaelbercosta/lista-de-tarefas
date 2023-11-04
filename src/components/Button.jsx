import React from 'react';

function Button({
  children, type = 'button', onClick,
  disabled = false,
}) {
  return (

    <button className='btn btn-primary btnMargin'
      onClick={ onClick }
      type={ type }
      disabled={ disabled }
    >
      {children}
    </button>
  );
}

export default Button;