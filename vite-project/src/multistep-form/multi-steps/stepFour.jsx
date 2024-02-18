import { useContext, useState } from "react"
import { formContext } from "src/context/form-context"

export default function StepFour(){

    const { totalBasket, setTotalBasket } = useContext(formContext);
    console.log(totalBasket)

    return(
        <section className="px-[32px] pt-[64px] pb-[32px] font-ubuntu">
                <h2 className="text-[2rem] text-Marine-blue mb-[.25em] font-bold ">
                    Finshing up
                </h2>
            <p className="leading-[1.5em] mb-[2.5rem] text-Cool-gray ">Double check everything looks OK before confirming.</p>

                <div className="">
                    {/* this section is going to show all the things you clicked on in the previous pages e.g. clicked on a monthly button (add all the things you clicked to an array) & add the total to a useState var */}
                    {/* {if you clicked for a monthly subsc, we will display it in the bottom div otherwise if yearly, your total will be shown and it will say yearly} */}
                    {/* this is going to be like a todo list, all the things we clicked will be saved in an array, and we will map through that obj and display the things clicked in divs */}
                    {/* we will also have a div displaying a total underneath as said before ^^ */}
                </div>
        </section>
    )
}