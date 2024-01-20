import React from 'react';
import { Carousel } from 'react-bootstrap';
import todoList from './images/toDoList.png';
import Calculator from './images/Calculator.jpg';
import Chronometer from './images/Chronometer.jpg';
import VotingPage from './images/VotingPage.png';
import styles from './styles/projects.module.css';
import { FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProjectsTechnologys from '../Layout/ProjectsTechnologys';


const MyProjects = () => {
  const projects = [
    { image: todoList, title: 'toDoList', githubLink: 'https://github.com/GMoraisz/toDoList' },
    { image: Calculator, title: 'Calculadora', githubLink: 'https://github.com/GMoraisz/Calculadora' },
    { image: Chronometer, title: 'Cronômetro Inteligente', githubLink: 'https://github.com/GMoraisz/Cronometro' },
    { image: VotingPage, title: 'VotingPage Futebol', githubLink: 'https://github.com/GMoraisz/SoccerVotingPage' },
    { image: VotingPage, title: 'Portfólio Pessoal', githubLink: 'link-para-o-repositorio-do-portfolio' },
  ];

  return (
    <div className={styles.divContainer}>
      <h1 className={styles.title}>
        Meus <br />
        Projetos
      </h1>
      <Carousel className={styles.carousel}>
        {projects.map((project, index) => (
          <Carousel.Item className={styles.customCarousel} key={index}>
            <img className={styles.carouselImage} src={project.image} alt={`Imagem Projeto, ${project.title}`} />
            <Carousel.Caption className={styles.carouselCaption}>
              <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
              <h2>{project.title}</h2>
            </Carousel.Caption>
          </Carousel.Item>
          
        ))}
      </Carousel>
      <div className={styles.rightContainer}> 
        <ProjectsTechnologys/>
       </div>
       
    </div>
  )
}

export default MyProjects
