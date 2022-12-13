import React from 'react';

interface Props {
  tipo: string;
  placeHolder: string;
}

const InputUser: React.FC<Props> = Props => {
  return (
    <div>
      <input
        type={Props.tipo}
        className="bg-gray-50 border-gray-50 rounded-lg block w-full p-1 text-center text-xl"
        placeholder={Props.placeHolder}
      />
    </div>
  );
};

export default InputUser;
