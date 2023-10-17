import {useState, useEffect} from 'react';

export default function useDogImages() {
  const [dogs, setDogs] = useState([]);
 
  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/2")
      .then((res) => res.json())
      .then(({ message }) => setDogs(message));
  }, []);
 
  return dogs;
}