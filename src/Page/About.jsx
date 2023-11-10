import Header from '../Component/Header';
import Footer from '../Component/Footer';

const About = () => {
    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
      };
    return (
        <>  
        <Header />
        <main>
            <div className='about'>
                <h2>A Propos</h2>
                <h3>{infos.author}</h3>
                <p> Publié le :{infos.published}</p>
                <p> Adresse: {infos.address}</p>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default About;

// Créez une page à propos, qui affiche les infos du blog (avec les infos issus de la variable envoyées plus bas)