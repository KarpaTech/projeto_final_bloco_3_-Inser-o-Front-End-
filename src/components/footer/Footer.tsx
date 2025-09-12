import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {
    let data = new Date().getFullYear()
  return (
            <div className="flex justify-center bg-green-950 text-amber-100">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-mono hover:text-amber-900 transition-all "'>
                            Brechó ZL | Copyright: {data}
                        </p>
                    <div className='flex gap-2'>
                       <a href="https://www.linkedin.com/in/pedro-henrique-o13/ " target="_blank"> <LinkedinLogoIcon size={48} className="hover:text-amber-900 transition-all " weight='bold' /></a>
                       <a href="https://github.com/KarpaTech" target="_blank" ><GithubLogoIcon size={48} className="hover:text-amber-900 transition-all " weight='bold' /> </a>
                    </div>
                </div>
            </div> 
  )
}

export default Footer