import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'
import { useForm, SubmitHandler } from "react-hook-form";
import { NextPage } from 'next';

type Props = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

const Contact : NextPage<Props> = (props: Props) => {
  const { register, handleSubmit} = useForm<Props>();
  const onSubmit: SubmitHandler<Props> = formData => {
    window.location.href = `mailto:shahjalalkhan215@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message} (${formData.email})`
  };
  return (
    <div className="h-screen relative flex justify-center items-center">
       <div className=" absolute -top-7 flex flex-col space-y-3 justify-center items-center py-20">
        <h1 className="text-center text-2xl uppercase tracking-[15px] text-gray-500">Contact</h1>        
    </div>
    <div className="flex flex-col space-y-5">
    <h2 className="text-4xl">I have got just wont to you need 
          <span className="underline decoration-[#f7abba] ml-2">Let's Talk.</span>
        </h2>
      <div className="flex items-center space-x-1 text-2xl">
        <BsFillTelephoneFill className="text-[#f7abba]" />
        <p>+88 013032-33683</p>
      </div>
      <div className="flex items-center space-x-1 text-2xl">
        <MdEmail className="text-[#f7abba]" />
        <p>shahjalalkhan215@gmail.com</p>
      </div>
      <div className="flex items-center space-x-1 text-2xl">
        <ImLocation className="text-[#f7abba]" />
        <p>Khushtia, Dhaka, Banlgadesh</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center flex-col space-y-3">
        <div className="w-full flex items-center justify-evenly space-x-3"><input {...register("name")} type="text" placeholder='Name' className="flex-grow p-2 contactInput" /> <input {...register("email")} type="email" placeholder='Email' className="flex-grow p-2 contactInput" /></div>
        <input {...register("subject")} type="text" placeholder='Subject' className=" w-full p-2 contactInput" />
        <textarea {...register("message")} placeholder='Message' name="" id="" className="h-32 p-2 w-full contactInput"></textarea>
        <button type="submit" className="py-2 px-10 rounded-md text-black font-bold bg-[#F7ABBA]">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contact