import '../components/styles/Rent.css';
import { useNavigate } from 'react-router-dom';
import DatePicker from '../components/DatePicker';
import BackGroundContext from '../contexts/BackgroundContext';
import useDocumentTitle from '../components/useDocumentTitle';

function Rent() {
  useDocumentTitle('Phaeton · Rent');

  const navigate = useNavigate();

  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}${month}${year}`;
  }

  const onSearchFn = (startDate, endDate) => {
    if (startDate && endDate) {
      const formattedStartDate = formatDate(startDate);
      const formattedEndDate = formatDate(endDate);
      navigate(`/rental/from/${formattedStartDate}/end/${formattedEndDate}`);
    }
  };

  return (
    // Component with the background
    <div>
      <BackGroundContext.Provider value="component-background rental-bg">
        <h1 className="page-title mobile">Car Rental</h1>
        <h1 className="page-title desktop">Car Rental - Choose a Car for Your Needs</h1>
        <DatePicker
          onSearch={(startDate, endDate) => {
            onSearchFn(startDate, endDate);
          }}
        />
      </BackGroundContext.Provider>
    </div>
  );

  // Page with the date values
}
export default Rent;
