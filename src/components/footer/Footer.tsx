import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
function Footer() {



  return (
    <>
      <div className="flex justify-center bg-[#0891b2] text-white">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold'>Blog pessoal Eloisa Marin | Copyright: </p>
          <p className='text-lg'>Acesse minhas redes sociais</p>
          <div className='flex gap-2'>
            <a href="https://www.linkedin.com/in/eloisamarin/" target="_blank" rel="noopener noreferrer">
              <LinkedinLogo size={48} weight='bold' />
            </a>
            <a href="https://github.com/eloisamarin" target="_blank" rel="noopener noreferrer">
              <GithubLogo size={48} weight='bold' />
            </a>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer