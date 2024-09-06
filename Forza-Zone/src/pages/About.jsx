import React from 'react'
import Title from "../components/Title"
import { assets } from "../assets/frontend_assets/assets";
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row flex-wrap gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img}  alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis beatae amet officiis quam error qui, fuga quis explicabo, et quae, voluptatibus quasi ipsam quo totam sit! Doloribus dolorum ea similique?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis beatae amet officiis quam error qui, fuga quis explicabo, et quae, voluptatibus quasi ipsam quo totam sit! Doloribus dolorum ea similique?</p>
              <b>Our Mission</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fuga magni fugiat nulla nobis minima odio placeat vero voluptatum suscipit laudantium eligendi maxime vel libero nostrum mollitia distinctio neque quidem.</p>
            </div>
            <div className='text-4xl py-4'>
              <Title text1={"WHY"} text2={"CHOOSE US"} />
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam possimus eaque quidem praesentium non eius enim deleniti? Expedita blanditiis ipsam officiis laboriosam id cumque quisquam numquam cum esse nihil!</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam possimus eaque quidem praesentium non eius enim deleniti? Expedita blanditiis ipsam officiis laboriosam id cumque quisquam numquam cum esse nihil!</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam possimus eaque quidem praesentium non eius enim deleniti? Expedita blanditiis ipsam officiis laboriosam id cumque quisquam numquam cum esse nihil!</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default About