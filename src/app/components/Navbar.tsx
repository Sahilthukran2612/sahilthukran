"use server"
import Image from "next/image"
import LINKS from "./LINKS"




const Navbar = async () => {

    
    
  return (
    <nav className=' sticky top-6 bg-white/60 backdrop-blur-2xs border-[0.8px] border-gray-200 max-w-5xl mx-auto shadow-xs shadow-gray-100/60 rounded-xl mb-12 shrink-0 z-999'>
        <div className='max-w-5xl mx-auto py-4 px-6 text-sm flex items-center justify-between '>
          <div className="flex items-center justify-center  "> <Image
           src={`/sahilthukran.svg`}
           alt="Sahil Thukran" 
           width={100}
           height={100}
           className=""
            />
            </div>
           <LINKS />

           
        </div>
    </nav>
  )
}

export default Navbar