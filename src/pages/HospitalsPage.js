import HospitalsMap from '../components/HospitalsMap';

const HospitalsPage = () => {
  return (
    <div style={{ textAlign: 'center' }} className="page-container">
      <h2>Local Hospitals</h2>
      <HospitalsMap />
    </div>
  );
};

export default HospitalsPage;
