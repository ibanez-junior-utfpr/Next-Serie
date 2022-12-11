import Link from 'next/link';
import React from 'react';

interface Props {
  text: string;
  href: string;
}

const Button: React.FC<Props> = function Button(Props) {
  return <Link href={Props.href}>{Props.text}</Link>;
};

export default Button;
