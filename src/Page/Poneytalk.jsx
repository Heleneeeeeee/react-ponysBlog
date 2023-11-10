import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Poneytalk = () => {
const handleFormSubmit = (event) => {
    console.log('hello')
}
    return (
        <>
        <Header />
        <main>
        <h2>Poneytalk</h2>
            <div className='formulaire'>
                <button>
                <input type="submit" onClick={handleFormSubmit}/>
                </button>
            </div>
        </main>
    <Footer />
    </>
  );
}

export default Poneytalk;