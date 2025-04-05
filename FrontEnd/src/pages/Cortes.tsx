import React, { useState } from 'react';
import nomeimagem from "../assets/hight fade.jpg";
import nomeimagem2 from "../assets/low fade.jpg";
import nomeimagem3 from "../assets/medium fade.jpg";
import nomeimagem4 from "../assets/moicano.jpeg";
import nomeimagem5 from "../assets/mullet.webp";
import nomeimagem6 from "../assets/undercut.jpg";
import nomeimagem7 from "../assets/corte social.jpeg";
import nomeimagem8 from "../assets/buzz cut.webp";




const Cortes: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(event.target.files[0]);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Upload e Visualização de Imagem</h1>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Pré-visualização:</h3>
                    <img
                        src={nomeimagem}
                        alt="Preview"
                        style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc' }}
                    />
                </div>
            )}
        </div>
    );
};

export default Cortes;