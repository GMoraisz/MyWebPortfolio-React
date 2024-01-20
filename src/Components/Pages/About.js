import React, { useState } from 'react';
import styles from './about.module.css';
import imgBack from './images/Pikachuwalp.png';
import imgPerf from './images/euPerfil.jpeg';
import SeeMore from '../Buttons/SeeMore';
import CurrentStudying from '../Layout/CurrentStudying';


const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.profileArea}>
      <div className={styles.card}>
        <div className={styles.imgBack}>
          <img src={imgBack} alt='2 Pikachus' />
        </div>
        <div className={styles.imgPerf}>
          <img src={imgPerf} alt='Eu de Perfil' />
        </div>
        <div className={styles.mainText}>
          <h2> Gabriel Morais</h2>
          <p>
            Meu nome é Gabriel Morais, tenho 19 anos e atualmente estou cursando Análise de Sistemas na FEMA, onde concentro meus esforços no desenvolvimento de habilidades em programação, com foco especial em tecnologias web.
            {showMore ? (
              <> <br />
                Demonstro uma notável facilidade de aprendizado, permitindo-me assimilar rapidamente novas informações e tecnologias. Meu compromisso atual é aprimorar minhas habilidades na área de Front-End. Comecei consolidando meu conhecimento nos conceitos fundamentais e agora estou me aventurando em aprendizados mais avançados, com ênfase no React.
                Além disso, possuo um conhecimento intermediário em Inglês, o que facilita uma comunicação eficaz e a leitura de documentação técnica. 
                <br/> Estou em busca de oportunidades desafiadoras na área de Front-End, onde posso aplicar e expandir minhas habilidades técnicas, contribuindo para projetos inovadores. Minha paixão pela programação, minha determinação em aprender constantemente e minha habilidade em inglês fazem de mim um candidato entusiasmado e comprometido com o sucesso.
                Estou ansioso para enfrentar novos desafios e contribuir para o crescimento e sucesso de projetos inovadores.
              </>
            ) : null}
          </p>
          <SeeMore onClick={handleToggleText} showMore={showMore} />
        </div>
        <div className={styles.Studying}>
           <CurrentStudying/>
        </div>
      </div>

    </div>



  );
}

export default About;
