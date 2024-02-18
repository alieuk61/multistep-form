import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { formContext } from 'src/context/form-context'; //because its not default and im importing by name, i need to import it in curly braces
import NavigationButtons from 'src/components/navigation-buttons';

export default function StepOne(){

    const { register, handleSubmit, setValue, errors } = useForm({
        defaultValues: {
            name: '',
            email: '',
            number: 0
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return(
        <section className="pt-[4rem] px-[2rem] pb-[2rem] max-w-[600px] font-ubuntu w-full flex flex-col justify-self-center gap-y-[2rem] box-border overflow-y-auto ">
            <form onSubmit={handleSubmit(onSubmit)} className="overflow-y-auto"> {/*adding two overflow autos, one in each div, allows for the 2nd div to have the scroll and gives a flex shrink 1 effect causing the content to fit within the div, the parent div must be a flex div*/}
                <h1 className="text-[32px] text-Marine-blue mb-[8px] font-bold ">Personal Info</h1>
                <p className="mb-[40px] text-Cool-gray ">Please provide your name, email, address, and phone number.</p>
                
                    <div className="flex flex-col gap-y-[.5rem] mb-[1.5rem]">
                        <label className="ml-[0.25rem]" htmlFor='Name'>Name</label>
                        <input 
                        placeholder='e.g. Stephen King'
                        type='text'
                        {...register('name', { required: true })}
                        className='rounded-[.5rem] border-1 p-[0.75rem] outline-none font-medium bg-Alabaster' /> {/*outline is the blue outline that surrounds the input box when clicked*/}
                    
                    </div>

                    <div className="flex flex-col gap-y-[.5rem] mb-[1.5rem]">
                    <label className="ml-[0.25rem]" htmlFor=''>Email Address</label>
                    <input
                        placeholder='e.g. Stephenking@lorem.com'
                        type='email'
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Please enter a valid email'
                            }
                        })}
                        className='rounded-[.5rem] border-1 p-[0.75rem] outline-none font-medium bg-Alabaster' /> {/*outline is the blue outline that surrounds the input box when clicked*/}
                    {errors?.email && errors.email.type === "required" && (
                        <p>This field is required</p>
                    )}
                    {errors?.email && errors.email.type === "pattern" && (
                        <p>Invalid email format</p>
                    )}
                     </div>

                    <div className="flex flex-col gap-y-[.5rem] mb-[1.5rem]">
                    <label className="ml-[0.25rem]" htmlFor=''>Phone Number</label>
                    <input
                        placeholder='+1 234 567 890'
                        type='number'
                        {...register('number', { required: true })}
                        className='rounded-[.5rem] border-1 p-[0.75rem] outline-none font-medium bg-Alabaster' /> {/*outline is the blue outline that surrounds the input box when clicked*/}
                     
                     </div>

            </form>
            <NavigationButtons type="submit" />
    </section>
    )
}