import './styles/index.scss';

import Header from './components/Header/Header';
import TripList from './components/TripList/TripList';
import Footer from './components/Footer/Footer';
import ModalProvider from './components/ModalProvider/ModalProvider';

function App() {
	return (
		<ModalProvider>
			<Header />
			<main>
				<TripList />
			</main>
			<Footer />
		</ModalProvider>
	);
}

export default App;
