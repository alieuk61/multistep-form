import NavigationButtons from "src/components/navigation-buttons"
import { useContext, useState } from "react"
import { formContext } from "src/context/form-context"

export default function StepThree() {

    const {totalBasket, setTotalBasket, selectedData, setSelectedData, handleNextStep} = useContext(formContext);

    const addOnOptions = {
        1: {
            h4: 'Online service',
            p: 'Access to multiplayer games',
            price: 1
        },
        2: {
            h4: 'Larger storage',
            p: 'Extra 1TB cloud save',
            price: 2
        },
        3: {
            h4: 'Customizable profile',
            p: 'Custom theme on your profile',
            price: 2
        }
    }

     function handleButtonClick(div){
         // Check if the div already exists in the totalBasket
         const exists = totalBasket.some(obj => Object.keys(obj).includes(div));
         if (exists) {
             // If the div exists, remove it from totalBasket
             const updatedBasket = totalBasket.filter(obj => !Object.keys(obj).includes(div));
             setTotalBasket(updatedBasket);
         }
        else{
             // If the div doesn't exist, add it to totalBasket
             setTotalBasket([...totalBasket, addOnOptions[div]]);
        }
     }

    return(
        <section className="px-[32px] pt-[64px] pb-[32px] font-ubuntu flex box-border flex-col overflow-auto">
            <form action="" className="overflow-auto">
                <h2 className="text-[2rem] text-Marine-blue mb-[.25em] font-bold ">
                    Pick add-ons
                </h2>
                <p className="leading-[1.5em] mb-[2.5rem] text-Cool-gray ">Add-ons help to enhance your gaming experience.</p>

                <div className="grid grid-rows-3 gap-y-[1rem] ">
                   {[1, 2, 3].map((div, index) => {
                    return(
                        <div key={index} className="border-Light-gray border-[1px] flex gap-x-[2rem] p-[1.5rem] items-center rounded-[.5rem]">
                            <input 
                            type="checkbox"
                            name=""
                            onClick={() => handleButtonClick(div)}
                            id="" />
                            <div className="w-full flex justify-between items-center">
                                <div>
                                    <h4 className="font-bold text-Marine-blue">
                                        {addOnOptions[div].h4}
                                    </h4>
                                    <p>
                                        {addOnOptions[div].p}
                                    </p>
                                </div>
                                <div className="text-Purplish-blue h-fit font-medium">
                                    ${addOnOptions[div].price}/mo
                                </div>

                            </div>
                        </div>
                    )
                   })}
                </div>
            </form>
            <NavigationButtons handleNextStep={handleNextStep} />
        </section>
    )
}