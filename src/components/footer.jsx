import GITHUB from '../assets/img/github.png';
import GMAIL from '../assets/img/mail.png';
import LINKEDIN from '../assets/img/linkedin.png';
import ANCHOR from '../assets/img/top.png';

const Footer = () => {
    return (
        <div>
            <div className='py-6 mx-8 md:pl-28 md:pr-28 flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col'>
                    <h2 className="text-[20px] md:text-3xl xl:text-3xl sm:text-2xl text-white text-center md:text-left">Portfolio | Calcagno Loïc</h2>
                    <p className='text-lg text-white text-center my-4 md:text-left md:w-72 lg:w-96'>This portfolio was built with ReactJS and TailwindCSS technologies.</p>
                </div>
                <div className='flex gap-3 justify-center mt-3 sm:mt-0 md:gap-6'>
                    <a href="https://github.com/CalcagnoLoic" target={'_blank'} rel="noreferrer">
                        <img src={GITHUB} className='w-7 sm:w-8 lg:w-10' alt="Logo Github | Contact" />
                    </a>
                    <a href="https://www.linkedin.com/in/loic-calcagno/" target={'_blank'} rel="noreferrer">
                        <img src={LINKEDIN} className='w-7 sm:w-8 lg:w-10' alt="Logo Linkedin | Contact" />
                    </a>
                    <a href="mailto:calcagnoloic93@gmail.com">
                        <img src={GMAIL} className='w-7 sm:w-8 lg:w-10' alt="Logo Gmail | Contact" />
                    </a>
                </div>
            </div>
            
            <p className="text-white text-center">&copy; 2023 Copyright - Calcagno Loïc</p>

            <a href='#top' rel='norefferer' className='absolute'>
                <img src={ANCHOR} className='animate-bounce w-8 md:w-16 right-2 bottom-1 fixed' alt="" />
            </a>
        </div>
    )
}

export default Footer;