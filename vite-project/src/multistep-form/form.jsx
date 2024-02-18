import { useState, useContext } from 'react'
import Steps from 'src/components/steps'
import StepOne from './multi-steps/stepOne'
import StepTwo from './multi-steps/stepTwo'
import StepThree from './multi-steps/stepThree'
import StepFour from './multi-steps/stepFour'
import { formContext } from 'src/context/form-context'

function Form() {
  const { pageChangeHandler, pageNumber } = useContext(formContext);

  return (
      <main className='w-screen h-screen bg-[#F0F6FF] px-[32px] py-[16px] grid place-items-center box-border'>
      <section className='form bg-[#FAFBFF] w-[968px] h-[min(90%,_700px)] rounded-lg p-[16px] grid grid-cols-[320px_1fr] overflow-hidden shadow-xl box-border '>
          <Steps />
          {pageChangeHandler(pageNumber)}
        </section>
      </main>
  )
}

export default Form