import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CapaFilme from '../public/capaFilmeTeste.jpg';

interface Props {
  href: string;
  nome: string;
  img?: string;
}

const CardFilm: React.FC<Props> = function CardFilm(Props) {
  return (
    <div className="w-fit m-3">
      <Link href={Props.href}>
        <Image className='rounded-lg'
          alt={`Capa do filme ${Props.nome}`}
          src={CapaFilme}
          width={130}
        />
      </Link>
    </div>
  );
};

export default CardFilm;
