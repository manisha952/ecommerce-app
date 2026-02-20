import React from 'react';
import Title from '../components/Title';
import assets from '../assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center text-gray-600 gap-6 md:w-2/4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero animi, dicta impedit iusto quasi sit inventore omnis doloremque deserunt recusandae officiis magnam porro, reprehenderit laudantium. </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere dicta fuga beatae soluta, debitis voluptatem eum tempore doloribus iste quo ipsum eveniet totam eaque a impedit est adipisci provident.</p>
          <b className='text-gray-800'>Oue Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur assumenda ipsum aliquid necessitatibus repellat non, commodi obcaecati debitis dignissimos vero modi laudantium corrupti libero nam odio saepe</p>
        </div>
      </div>

      <div className='text-1xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
            We ensure that every product goes through strict quality checks before delivery.
            Our team verifies authenticity, durability, and performance so customers receive
            reliable and high-quality products every time.
          </p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>
            Our platform is designed for a smooth and hassle-free shopping experience.
            Easy navigation, secure payments, and fast delivery make online shopping simple
            and comfortable for users.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>
            We prioritize customer satisfaction by providing quick support and clear communication.
            Our team is always ready to help with order tracking, returns, and any queries to ensure
            a pleasant and trustworthy shopping experience.
          </p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  );
};

export default About;
