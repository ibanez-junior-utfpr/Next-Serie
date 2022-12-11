import TextButton from '../components/TextButton';
import Logo from '../components/Logo';
import CardFilm from '../components/cardFilm';
import InputUser from '../components/Input';
import Button from '../components/Button';

export default function Home() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-2">
        <Logo />
        <h1>Bem vindo</h1>
        <h4>Cássio</h4>
      </div>
      <h1>Hello World!</h1>
      <div className="flex flex-row">
        <div className="w-fit flex flex-col">
          <TextButton text="Anime" href="#" />
          <TextButton text="Comedia" href="#" />
          <TextButton text="Aventura" href="#" />
          <TextButton text="Aventura" href="#" />
        </div>
        <div className="w-full flex flex-wrap justify-items-start  bg-gray-400">
          <CardFilm href="#" nome="Sete Anos no Tibet" />
          <CardFilm href="#" nome="Sete Anos no Tibet" />
          <CardFilm href="#" nome="Sete Anos no Tibet" />
          <CardFilm href="#" nome="Sete Anos no Tibet" />
          <CardFilm href="#" nome="Sete Anos no Tibet" />
          <CardFilm href="#" nome="Sete Anos no Tibet" />
          <CardFilm href="#" nome="Sete Anos no Tibet" />
          <CardFilm href="#" nome="Sete Anos no Tibet" />
        </div>
      </div>
      <div className="flex flex-col">
        <InputUser tipo="email" placeHolder="Usuario" />
        <InputUser tipo="password" placeHolder="Senha" />
      </div>
      <div>
        <Button text="Login" />
      </div>
    </div>
  );
}
