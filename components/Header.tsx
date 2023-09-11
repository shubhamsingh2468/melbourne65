import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import profilePic from '../public/rapid-termite-image-1.jpg'
import profilePic1 from '../public/rapid-termite-image-4.jpg'
import Link from 'next/link'

export default function Home() {


    return (
      <>
      <div className='bg-gray-900'>
        ..
      </div>
      <div className="flex flex-row justify-between bg-gray-400">
          <div>
          <Image src="https://www.rapidpestcontrolmelbourne.com.au/images/RAPID%20METAL%20LOGO%20FINAL%20less%20fx.png" alt='' width={300} height={200}/>

          </div>
          <div className='bg-gray-900 w-1 h-24 mt-4'>.</div>
         <div className='mt-4 mr-8'>
          <h1>Customer care</h1>
          <h3>+918434836204</h3>
          <p>shubhamsinha3396@gmail.com</p>
         </div>
     </div>
     <div className="flex flex-row justify-between bg-red-900 text-slate-100">
     <Link href="/About">Home </Link>
  
  <div>why us</div>
  <div>product</div>
  <div>know your pest</div>
  
  <Link href="/About">About </Link>
  
  <div>contact us</div>
</div>

  
<div className=' flex flex-row'>
      
    <Image  src={profilePic} alt='' width={700} height={400} />
    <Image  src={profilePic1} alt='' width={700} height={400}   />
    </div>
    
  













     

      </>
    )
  }