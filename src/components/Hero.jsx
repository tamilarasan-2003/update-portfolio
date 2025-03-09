import HeroImg from '../assets/clg.jpg' 
export default function Hero(){
    return <section className='flex px-5 py-32 justify-center bg-secondary'>
        <h1 className='w-1/2 text-4xl text-black'>
            Hi, <br/> Im Tamilarasan
            <p className='text-2xl'>Im a Full-stack developer</p>
        </h1>
        <img className="w-1/4 " src={HeroImg}/>
        </section>

}