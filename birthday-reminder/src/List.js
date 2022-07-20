import React from 'react';

export default function List({ people }) {
	return (
		<>
			{people.map((person) => {
        const { age, id, name, image } = person;
				return <article key={id} className="person">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
			})}
		</>
	);
}
