import CardFilm from '../components/cardFilm';
import Logo from '../components/Logo';
import TextButton from '../components/TextButton';

export default function Favoritos() {
  return (
    <div className="bg-gradient-to-b from-red-500 via-red-400 ">
      <div className="flex flex-row justify-between items-center w-full p-1">
        <Logo width={160} />
        <p className="text-6xl">Favoritos</p>
        <p className="text-lg font-medium">Cássio Ritse</p>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-col text-white p-3 m-1 ">
          <TextButton href="#" text="Anime" style="text-3xl hover:text-black" />
          <TextButton href="#" text="Ação" style="text-3xl  hover:text-black" />
          <TextButton
            href="#"
            text="Aventura"
            style="text-3xl  hover:text-black"
          />
          <TextButton
            href="#"
            text="Classicos"
            style="text-3xl  hover:text-black"
          />
          <TextButton
            href="#"
            text="Comedia"
            style="text-3xl  hover:text-black"
          />
          <TextButton
            href="#"
            text="Drama"
            style="text-3xl  hover:text-black"
          />
          <TextButton
            href="#"
            text="Ficção"
            style="text-3xl  hover:text-black"
          />
          <TextButton
            href="#"
            text="Policial"
            style="text-3xl  hover:text-black"
          />
          <TextButton
            href="#"
            text="Romance"
            style="text-3xl  hover:text-black"
          />
          <TextButton
            href="#"
            text="Suspense"
            style="text-3xl  hover:text-black"
          />
          <TextButton
            href="#"
            text="Terror"
            style="text-3xl  hover:text-black"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center w-full">
          <CardFilm href="#" nome="7 anos no Tibet" />
          <CardFilm href="#" nome="7 anos no Tibet" />
          <CardFilm href="#" nome="7 anos no Tibet" />
          <CardFilm href="#" nome="7 anos no Tibet" />
          <CardFilm href="#" nome="7 anos no Tibet" />
          <CardFilm href="#" nome="7 anos no Tibet" />
          <CardFilm href="#" nome="7 anos no Tibet" />
          <CardFilm href="#" nome="7 anos no Tibet" />
          <CardFilm href="#" nome="7 anos no Tibet" />
          <CardFilm href="#" nome="7 anos no Tibet" />
          <CardFilm href="#" nome="7 anos no Tibet" />
          <CardFilm href="#" nome="7 anos no Tibet" />
          <CardFilm href="#" nome="7 anos no Tibet" />
        </div>
      </div>
    </div>
  );
}
