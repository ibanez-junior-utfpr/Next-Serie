import Input from '../components/Input';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import Logo from '../components/Logo';

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center font-semi bg-gradient-to-br from-red-400 via-red-200 ">
      <div className="flex flex-col border-2 rounded-lg p-10 sm:w-1/2 md:w-1/3 xl:w-1/3 justify-center items-center border-transparent bg-gradient-to-br from-default-color-800 via-red-500">
        <Logo width={300} />
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <Input tipo="text" placeHolder="Usuario" />
            <Input tipo="password" placeHolder="Senha" />
            <TextButton
              href="#"
              text="Esqueci minha senha"
              style="text-sm font-semibold"
            />
          </div>
          <div className="flex flex-col mt-[24px]">
            <Button text="Login" />
          </div>
          <TextButton
            href="/Cadastro"
            text="Cadastre-se"
            style="text-sm font-semibold float-right mt-4"
          />
        </div>
      </div>
    </div>
  );
}
