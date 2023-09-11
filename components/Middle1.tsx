import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import profilePic2 from '../public/rapid-termite-image-5.jpg'
export default function Middle1(){
    return(
        <>
        <div className='text-4xl text-center text-slate-700 mt-20'>
            <h1>RAPID TERMITE CONTROL</h1>

           </div>
           <div className=' flex flex-row justify-between mt-20 bg-red-950 w-full'>
            <div>
                <p className=' mr-4 justify-evenly text-slate-300 tracking-2em text-xl'>Offering termite protection for part a & a part b to all commercial factories, warehouses, new homes, existing homes, footing spray, house renovations, basement, timber deck sprays, and house stump chemical sprays. MTC can install any type of physical or chemical injection barrier by AS3660.1 before or after the concrete has been done, certificates are certified by a professional installer.

Cheap termite treatments are usually carried out by using a non-branded chemical, this is the only way you can cut costs down on termite protection in all homes. We like to use branded products like Termidor and don't recommend using any generic products. Cheap termite protection usually doesn't have that effect and doesn't last as long as Termidor which can last up to 8 years if it's applied the correct way.</p>
            </div>
             <Image src={profilePic2} alt='' width={600} height={300} />

           </div>

        </>
    )
}