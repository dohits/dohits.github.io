import type { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <>
      <div className="text-white w-full h-full flex flex-col justify-center items-center text-center">
        <div className="bg-white z-10 rounded-full p-4">
          <span className='dark:text-white
                            text-zinc-950 text-6xl mb-1 font-gamja-flower'>이런...</span><br/>
          <span className='dark:text-white
                            text-zinc-950 text-4xl mb-8 font-gamja-flower'>없는 페이지에요 !</span>
        </div>
        <img  className="dark:invert rounded-full w-[400px]"
              src='/images/404image.svg'></img>
      </div>
    </>
  )
}

export default NotFound;