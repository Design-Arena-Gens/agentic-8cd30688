'use client'

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>🌊 EXPOMER 2ème Édition</h1>
        <p>Concept Innovation & Durabilité - Bureau ECOGiC</p>
      </header>

      <div className="concept-grid">
        <div className="card">
          <h2><span className="icon">🎯</span> Thème Principal</h2>
          <h3>"L'Océan Connecté : Innovation & Préservation"</h3>
          <p style={{marginTop: '15px', color: '#666'}}>
            Une exposition interactive qui fusionne technologie maritime moderne et préservation écologique,
            mettant en valeur les solutions innovantes pour un océan durable.
          </p>
        </div>

        <div className="card">
          <h2><span className="icon">💡</span> Axes Stratégiques</h2>
          <ul>
            <li>Technologies maritimes intelligentes</li>
            <li>Énergies marines renouvelables</li>
            <li>Biodiversité et conservation</li>
            <li>Économie bleue circulaire</li>
            <li>Formation et sensibilisation</li>
          </ul>
        </div>

        <div className="card">
          <h2><span className="icon">🚀</span> Innovations Clés</h2>
          <ul>
            <li>Pavillon expérience immersive VR/AR</li>
            <li>Démos en temps réel de technologies</li>
            <li>Hackathon maritime 48h</li>
            <li>Espace startup & innovation</li>
            <li>Conférences experts internationaux</li>
          </ul>
        </div>

        <div className="card">
          <h2><span className="icon">🤝</span> Partenariats</h2>
          <h3>Cibles prioritaires :</h3>
          <ul>
            <li>Universités & centres de recherche</li>
            <li>Entreprises tech maritimes</li>
            <li>ONGs environnementales</li>
            <li>Institutions gouvernementales</li>
            <li>Investisseurs & fonds verts</li>
          </ul>
        </div>

        <div className="card">
          <h2><span className="icon">📊</span> Objectifs Mesurables</h2>
          <ul>
            <li>10,000+ visiteurs (vs 6,000 édition 1)</li>
            <li>50+ exposants internationaux</li>
            <li>25 conférences & ateliers</li>
            <li>15 projets innovants primés</li>
            <li>30% de participants internationaux</li>
          </ul>
        </div>

        <div className="card">
          <h2><span className="icon">🌍</span> Impact ECOGiC</h2>
          <ul>
            <li>Positionnement leader ingénierie durable</li>
            <li>Visibilité réseau international</li>
            <li>Opportunités projets collaboratifs</li>
            <li>Recrutement talents spécialisés</li>
            <li>Publication études & recherches</li>
          </ul>
        </div>
      </div>

      <div className="timeline">
        <h2>📅 Roadmap de Réalisation</h2>

        <div className="timeline-item">
          <div className="timeline-date">Mois 1-2</div>
          <div className="timeline-content">
            <h3>Phase Conception</h3>
            <p>Validation concept, formation comité organisation, budget prévisionnel, prospection partenaires majeurs</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Mois 3-4</div>
          <div className="timeline-content">
            <h3>Phase Développement</h3>
            <p>Sécurisation site, création identité visuelle, lancement campagne communication, contrats exposants</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Mois 5-6</div>
          <div className="timeline-content">
            <h3>Phase Production</h3>
            <p>Construction pavillons, installation tech, recrutement équipes, formation guides, tests systèmes</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Mois 7</div>
          <div className="timeline-content">
            <h3>Lancement & Événement</h3>
            <p>Semaine presse, inauguration officielle, événement 5 jours, networking, remise prix</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Mois 8</div>
          <div className="timeline-content">
            <h3>Bilan & Suivi</h3>
            <p>Rapport impact, enquête satisfaction, capitalisation contacts, planification édition 3</p>
          </div>
        </div>
      </div>

      <div className="concept-grid">
        <div className="card">
          <h2><span className="icon">💰</span> Budget Estimatif</h2>
          <ul>
            <li>Infrastructure & logistique : 35%</li>
            <li>Communication & marketing : 25%</li>
            <li>Contenu & intervenants : 20%</li>
            <li>Technologie & digital : 15%</li>
            <li>Imprévus & contingence : 5%</li>
          </ul>
        </div>

        <div className="card">
          <h2><span className="icon">🎁</span> Éléments Différenciants</h2>
          <ul>
            <li>Application mobile interactive</li>
            <li>Espace gamification & challenges</li>
            <li>Live streaming sessions majeures</li>
            <li>Village startups maritimes</li>
            <li>Zone démonstration en bassin</li>
          </ul>
        </div>

        <div className="card">
          <h2><span className="icon">📈</span> Métriques de Succès</h2>
          <ul>
            <li>Taux satisfaction visiteurs &gt; 85%</li>
            <li>Couverture médiatique nationale</li>
            <li>ROI sponsors 1:3 minimum</li>
            <li>5+ partenariats stratégiques signés</li>
            <li>Impact social mesurable post-event</li>
          </ul>
        </div>
      </div>

      <div className="cta">
        <h2>🎯 Prochaines Étapes</h2>
        <p>
          Ce concept positionne EXPOMER 2 comme l'événement maritime de référence,
          combinant innovation technologique et engagement environnemental,
          tout en renforçant l'expertise ECOGiC dans le secteur.
        </p>
        <button className="btn" onClick={() => {
          const content = document.querySelector('.container');
          if (content) {
            window.print();
          }
        }}>
          📄 Télécharger la Proposition
        </button>
      </div>

      <style jsx>{`
        @media print {
          body {
            background: white;
          }
          .btn {
            display: none;
          }
          .card, .timeline, .cta {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  )
}
