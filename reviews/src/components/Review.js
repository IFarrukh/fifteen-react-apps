import React, { useState } from 'react';
import data from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Review() {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = data[index];

	const checkNumber = (number) => {
		if (number > data.length - 1) {
			return 0;
		}
		if (number < 0) {
			return data.length - 1;
		}

		return number;
	};

	const nextPerson = () => {
		setIndex((index) => {
			const newNum = index + 1;
			return checkNumber(newNum);
		});
	};

	const prevPerson = () => {
		setIndex((index) => {
			const newNum = index - 1;
			return checkNumber(newNum);
		});
	};

	const randomPerson = () => {
		let randomNumber = Math.floor(Math.random() * data.length);
		if (randomNumber === index) {
			randomNumber = index + 1;
		}
		setIndex(checkNumber(randomNumber));
	};

	return (
		<article className='review'>
			<div className='img-container'>
				<img src={image} alt={name} className='person-img' />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='button-container'>
				<button className='prev-btn' onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={nextPerson}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn' onClick={randomPerson}>
				random{' '}
			</button>
		</article>
	);
}
