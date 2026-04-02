
import Banner from '../layouts/Banner'
import Information from '../layouts/Information'
import Ads from '../layouts/Ads'
import Newarrivals from '../layouts/Newarrivals'
import Ourbestsallers from '../layouts/Ourbestsallers'
import Phoneoftheyear from '../layouts/Phoneoftheyear'
import Specialoffer from '../layouts/Specialoffer'
import { Helmet } from 'react-helmet-async'


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Oribi</title>
        <meta name="description" content="welcome to orebi" />
      </Helmet>
      <Banner />
      <Information />
      <Ads />
      <Newarrivals />
      <Ourbestsallers />
      <Phoneoftheyear />
      <Specialoffer />
    </>
  );
}

export default Home