import {createContext, useState} from 'react'
import StepOne from '../multistep-form/multi-steps/stepOne'
import StepTwo from '../multistep-form/multi-steps/stepTwo'
import StepThree from '../multistep-form/multi-steps/stepThree'
import StepFour from '../multistep-form/multi-steps/stepFour'

export const formContext = createContext() 

export default function FormContext( {children} ){

    const [pageNumber, setPageNumber] = useState(1) //need to export this and import it in the steps page, when we click on the div which includes the buttons and the page labels we will say when we click on these we get the number from the page array
    const [isMonthly, setToMonthly] = useState(0) //if 0, it means its monthly, if 1 its yearly as the button has been clicked
    const [totalBasket, setTotalBasket] = useState([]);
    const [selectedData, setSelectedData] = useState({});

    function pageChangeHandler(pageNum){
        switch (pageNum) {
            case 1:
                return <StepOne />
                break
            case 2:
                return <StepTwo />
                break
            case 3:
                return <StepThree />
                break
            case 4:
                return <StepFour />
        }
    }

    const handleNextStep = () => {
        setTotalBasket(prevBasket => [...prevBasket, selectedData]); // Append selected data to existing basket
    };

    return(
    
        <formContext.Provider
        value={{
            pageChangeHandler,
            pageNumber,
            setPageNumber,
            isMonthly,
            setToMonthly,
            totalBasket,
            setTotalBasket,
            handleNextStep, 
            selectedData,
            setSelectedData
        }}>
            {children}
        </formContext.Provider>
    )
}