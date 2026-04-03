import { RiPlayFill} from 'react-icons/ri'

const Video = () => {
  return (
    <section className='max-containe padding-container py-16 xl:py-24' id='video'>
        <div className='bg-video bg-center bg-cover bg-no-repeat h-[260px] md:h-[400px] xl:h-[500px] grid place-items-center rounded-2xl relative'>
            <div className='h-16 w-16 bg-secondary/95 text-white bold-32 flexCenter rounded-full cursor-pointer z-30'><RiPlayFill /></div>
            <div className='absolute h-12 w-12 bg-white rounded-full animate-ping'></div>
        </div>
    </section>
  )
}

export default Video