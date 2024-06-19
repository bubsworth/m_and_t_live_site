import './Home.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';

const Home = () => {
  return (
    <div className="home">
      <Breadcrumbs />
      <p>Yozu React Skeleton</p>
      <p>In Environment: {process.env.REACT_APP_ENV}</p>
    </div>
  );
};

export default Home;
