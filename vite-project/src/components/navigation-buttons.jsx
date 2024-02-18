import { useContext } from "react"
import { formContext } from "src/context/form-context"

export default function NavigationButtons({ handleNextStep }){
    const {pageNumber, setPageNumber} = useContext(formContext)

    const handleNextStepClick = () => {
        if (pageNumber < 4) {
            if (handleNextStep) {
                handleNextStep(); // Call the onNextStep function passed as prop
                setPageNumber(prevPage => prevPage + 1);
            }
        }
    };

    return(
        <div className={`flex ${pageNumber == 1 || pageNumber == 4 ? 'justify-end' : 'justify-between'} `}>
            {pageNumber > 1 && <button onClick={() => {setPageNumber(prevPage => prevPage-1)}} className="bg-white text-Light-gray rounded-lg py-[16px] px-[24px]">Go Back</button>} 
            <button onClick={handleNextStepClick} className="bg-Marine-blue text-white rounded-lg py-[16px] px-[24px]">Next Step!</button> {/*change on page four to confirm or something*/}
            {/* button for finishing only on page four */}
        </div>
    )
}
