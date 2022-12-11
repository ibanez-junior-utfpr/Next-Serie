import React from 'react';
import Image from 'next/image';
import LogoNs from '../public/logoNS.png';

interface Props {
  width?: number;
}

const Logo: React.FC<Props> = function Logo(Props) {
  return (
    <div className="w-fit">
      <Image
        src={LogoNs}
        alt={'Logo Next Series'}
        width={Props.width ? Props.width : '120'}
      />
    </div>
  );
};

export default Logo;
