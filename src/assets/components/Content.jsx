import { useState, useEffect } from 'react'
import Menu from './Menu'

function Content() {
  const images = [
    '/images/person-1.jpg',
    '/images/person-2.jpg', 
    '/images/person-3.jpg',
    '/images/person-4.jpg'
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <>
      <main class="md:grid grid-cols-2">
        <div className="container-img" class="h-40 md:min-h-dvh md:order-last">
          <img
            src={images[currentImageIndex]}
            alt="Fashion Person"
            class="object-center object-cover w-full h-full"
          />
        </div>

        <div id="container-texts" class="p-10 md:p-15">
          <p className="topic" class="text-gray-400">Our Story</p>
          <h2 className="topic-title" class="mt-5 mb-5 font-bold text-2xl">Wear It <br /> We Handle The Rest</h2>
          <p className="topic-description" class="text-gray-800">
            At HANDLE, we believe fashion goes far beyond simply putting on clothes – it's a form of expression, a statement of who you are and where you're headed. We were born from the need to create pieces that speak to the new generation, those who aren't afraid to dare while also valuing quality and authenticity.

            Our brand emerged with a clear purpose: to democratize style and make fashion accessible to those who want to stand out in their daily lives. Each HANDLE piece is designed for those moments when you need to make a great first impression, whether at a job interview, a special date, or simply walking down the street.

            What sets us apart is our unique perspective on what it means to be fashionable today. It's not just about following trends, but creating your own style that's both contemporary and timeless. Our collections reflect this philosophy: versatile pieces that easily transition from casual to formal, always with that special touch that makes all the difference.

            We understand that today's fashion needs to be more than beautiful – it needs to be smart. That's why we develop pieces that adapt to the fast pace of modern life without compromising style. Each fabric is carefully selected with comfort and durability in mind, because we believe good clothing should accompany you on all your journeys.

            Our vision of fashion is eye-catching in the best sense: we don't scream for attention, but naturally attract it through impeccable cuts, intelligent color combinations, and details that make the difference. It's this seriousness in the creative process that allows us to create pieces that truly impact the look of those who wear them.

            HANDLE represents a new era of fashion, where style meets functionality, where youthful meets professional.

            When you choose us, you're not just buying clothes – you're investing in a better version of yourself.
          </p>
        </div>
      </main>
      
      <Menu />
    </>
  )
}

export default Content