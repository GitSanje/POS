import Image from 'next/image';
import Navbar from './_component/Navbar'
import Logo from './_component/logo.png'
import gif from './_component/TGT-Animation.gif'


const Page = () => {
  return (
    <>
      <div >
        <Navbar />
      </div>
      <div className='mt-10 flex justify-center items-center sm:flex-row gap-20'>
        <div className=' flex justify-start items-center'>
          <Image src={gif} height={500} width={500} alt='gif animation'/>
        </div>
        <div className='flex sm:flex-col items-center'>
          <Image src={Logo} alt='big logo' />
          <div className='flex flex-col gap-6 text-amber-300'>
            <p className='text-center text-4xl font-bold '>Welcome to <br /> PoS System</p>
            <p className='text-center text-2xl font-bold'>PoS is an online system that allows <br />you to manage your
              products with ease.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
