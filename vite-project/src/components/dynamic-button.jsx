import { useState, useContext } from "react"
import { formContext } from "src/context/form-context"

export default function DynamicButton(){

    const {isMonthly, setToMonthly} = useContext(formContext);

    const monthlyOrYearly = () => {
        if (isMonthly === 0){
            setToMonthly(1)
        }else{
            setToMonthly(0)
        }
        console.log(isMonthly ? 'yearly' : 'monthly')
    }

    return(
        <div 
        onClick={monthlyOrYearly}
        className="bg-Marine-blue rounded-[100vmax] relative cursor-pointer block w-[3rem] h-[1.5rem] p-[.25em] ">
            <div className="bg-white rounded-full py-[.25rem] pl-[.25rem] w-[16px] h-[16px] absolute" />
        </div>
    )
}