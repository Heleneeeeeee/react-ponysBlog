import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Poneytalk = () => {
const handleFormSubmit = (event) => {
    const sentences= ["Hello","Buongiorno", "Hola", "Bom dia","nĭ hăo", "Konnichi wa", "Coucou", "Salamat pagi", "Salam aleykoum"]
    const random = sentences[Math.floor(Math.random() * sentences.length)];
    console.log(random);
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