import "./Cortes.css";

// import card cortes
import CardCortes from "../componentes/CardCortes";

import nomeimagem from "../assets/hight fade.jpg";
import nomeimagem2 from "../assets/low fade.jpg";
import nomeimagem3 from "../assets/medium fade.jpg";
import nomeimagem4 from "../assets/moicano.jpeg";
import nomeimagem5 from "../assets/mullet.webp";
import nomeimagem6 from "../assets/undercut.jpg";
import nomeimagem7 from "../assets/corte social.jpeg";
import nomeimagem8 from "../assets/buzz cut.webp";



function Cortes() {
    return (
        <main>
            <section className="sectionFlex">
                <CardCortes 
                    image={nomeimagem}
                    title="High Fade"
                />
                <CardCortes 
                    image={nomeimagem2}
                    title="High Fade"
                />
                <CardCortes 
                    image={nomeimagem3}
                    title="High Fade"
                />
                <CardCortes 
                    image={nomeimagem4}
                    title="High Fade"
                />
                <CardCortes 
                    image={nomeimagem5}
                    title="High Fade"
                />
                <CardCortes 
                    image={nomeimagem6}
                    title="High Fade"
                />
                <CardCortes 
                    image={nomeimagem7}
                    title="High Fade"
                />
                <CardCortes 
                    image={nomeimagem8}
                    title="High Fade"
                />
            </section>
        </main>
    );
};

export default Cortes;  