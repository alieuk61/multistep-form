import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { formContext } from 'src/context/form-context'; //because its not default and im importing by name, i need to import it in curly braces
import NavigationButtons from 'src/components/navigation-buttons';

export default function StepOne(){

    const { handleNextStep } = useContext(formContext);
    const { register, handleSubmit, setValue, reset, formState: {errors} } = useForm({
        mode: "onChange",
        defaultValues: {
            name: '',
            email: '',
            number: 0
        }
    });

    const onSubmit = (data) => {
        console.log("Form submitted with data:", data);
        console.log("Errors:", errors); 
        // Only advance to the next step if the form is valid
        if (handleNextStep && Object.keys(errors).length === 0) {
            console.log("Advancing to the next step...");
            handleNextStep();
        }
    };

    return(
        <section className="pt-[4rem] px-[2rem] pb-[2rem] max-w-[600px] font-ubuntu w-full flex flex-col justify-self-center gap-y-[2rem] box-border overflow-y-auto ">
            <form onSubmit={handleSubmit(onSubmit)} className="overflow-y-auto" id="my-form"> {/*adding two overflow autos, one in each div, allows for the 2nd div to have the scroll and gives a flex shrink 1 effect causing the content to fit within the div, the parent div must be a flex div*/}
                <h1 className="text-[32px] text-Marine-blue mb-[8px] font-bold ">Personal Info</h1>
                <p className="mb-[40px] text-Cool-gray ">Please provide your name, email, address, and phone number.</p>
                
                    <div className="flex flex-col gap-y-[.5rem] mb-[1.5rem]">
                    <div className='flex justify-between'>
                        <label className="ml-[0.25rem]" htmlFor='Name'>Name</label>
                         {errors.email ? (
                         <p className='text-red-600'>Field cannot be empty</p>
                         ) : null}
                    </div>
                        <input 
                        placeholder='e.g. Stephen King'
                        type='text'
                        {...register("name", { 
                            required: true,
                            minLength: 3,
                         })}
                        className='rounded-[.5rem] border-1 p-[0.75rem] outline-none font-medium bg-Alabaster' /> {/*outline is the blue outline that surrounds the input box when clicked*/}
                    
                    </div>

                    <div className="flex flex-col gap-y-[.5rem] mb-[1.5rem]">
                    <div className='flex justify-between'>
                    <label className="ml-[0.25rem]" htmlFor=''>Email Address</label>
                    {errors.email?.type === "pattern" ? (<p className='text-red-600'>Email is invalid</p>
                    ) : errors.email ? (
                        <p className='text-red-600'>Field cannot be empty</p>
                    ) : null}
                    </div>
                    <input
                        placeholder='e.g. Stephenking@lorem.com'
                        {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+\.\S+$/,
                        })}
                        className='rounded-[.5rem] border-1 p-[0.75rem] outline-none font-medium bg-Alabaster' /> {/*outline is the blue outline that surrounds the input box when clicked*/}
                     </div>

                    <div className="flex flex-col gap-y-[.5rem] mb-[1.5rem]">
                    <label className="ml-[0.25rem]" htmlFor=''>Phone Number</label>
                    <input
                        placeholder='+1 234 567 890'
                        type='number'
                        {...register("number", { 
                            required: true,
                            pattern: /^\d+$/,
                            minLength: 3,
                         })}
                        className='rounded-[.5rem] border-1 p-[0.75rem] outline-none font-medium bg-Alabaster appearance-none' /> {/*outline is the blue outline that surrounds the input box when clicked*/}
                     
                     </div>
            </form>
            <NavigationButtons form='my-form' />
    </section>
    )
}