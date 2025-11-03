import logo from './assets/redis_logo_2025.jpg';
import photo from'./assets/image.png';
import image from'./assets/image2.jpg';
import img from'./assets/image_2.jpg';
import imageZ from'./assets/imagez.jpg';
import imge from'./assets/télécharger.jpeg';
import landing from './assets/landing_page.jpg';
import landing2 from './assets/landing_page2.jpg';
import landing3 from './assets/landing_page3.jpg';
import landing4 from './assets/landing_page4.jpg';
import { BrowserRouter as Router, Route, Routes, link } from 'react-router-dom';
import './App.css'; 
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  document.title = "Landing Page Hacka Redis"; 
  return (
    <div className="App container-fluid">
      <nav className='nav d-flex justify-content-between align-items-center p-3 mb-3 fixed-top bg-body-tertiary'>
        <div className='d-flex align-items-center'>
          {/* <button className='btn btn-dark'><i className='bi bi-flag-fill'></i></button> */}
          <img src={logo} className='border rounded' alt="Logo Redis" style={{ height: '40px' }} />
          <span className='h5 ms-2 fw-bold'>HACKAREDIS</span>
        </div>
        <div>
          
      <a href="https://hackaredis.vercel.app/login" className='btn btn-info text-white fw-semibold px-3 d-flex gap-2 align-items-center'>
                         <i className="bi bi-people-fill"></i> S'inscrire
      </a>
           
        </div>
      </nav>
      <main className='row d-flex flex-column md-flex-md-row flex-lg-row pb-5  mt-5 pt-5' style={{height: '100vh'}}>
        <div className='col-12 mb-4 m-lg-0 col-md-6 col-lg-6 col-xl-6 d-flex flex-column text-start text-wrap'>
          <h1 className='display-1 fw-bold'>Participez au Hackaton officiel</h1>
          <p className='fs-5 text-muted mb-4'>Plateforme dédiée au concours : inscrivez votre équipe et enchaînez les défis du hackaton avec un démarrage automatique du premier défi.</p>
          <div class="d-flex flex-wrap gap-3 mt-4">
              <span class="badge bg-primary fs-6 p-2"><i class="bi bi-calendar-event me-1"></i>15-17 Décembre 2025</span>
              <span class="badge bg-success fs-6 p-2"><i class="bi bi-geo-alt me-1"></i>IUA, corniche</span>
              <span class="badge bg-info fs-6 p-2"><i class="bi bi-people me-1"></i>Équipes de 2-4</span>
          </div>
          <div className='d-flex align-items-center mt-3'>
            <a href="https://hackaredis.vercel.app/signup" className='btn btn-info text-white fw-medium me-3'><i className="bi bi-trophy"></i> Créer mon équipe</a>
            {/* <a href="https://hackaredis.vercel.app/" className='btn btn-white shadow fw-medium me-3'><i className="bi bi-stars"></i>Voir les fonctionnalités</a> */}
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-start'>
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={landing2} class="img-fluid object-fit-cover border rounded" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={landing3} class="img-fluid object-fit-cover border rounded" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={imageZ} class="img-fluid object-fit-cover border rounded" alt="..."/>
              </div>
            </div>
          </div>
        </div>
      </main>


      <section className='row d-flex flex-column flex-md-row flex-lg-row pt-5 my-5  text-white p-4 mb-0 custom-shadow' style={{backgroundColor : " #22B8E5"}}>
        <div className='col-12 mb-4 py-3 m-lg-0 col-md-6 col-lg-6 col-xl-6 d-flex gap-4 flex-md-column flex-lg-column align-items-center'>
          <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
              <div className="card h-100 radius-12 text-center">
                  <div className="card-body p-24">
                      <div className="w-64-px h-64-px d-inline-flex align-items-center justify-content-center bg-gradient-primary text-primary-600 mb-16 radius-12">
                          <i className="bi bi-award-fill h5"></i> 
                      </div>
                      <h6 className="mb-8">Développement & Réseaux</h6>
                      <p className="card-text mb-8 text-secondary-light">Mettre votre talent en développement et/ou en réseau oeuvre pour la résolution de problème.</p>
                  </div>
              </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column text-white text-start text-wrap'>
          <h2 className='display-4 fw-bold text-white'>Relevez des défis passionnants</h2>
          <p className='fs-5 mb-4'>Participez à des défis techniques stimulants conçus pour tester vos compétences en développement ou réseaux, en résolution de problèmes et en innovation.</p>
          <div className='d-flex align-items-center mt-3'>
            <button className='btn  text-black fw-medium me-3' style={{backgroundColor : " #ffff"}}><i className="bi bi-lightning-fill"></i> Commencer un défi</button>
            <button className='btn btn-dark shadow shadow-lg fw-medium me-3'><i className="bi bi-journal-text"></i>Voir les défis</button>
          </div>
        </div>
      </section>

            {/* section d'activité  */}

        <section className='row d-flex flex-column flex-md-row flex-lg-row  text-black p-5  rounded-3  '>
        <div className='col-12 mb-4 py-3 m-lg-0 col-md-6 col-lg-6 col-xl-6 d-flex gap-4 flex-md-column flex-lg-column align-items-center'>
        </div>
         <div>
              {/* style={{color: " #22B8E5"}} */}
              <h3 className="underline-animate text-dark fw-bold"> Les Activités </h3>
 
         </div>
       <div className="container py-5">
       <div className="row text-start g-4">
      <div className="col-md-4 img-hover ">
            <div className="feature-icon m-9">
                  <i className="bi bi-lightbulb"></i>            
              </div>
            <h4 className="fw-bold fs-7 m-6">Première Epreuve </h4>
            <p>Chaque Niveau : Licence 1 (Genie Informatique, Miage et RIT) et  Licence 2 (Genie Informatique, Miage et RIT) vont être soumis à un quiz de 30 min, à la fin de ce quiz ceux qui auront le plus de points seront retenus pour la phase de pratique </p>
            <a href="#" className="feature-link">voir la bare de point fixé <i className="bi bi-arrow-right"></i></a>
          </div>

        
          <div className="col-md-4 img-hover ">
            <div className="feature-icon m-9">
              <i className="bi bi-bar-chart"></i>
            </div>
            <h4 className="fw-bold">Épreuve Finale </h4>
            <p>Dans cette partie, les équipes sélectionnées vont aller développer leur projet sur un thème sur une semaine et bien défini qui leur sera communiqué  et dans cette même partie, les équipes vont présenter leurs projets devant les membres du jury tout en expliquant leur projet</p>
            <a href="loop.js" className="feature-link">le numiteur <i className="bi bi-arrow-right"></i></a>
          </div>

        
          <div className="col-md-4 img-hover">
            <div className="feature-icon m-9">
              <i className="bi  bi-trophy"></i>
            </div>
            <h4 className="fw-bold">Lauréats </h4>
            <p>Dans cette phase, est la phase de remise des prix des équipes victorieuses où toutes les équipes ayant été inscrites dès le début de la première phase seront là. Cette phase sera couronnée par une cérémonie où certains docteurs, du conseil du REDIS et les membres du jury vont prendre place pour nous donner quelques conseils et annoncer les liqueurs de cette hackaton</p>
            <a href="#" className="feature-link">Voir la date de cloture <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
     </div>
      </section>

                     {/* section de calendrier et de lieu  */}

    <h2 className='underline-animate fw-bold' > Calendrier et Lieu </h2>

    <section class="d-flex justify-content-center align-items-center py-5">
  <div class="container text-center">
    <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">

      <div class="col">
        <div class="card h-100 radius-12 text-center shadow-sm">
          <div class="card-body p-4">
            <div class="mb-5 mt-4 pt-4">
              <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                <div className='feature-icon'>
                        <i class="bi bi-award-fill h5"></i>
                </div>
              </div>
              <h6 class="mb-0">Licence 1</h6>
            </div>

            <div class="mt-5 pt-5">
              <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                <div className='feature-icon'>
                <i class="bi bi-award-fill h5"></i>
              </div>
              </div>
              <h6 class="mb-0">Licence 2</h6>
            </div>
            <div class="mt-5 pt-5">
              <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                <div className='feature-icon'>
                <i class="bi bi-award-fill h5"></i>
              </div>
              </div>
              <h6 class="mb-0">Licence 3</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 radius-12 text-center shadow-sm">
          <div class="card-body p-4">
            <div class="mb-5">
              <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                <div className='feature-icon'>
                <i class="bi bi-calendar h5"></i>
              </div>
              </div>
              <h6 class="mb-2">Selection (Phase de Quizz en ligne)</h6>
              <p class="card-text text-secondary fw-bold"> <i class="bi bi-calendar"></i> Mercredi 12 Novembre 2025</p>
            </div>

            <div class="mt-5">
              <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                <div className='feature-icon'>
                <i class="bi bi-calendar h5"></i>
              </div>
               </div>
              <h6 class="mb-2">Selection(Phase de Quizz en ligne)</h6>
              <p class="card-text text-secondary fw-bold">
                <i class="bi bi-calendar"></i> Vendredi 14 Novembre 2025</p>
            </div>
            <div class="mt-5">
              <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                <div className='feature-icon'>
                <i class="bi bi-calendar h5"></i>
              </div>
               </div>
              <h6 class="mb-2">Selection(Phase de Quizz en ligne)</h6>
              <p class="card-text text-secondary fw-bold">
                <i class="bi bi-calendar"></i> Vendredi 14 Novembre 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 radius-12 text-center shadow-sm">
          <div class="card-body p-4">
            <div class="mt-4 pt-4">
              <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                <div className='feature-icon'>
                <i class="bi bi-code-slash h5"></i>
              </div>
              </div>
              <h6 class="mb-2">Développement & Réseaux (Phase d'Épreuve)</h6>
                      <h6 class="mb-2"> <i class="bi bi-geo-alt"></i> chez chacun </h6>
              <p class="card-text text-secondary"> <i class="bi bi-calendar"></i>  Vendredi 14 Novembre 2025</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 radius-12 text-center shadow-sm">
          <div class="card-body p-4">
            <div class="">
              <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                <div className='feature-icon'>
                <i class="bi bi-award"></i>
              </div>
              </div>
              <h6 class="mb-2"> laureat </h6>
              <h6 class="mb-2"> <i class="bi bi-geo-alt"></i> Bonoumin amphi 1</h6>
              <p class="card-text text-secondary"> <i class="bi bi-calendar"></i>  Vendredi 26 Novembre 2025</p>
              <p class="card-text text-secondary"> nous allons dans en ce moment présenter les differents vinqueurs des different niveau et leurs remettre leur prix ce moment sera cloturer par l'intervention des membres du juré et des différents partenaires et anciens de IUA REDIS  </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  <section id="themes" class="py-5">
      <div class="container py-5">
          <h2 class="underline-animate underline-dark display-5 text-dark fw-bold text-center mb-5">Thèmes du Hackaton</h2>
          <div class="row g-4">
              <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                          <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                              <i class="bi bi-globe text-primary fs-2"></i>
                          </div>
                          <h4 class="card-title">Développement Durable</h4>
                          <p class="card-text">Créez des solutions technologiques pour relever les défis environnementaux et promouvoir un avenir durable.</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                          <div class="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                              <i class="bi bi-heart-pulse text-success fs-2"></i>
                          </div>
                          <h4 class="card-title">Santé & Bien-être</h4>
                          <p class="card-text">Innovations dans les soins de santé, le bien-être mental et l'accessibilité médicale pour tous.</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                          <div class="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                              <i class="bi bi-shield-check text-info fs-2"></i>
                          </div>
                          <h4 class="card-title">Sécurité & Vie Privée</h4>
                          <p class="card-text">Développez des solutions pour protéger les données et la vie privée dans un monde numérique.</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                          <div class="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                              <i class="bi bi-robot text-warning fs-2"></i>
                          </div>
                          <h4 class="card-title">IA & Machine Learning</h4>
                          <p class="card-text">Exploitez l'intelligence artificielle pour résoudre des problèmes complexes et automatiser des processus.</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                          <div class="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                              <i class="bi bi-cash-coin text-danger fs-2"></i>
                          </div>
                          <h4 class="card-title">FinTech & Inclusion</h4>
                          <p class="card-text">Solutions financières innovantes pour améliorer l'accès aux services bancaires et financiers.</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                          <div class="bg-secondary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                              <i class="bi bi-house text-secondary fs-2"></i>
                          </div>
                          <h4 class="card-title">Villes Intelligentes</h4>
                          <p class="card-text">Technologies pour des villes plus efficaces, durables et agréables à vivre.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

 <section>
        
      <h2 className=' underline-animate my-6 py-6 fs-7' style={{color: " #22B8E5"}}> Nos Partenaires</h2>
      {/* <div className="container text-center py-5">
  <div className="row">
    <div className="col-lg-4">
      <img
        src={imge}
        className="rounded-circle border border-2 border-transparent"
        alt="photo"
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
      />
      <h2 className="fw-bold fs-4 my-2">le J Steplai</h2>
      <p className="fs-5">
        Enseignant chercheur à l’Université ESATIC, expert en Java, Node.js et Viano.
      </p>
     <button
        className="btn btn-custom px-4 border border-2 badge" style={{ backgroundColor: "#22B8E5", borderColor: "#22B8E5" }}>
        Vvoir les details »
      </button>    
       </div>

    <div className="col-lg-4">
      <img
        src={img}
        className="rounded-circle border border-2 border-transparent"
        alt="photo"
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
      />
      <h2 className="fw-bold fs-4 my-2">ELIE LEROI</h2>
      <p className="fs-5">
        Enseignant chercheur à l’Université ESATIC, expert en Java, Node.js et Viano.
      </p>
    <button
        className="btn btn-custom px-4 border border-2 badge" style={{ backgroundColor: "#22B8E5", borderColor: "#22B8E5" }}>
        Vvoir les details »
    </button>   
</div>

    <div className="col-lg-4">
      <img
        src={image}
        className="rounded-circle border border-2 border-transparent"
        alt="photo"
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
      />
      <h2 className="fw-bold fs-4 my-2">LE ROI </h2>
      <p className="fs-5">
        Enseignant chercheur à l’Université ESATIC, expert en Java, Node.js et Viano.
      </p>
    <button
        className="btn btn-custom px-4 border border-2 badge" style={{ backgroundColor: "#22B8E5", borderColor: "#22B8E5" }}>
        Vvoir les details »
    </button>     </div>
  </div>
</div>  */}

 </section>

<footer
      className="text-white pt-5 pb-3 mt-5 row d-flex"
      style={{ backgroundColor: '#22B8E5' }}
    >
      <Container>
        <Row className="align-items-start text-center text-md-start">
          {/* Logo et description */}
          <Col md={4} className="mb-4 mb-md-0">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <img
                src={logo}
                alt="Logo"
                className="rounded-circle mb-3 border border"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <p className="small mb-0">
prêt à relever le défi, tout en motivant ton talent, viens vivre une expérience pas comme les autres dans le développement et le réseau.</p>            </div>
          </Col>

          {/* Liens rapides */}
          <Col md={4} className="mt-7">
            <h5 className="fw-bold mb-6 ps-5">Liens utiles</h5>
            <ul className=" ps-5  ">
              <li><a href="#home" className="text-white underline-animate-dark-a text-decoration-none  ">Accueil</a></li>
              <li><a href="#about" className="text-white underline-animate-dark-a text-decoration-none">À propos</a></li>
              <li><a href="#events" className="text-white underline-animate-dark-a text-decoration-none">Événements</a></li>
              <li><a href="#contact" className="text-white underline-animate-dark-a text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Réseaux sociaux */}
          <Col md={4} className="text-center ">
            <h5 className="fw-bold mb-3">Suivez-nous</h5>
            <div className="d-flex justify-content-center  gap-3">
              <a href="#" className="text-white fs-4"><FaTwitter /></a>
              <a href="#" className="text-white fs-4"><FaInstagram /></a>
              <a href="#" className="text-white fs-4"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        {/* Ligne de séparation */}
        <hr className="border-light my-4" />

        {/* Copyright */}
        <Row>
          <Col className="text-center small">
            <a href="#" class="underline-animate-dark-a text-white">Developed by our team</a>.
          </Col>
          <Col className="text-center small">
            &copy; {new Date().getFullYear()} HackaRedis. Tous droits réservés.
          </Col>
        </Row>
      </Container>
    </footer>
    
 
 

    </div>
     
  );
}

export default App;  