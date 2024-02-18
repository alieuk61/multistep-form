import DynamicButton from "src/components/dynamic-button";
import NavigationButtons from "src/components/navigation-buttons"
import { useState, useContext } from "react";
import { formContext } from "src/context/form-context";
import 'src/index.css'

export default function StepTwo (){

    const buttons = ['Arcade', 'Advanced', 'Pro'];
    const [activeButton, setActiveButton] = useState(null);
    const {monthly, setToMonthly, totalBasket, setTotalBasket, handleNextStep, selectedData ,setSelectedData} = useContext(formContext);

    const handleButtonClick = (index, event) => {
        event.preventDefault();
        setActiveButton(index);
        console.log(event.target)
        const btn = buttons[index]; //the button clicked
        const price = btn === 'Arcade' ? 9 : btn === 'Advanced' ? 12 : 15; //the price of the button clicked
        setSelectedData({ item: btn, price: price }); //save it in the state
    };

    return(
        <section className="px-[32px] pt-[64px] pb-[32px] box-border flex flex-col font-ubuntu overflow-auto ">
        <form action="" className='overflow-auto'>
                <h2 className="text-[2rem] text-Marine-blue mb-[.25em] font-bold ">
                Select your plan
            </h2>
                <p className="leading-[1.5em] mb-[2.5rem] text-Cool-gray ">You have the option of monthly or yearly billing</p>

            <div className="grid grid-cols-3 mb-[2rem] gap-x-[1rem]  ">
                {buttons.map((btn, index) => {
                    return (
                        <button key={index}
                        onClick={(event) => {
                            handleButtonClick(index, event)
                        }}
                            className={`p-[1rem] rounded-[.5rem] flex flex-col border-[1px] border-Light-gray ${
                                    activeButton === index ? 'active' : ''
                                } `}>
                        <img src={`src/assets/images/icon-${btn.toLowerCase()}.svg`} 
                        alt={`${btn}`} 
                        className="mb-[4rem] w-[40px] h-[40px]  "/>
                            <h4 >{btn}</h4>
                            <p>${index == 0 ? '9' : index == 1 ? '12' : '15' }/mo</p>
                        </button>
                    )
                })}
            </div>

             <div className="w-full bg-Magnolia p-[1rem] flex justify-center rounded-[.5rem] box-border ">
                    <div className="flex items-center gap-x-[1rem]">
                    <h5 className="mb-[.25em] text-[0.8rem] font-bold">Monthly</h5>
                        <DynamicButton />
                    <h5 className="mb-[.25em] text-[0.8rem] font-bold ">Yearly</h5>
                </div>
             </div>
        </form>
        <NavigationButtons handleNextStep={handleNextStep} />
        </section>
    )
}