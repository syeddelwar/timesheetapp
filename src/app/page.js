"use client"
import Image from 'next/image'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button
} from "@material-tailwind/react";

export default function Home() {
  return (
<>
  
<nav className="flex pl-10 bg-[#96eb78] focus:ring-2">
  {[
    ['Home', '/dashboard'],
   
  ].map(([title, url]) => (
    <a href={url} className="rounded-lg px-3  ring-2 ring-pink-300 ring-inset py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
  ))}
</nav>
<Card className="mt-6  p-2">
      
          <div className='flex flex-col justify-center items-center space-x-10 space-y-9'>

            {/* user Deatils */}
             <div className='grid grid-cols-2 gap-4 w-1/2'>

                <div className='flex justify-center space-x-4  items-center'>
                   <label className='block w-48'>
                     Full Name:</label>
                    <Input label="syed@gmail.com" disabled className='max-w-[40rem]' />
          
                </div>


                <div className='flex justify-center space-x-4  items-center'>
                   <label className='block w-24'>
                     Task:</label>
                     <Input label="syed@gmail.com" disabled className='max-w-[25rem]' />
          
                </div>
             </div>
             <div className='grid grid-cols-2 gap-4 w-1/2'>

            <div className='flex justify-center space-x-4  items-center'>
              <label className='block w-48'>
                Patient Name:</label>
                <Input label="syed@gmail.com" disabled className='max-w-[40rem]' />

            </div>


            <div className='flex justify-center space-x-4  items-center'>
              <label className='block w-24'>
                Email:</label>
                <Input label="syed@gmail.com" disabled className='max-w-[25rem]' />

            </div>
            </div>


         
               {/* <div className='flex space-x-4 items-center '>
                 <Button className='w-[20rem] shadow-md'>Start Time</Button>
                 <Input label="9.00am" disabled className='max-w-[5rem]'/>
                 <Button>0.0 </Button>
                 <Button className='w-[20rem]  shadow-md'>End Time</Button>
                 <Input label="9.00am" disabled className='max-w-[12rem]' />
               </div> */}

      
              <div className='flex space-x-4 items-center '>
                 <Button  size="lg" className='shadow-md w-full'> Start time </Button>
                 <Input label="9.00am" disabled />
               
                 <Button  size="lg" className=' shadow-md w-full'>End TIme</Button>
                 
               </div>
           
               <div className='flex space-x-4 items-center '>
                 <Button className='shadow-md'>Break </Button>
                 <Input label="9.00am" disabled />
               
                 <Button className=' shadow-md'>Stop</Button>
                 
               </div>

        
           
            <p>Your Location:NY</p>
           <div className=''>
               <div className='flex space-x-4 items-center '>
                
                 <Input label="Signature" disabled />
               
                 <Button className=' shadow-md'>Submit</Button>
                 
               </div>

           </div>


          </div>
    
     
    </Card>

</>
  )
}
