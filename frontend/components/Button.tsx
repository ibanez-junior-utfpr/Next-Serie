import React from 'react';

interface Props {
  text: string;
}

const Button: React.FC<Props> = Props => {
  return (
    <div>
      <button className="text-black bg-red-600 px-5 py-2.5 text-center font-medium rounded-lg w-full">
        {Props.text}
      </button>
    </div>
  );
};

export default Button;
