import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const trailers = [
  {
    title: 'Avengers: Doomsday',
    image: 'https://img.youtube.com/vi/irVNGjRFZGk/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/irVNGjRFZGk'
  },
  {
    title: 'Trailer 2',
    image: 'https://img.youtube.com/vi/UfNu7pcR0e8/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/UfNu7pcR0e8'
  },
  {
    title: 'Trailer 3',
    image: 'https://img.youtube.com/vi/UiMg566PREA/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/UiMg566PREA'
  },
  {
    title: 'Trailer 4',
    image: 'https://img.youtube.com/vi/kH1XlwHQv9o/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/kH1XlwHQv9o'
  }
]

const TrailersSection = () => {

  const [currentTrailer, setCurrentTrailer] = useState(trailers[0])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>

      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>
        Trailers
      </p>

      {/* Trailer Thumbnails */}
      <div className='group grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>

        {trailers.map((trailer) => (
          <div
            key={trailer.videoUrl}
            className={`relative cursor-pointer hover:-translate-y-1 duration-300 transition ${
              currentTrailer.videoUrl === trailer.videoUrl
                ? 'ring-2 ring-red-500 rounded-lg'
                : ''
            }`}
            onClick={() => setCurrentTrailer(trailer)}
          >

            <img
              src={trailer.image}
              alt={trailer.title}
              className='rounded-lg w-full aspect-video object-cover brightness-75'
            />

            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 text-white"
            />

          </div>
        ))}

      </div>

      {/* Main Trailer Player */}
      <div className='relative mt-12'>
        <BlurCircle top='-100px' right='-100px'/>

        <ReactPlayer
          key={currentTrailer.videoUrl}
          url={currentTrailer.videoUrl}
          controls={true}
          playing={false}
          className="mx-auto max-w-full"
          width="960px"
          height="540px"
        />

      </div>

    </div>
  )
}

export default TrailersSection