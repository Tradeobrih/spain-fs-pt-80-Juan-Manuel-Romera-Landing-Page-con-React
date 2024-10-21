import React from 'react';
import Card from './Card';

function CardSection() {
  const cardsData = [
    { title: 'Card title', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', imageUrl: 'https://picsum.photos/200' },
    { title: 'Card title', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', imageUrl: 'https://picsum.photos/id/237/200' },
    { title: 'Card title', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', imageUrl: 'https://picsum.photos/seed/picsum/200' },
    { title: 'Card title', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', imageUrl: 'https://picsum.photos/200' },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-center">
          {cardsData.map((card, index) => (
            <Card 
              key={index} 
              title={card.title} 
              text={card.text} 
              imageUrl={card.imageUrl} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardSection;
