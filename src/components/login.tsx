import LoginButton from "../../utils/login";

export function Login() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex items-center justify-center bg-[#F4F7FD] dark:bg-gray-900">
        <div className="w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
          <div className="flex justify-center items-center text-3xl font-bold pb-5">
            Login
          </div>
          <div className="flex justify-center items-center">
            <LoginButton />
          </div>
        </div>
      </div>
      <footer className="bg-[#6C5CE7] text-white p-4 text-center">
        <p>© 2023 Meu Kanban. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
