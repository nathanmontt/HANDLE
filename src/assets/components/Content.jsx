import { useState, useEffect } from 'react'

function Content() {
  const images = [
    'src/assets/images/person-1.jpg',
    'src/assets/images/person-2.jpg',
    'src/assets/images/person-3.jpg',
    'src/assets/images/person-4.jpg',
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000);

    // return () => clearTimeout(timeout)
  }, [images.length])

  return (
    <main>
        <img
          src={images[currentImageIndex]}
          alt="Fashion Person"
          className="people"
        />
    </main>
  )
}

export default Content
