import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Contact = () => {
    return (
        <>
        <Header />
        <main>
        <h2>Contact</h2>
        <form>
            <div className='formulaire'>
                <label for="lastname">Nom</label>
                <input type="text" id="nom"></input>
            </div>
            <div className='formulaire'>
                <label for="firstname">Prénom</label>
                <input type="text" id="nom"></input>
            </div>
            <div className='formulaire'>
                <label for="message">Message</label>
                <input className='text' type="text" id="nom"></input>
            </div>
            <div className='formulaire'>
                <button type="submit">Envoyer mon message</button>
            </div>
        </form>
    </main>
    <Footer />
    </>
  );
}

export default Contact;

// Créez une page contact avec un formulaire de contact (non fonctionnel) avec un champs message, nom et prénom