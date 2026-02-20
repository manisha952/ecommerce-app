import React from 'react';
import Title from '../components/Title';
import assets from '../assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return(
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} alt=""/>
        <div className='flex flex-col gap-6 items-start justify-center'>
          <p className='font-semibold text-xl text-gray-700' >Our Store</p>
          <p className='text-gray-500'>8893201 Noida street <br/>Suite 340 Noida,India</p>
          <p className='text-gray-500'>Tel: (350) 555-9078 <br/>Email: admin@gmail.com</p>
          <p>Careers at Shoping</p>
          <p className='text-gray-500'>Learn more about our team and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  );
};

export default Contact;
