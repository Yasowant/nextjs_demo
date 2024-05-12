'use client';

import { useState } from 'react';
import Card from '@/components/card';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [names, setNames] = useState(['Yasowant', 'Roshan', 'Yash']);
  const name = 'Yasowant';

  const handelClick = (e) => {
    setIsVisible(!isVisible);
  };

  const handelAdd = () => {
    setNames([...names, 'Disney']);
  };

  const cards =
    isVisible && names.map((name, index) => <Card key={name}>{name}</Card>);

  return (
    <>
      <div className="p-20 space-y-4">
        <div>Hello, {name}</div>
        {cards}
        <button onClick={handelClick}>{isVisible ? 'Hide' : 'Show'}</button>
        <button onClick={handelAdd}>Add</button>
      </div>
    </>
  );
}
