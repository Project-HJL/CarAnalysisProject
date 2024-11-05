import SobreNos from '../components/SobreNos.tsx';
import AlunosPage from "../components/Alunos.tsx"
import Footer from '../components/Footer.tsx';
import ComoSurgiu from '../components/ComoSurgiu.tsx';

const SobreNosNewPage = () => {
  return (
    <div className="sobre-nos-new-page">
        <body>
          <ComoSurgiu/>
          <SobreNos/>
          <AlunosPage/>
        </body>
        <footer><Footer/></footer>
    </div>
  );
};
export default SobreNosNewPage;