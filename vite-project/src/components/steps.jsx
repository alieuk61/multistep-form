import { useContext } from 'react';
import { formContext } from 'src/context/form-context';

export default function Steps (){
    const { pageNumber, setPageNumber } = useContext(formContext);
    const numbers = [1, 2, 3, 4];

   const differentSteps = {
    1: 'Your info',
    2: 'Select plan',
    3: 'Add ons',
    4: 'Summary'
   };


    return(
        <section className="bg-[url('src/assets/images/bg-sidebar-desktop.svg')] rounded-lg bg-center bg-cover bg-no-repeat py-[48px] px-[32px] flex flex-col gap-y-[32px] overflow-auto ">
            {numbers.map((number, index) => {
                return(
                    <div key={index} className="flex gap-x-[16px] h-fit w-fit cursor-pointer" onClick={() => { setPageNumber(number) }}>
                        <button className={`rounded-full border-2 border-[#BFE2FD] font-ubuntu w-[40px] font-bold h-[40px] ${pageNumber == number ? 'bg-[#BFE2FD]' : ''} ${pageNumber == number ? 'text-Marine-blue' : 'text-[#BFE2FD]'}  `} >{number}</button>
                        <div>
                            <h5 className="text-[#D6D9E6] font-ubuntu ">step {number}</h5>
                            <h4 className="text-white text-[16px] font-ubuntu ">{differentSteps[number]}</h4>
                        </div>
                    </div>
                )
            })}
        </section>
        
    )
}