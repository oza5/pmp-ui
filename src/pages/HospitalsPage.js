import HospitalList from "../components/HospitalList";
import HospitalsMap from "../components/HospitalsMap";

const HospitalsPage = () => {
  return (
    <div style={{ textAlign: "center" }} className="page-container">
      <h2>Local Hospitals</h2>
      <div style={{ paddingBottom: "15px" }}></div>
      <HospitalList zipCode={111} />
      <div style={{ paddingBottom: "15px" }}></div>
      <HospitalsMap />
    </div>
  );
};

export default HospitalsPage;
