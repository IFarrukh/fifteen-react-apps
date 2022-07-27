import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
	const [loading, setLoading] = useState(false);
	const [tour, setTour] = useState([]);

	const removeTour = (id) => {
		const newTour = tour.filter((t) => t.id !== id);

		setTour(newTour);
	};

	const fetchTours = async () => {
		setLoading(true);
		try {
			const res = await fetch(url);
			const tours = await res.json();
			setLoading(false);
			setTour(tours);
		} catch (error) {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	} else {
		return (
			<main>
				<Tours tours={tour} removeTour={removeTour} />
			</main>
		);
	}
}

export default App;
