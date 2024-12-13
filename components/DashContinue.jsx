import Image from 'next/image'
import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { RxDot, RxDotFilled } from 'react-icons/rx'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

const DashContinue = () => {

  const t = useTranslations("DashContinue")

  const [currentIndex, setCurrentIndex] = useState(0)

  const navigation = useRouter()

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newSlide = isFirstSlide ? slider.length - 1 : currentIndex - 1
    setCurrentIndex(newSlide)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slider.length - 1
    const newSlide = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newSlide)
  }
  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const slider = [
    {
      slide:<div className='flex justify-between items-center'>
      <Image 
      src="/assets/learn.jpg" 
      alt="Quran" 
      height={420}
      width={420}
      className='rounded-xl'
      />
      <div className='flex flex-col gap-10 text-center w-[40%]'>
          <h4 className='font-serif text-xl font-semibold'>
            {t("Our Mission")}
          </h4>
          <p className='font-mono text-lg'>
          {t("To disseminate authentic Islamic knowledge and foster a deeper understanding of the principles of Islam through structured learning and community engagement")}
          </p>
          <button 
          onClick={() => navigation.push('AboutUs')}
          className='bg-green-400 rounded-xl w-fit p-3 self-center'>
            {t("Discover More")}
          </button>
      </div>
    </div>
    },
    {
      slide:<div className='flex justify-between items-center'>
      <Image 
      src="/assets/quran.png" 
      alt="Quran" 
      height={450}
      width={450}
      className='rounded-xl'
      />
      <div className='flex flex-col gap-10 text-center w-[40%]'>
          <h4 className='font-serif text-xl font-semibold'>
            {t("Our Vision")}
          </h4>
          <p className='font-mono text-lg'>
          {t("To be a leading organization in Islamic education, inspiring individuals to embody Islamic values in their daily lives and contribute positively to society")}
          </p>
          <button 
          onClick={() => navigation.push('AboutUs')}
          className='bg-green-400 rounded-xl w-fit p-3 self-center'>
            {t("Explore Our Vision")}
          </button>
      </div>
    </div>
    },
    {
      slide:<div className='flex justify-between items-center'>
      <Image 
      src="/assets/merkez.png" 
      alt="Quran" 
      height={450}
      width={450}
      className='rounded-xl'
      />
      <div className='flex flex-col gap-10 text-center w-[40%]'>
          <h4 className='font-serif text-xl font-semibold'>
            {t("Our Values")}
          </h4>
          <p className='font-mono text-lg'>
          {t("We uphold integrity, respect, and inclusivity, ensuring that our teachings are accessible to all, regardless of background or prior knowledge")}
          </p>
          <button
          onClick={() => navigation.push('AboutUs')} 
          className='bg-green-400 rounded-xl w-fit p-3 self-center'>
            {t("Learn About Our Values")}
          </button>
      </div>
    </div>
    }
  ]
  
  return (
    <div className='flex flex-col gap-10 p-4 group'>
      {slider[currentIndex].slide}
      <div className='hidden group-hover:block absolute top-[120%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft size={50} onClick={prevSlide}/>
      </div>
      <div className='hidden group-hover:block absolute top-[120%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight size={50} onClick={nextSlide}/>
      </div>
      <div className = 'flex top-4 justify-center py-2'>
        {slider.map((item, index) => (
          <div 
          key={index}
          onClick={() => goToSlide(index)}
          className='text-2xl cursor-pointer'>
            {currentIndex == index ? (
              <RxDotFilled />
            ):(
              <RxDot />
            )}
          </div>
        ))}
      </div>
      <hr />
      <div className='flex flex-col gap-10'>
        <h3 className='text-center font-serif font-semibold text-2xl'>{t("Explore Our Courses")}</h3>
        <h4 className='text-center font-mono text-xl'>{t("Engage with our comprehensive curriculum designed for learners at all levels")}</h4>
        <div className='flex flex-col gap-10'>
          <div className='flex justify-between items-center'>
              <Image 
              src='/assets/study.png'
              alt='study'
              height={400}
              width={400}
              className='rounded-xl'
              />
              <div className='flex flex-col gap-10 w-[50%]'>
                <h3 className='text-center font-serif text-xl'>{t("Introduction to Islamic studies")}</h3>
                <p className='text-center font-mono text-lg'>
                {t("This foundational course covers the basics of Islamic beliefs, practices, and history, providing a solid grounding for further study")}
                </p>
              </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-10 w-[50%]'>
                <h3 className='text-center font-serif text-xl'>{t("Advanced Islamic Studies")}</h3>
                <p className='text-center font-mono text-lg'>
                  {t("Delve Deeper into the islamic studies with this advanced course that explores advanced islamic rules, arabic language and quran and hadith translation")}
                </p>
            </div>
            <Image 
            src='/assets/advstudy.webp'
            alt='advanced study'
            width={450}
            height={450}
            className='rounded-xl'
            />
          </div>
          <div className='flex justify-between items-center'>
              <Image 
              src='/assets/ethics.jpg'
              alt='study'
              height={400}
              width={400}
              className='rounded-xl'
              />
              <div className='flex flex-col gap-10 w-[50%]'>
                <h3 className='text-center font-serif text-xl'>{t("Islamic Ethics and Morality")}</h3>
                <p className='text-center font-mono text-lg'>
                 {t("This course examines the ethical principles in Islam and their application in contemporary society, encouraging critical thinking and personal development")}
                </p>
              </div>
          </div>
        </div>
        <button 
        onClick={() => navigation.push('Courses')}
        className='bg-stone-300 p-3 rounded-xl w-fit self-center'>
          {t("Get Involved")}
        </button>
      </div>
      <hr />
      <div className='flex flex-col gap-10'>
        <h3 className='text-center font-serif text-xl'>{t("Stay Updated With Our Events")}</h3>
        <p className='text-center font-mono text-lg'>
         {t("Join us for enriching seminars and events that deepen your understanding of Islamic teachings")}
        </p>
        <div className='flex justify-between'>
          <Image 
          src='/assets/AICP2.png'
          alt='AICP'
          width={450}
          height={450}
          />
          <Image 
          src='/assets/AICP.jpg'
          alt='AICP'
          width={450}
          height={450}
          />
        </div>
      </div>
    </div>
  )
}

export default DashContinue