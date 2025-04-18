import Link from 'next/link'

export default function LoginPage() {
    return (
      <div className="flex justify-center mt-40">
        <form className="flex flex-col justify-center p-10 shadow-md w-120 rounded-md">
          <h1 className="text-center text-3xl font-semibold mb-4 text-zinc-800">Login</h1>
  
          <label htmlFor="usuario" className="mb-1">Usuário</label>
          <input
            type="text"
            className="mb-4 p-2 shadow-sm rounded bg-zinc-100"
          />
  
          <label htmlFor="senha" className="mb-1">Senha</label>
          <input
            type="password"
            className="mb-4 p-2 shadow-sm rounded bg-zinc-100"
          />

          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 mouser:pointer"
          > 
            Entrar
          </button>
  
          <span className="text-center text-md mt-4">
            Não tem uma conta? 
            <Link href={"/register"} className='ml-1 text-blue-500 hover:text-blue-600 transition duration-200 mouser:pointer'>
             Crie clicando aqui!
            </Link>
          </span>
          
        </form>
      </div>
    )
  }
  