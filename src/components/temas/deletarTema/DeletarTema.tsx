import { useContext, useEffect, useState } from "react"
import Tema from "../../../models/Tema"
import { useNavigate, useParams } from "react-router"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../services/Service"
import { toastAlerta } from "../../../util/toastAlerta"

function DeletarTema() {
    const [tema, setTema] = useState<Tema>({} as Tema)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/temas")
    }

    async function deletarTema() {
        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Tema apagado com sucesso', 'sucesso')
            retornar()

        } catch (error: any) {
            if(error.toString().includes('403')){
                toastAlerta('O token expirou, favor loga novamente', 'erro')
                handleLogout()
            }else{
                toastAlerta('Erro ao apagar o Tema', 'erro')
            }
        
        }
        
        
    }
    return(

        <div className="bg-cyan-50 min-h-screen flex items-center justify-center">
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4x1 text-center my-4'>Deletar tema</h1>
        
            <p className='text-center frint-semibold mb-4'>Você tem certeza de que deseja apagar o tema? </p>
            <div 
                className='border flex flex-col rounded-2xl 
                overflow-hidden justify-between'
                >
                <header className='py-2 px-6 bg-cyan-600 text-white font-bold text-2xl'>
                    Tema
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>
                    {tema.descricao}</p>
                <div className="flex">
                <button 
                    className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' 
                    onClick={retornar}
                    >
                    Não
                </button>
                <button 
                    className='w-full text-slate-100 bg-cyan-400 hover:bg-cyan-700 flex items-center justify-center' 
                    onClick={deletarTema}
                    >
                    Sim
                </button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default DeletarTema