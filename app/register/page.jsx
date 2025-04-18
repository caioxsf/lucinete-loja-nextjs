import Link from 'next/link'

export default function LoginPage() {
    return (
      <div className="flex justify-center mt-10">
        <form className="flex flex-col justify-center p-10 shadow-md w-120 rounded-md">
          <h1 className="text-center text-3xl font-semibold mb-4 text-zinc-800">Registre-se</h1>
  
          <label htmlFor="usuario" className="mb-1">Nome</label>
          <input
            type="text"
            className="mb-4 p-2 shadow-sm rounded bg-zinc-100"
          />
  
          <label htmlFor="sobrenome" className="mb-1">Sobrenome</label>
          <input
            type="text"
            className="mb-4 p-2 shadow-sm rounded bg-zinc-100"
          />

          <label htmlFor="email" className="mb-1">Email</label>
          <input
            type="text"
            className="mb-4 p-2 shadow-sm rounded bg-zinc-100"
          />

          <label htmlFor="cpf" className="mb-1">CPF</label>
          <input
            type="number"
            className="mb-4 p-2 shadow-sm rounded bg-zinc-100"
          />

          <label htmlFor="nascimento" className="mb-1">Nascimento</label>
          <input
            type="date"
            className="mb-4 p-2 shadow-sm rounded bg-zinc-100"
          />

          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 mouser:pointer"
          > 
            Entrar
          </button>
  
          <span className="text-center text-md mt-4">
            Já possui uma conta? 
            <Link href={"/login"} className='ml-1 text-blue-500 hover:text-blue-600 transition duration-200 mouser:pointer'>
             Clique aqui!
            </Link>
          </span>
          
        </form>
      </div>
    )
  }
  