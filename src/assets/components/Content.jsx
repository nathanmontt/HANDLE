import { useEffect, useState } from "react";

function Content() {
  const imagesArray = [
    'src/assets/images/person-1.jpg',
    'src/assets/images/person-2.jpg',
    'src/assets/images/person-3.jpg',
    'src/assets/images/person-4.jpg'
  ];

  const [currentIndex, setCurrentndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentndex((prevIndex) => {
        prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1;
      })
    }, 1000);

    return () => clearInterval(interval);
  }, [imagesArray.length]);

  return (
    <main>
      <img src={imagesArray[currentIndex]} alt="images" />

      <img src="src/assets/images/person-1.jpg" alt="" />
    </main>
  )
}

export default Content
