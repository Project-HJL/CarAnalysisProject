import WaveSection from '../components/Wave.tsx';
import CarAnalysysPage from '../components/CarAnalysis.tsx';
import PassosDoDiagnostcio from '../components/Passos.tsx';
import SobreNos from '../components/SobreNos.tsx';
import AlunosPage from '../components/Alunos.tsx';
import Footer from '../components/Footer.tsx';



const HomePage = () => {
  return (
    <div className="home-page">
      <body>
          <WaveSection/>
          <CarAnalysysPage/>
          <PassosDoDiagnostcio/>
          <SobreNos/>
          <AlunosPage/>
      </body>

      <footer><Footer/></footer>
    </div>
  );
};

export default HomePage;