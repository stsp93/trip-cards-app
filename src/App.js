import './styles/index.scss';

import Header from './components/Header/Header';
import Trips from './components/Trips/Trips';
import Footer from './components/Footer/Footer';
import ModalProvider from './components/ModalProvider/ModalProvider';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
	return (
		<ModalProvider>
			<ThemeToggle />
			<Header />
			<main>
				<Trips />
			</main>
			<Footer />
		</ModalProvider>
	);
}

export default App;
