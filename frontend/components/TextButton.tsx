import Link from 'next/link';
import React from 'react';

interface Props {
  text: string;
  style?: string;
  href: string;
}

const Button: React.FC<Props> = function Button(Props) {
  return (
    <Link className={`${Props.style ? Props.style : "text-lg"}`} href={Props.href}>
      {Props.text}
    </Link>
  );
};

export default Button;
