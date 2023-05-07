import logo from './logo.svg';
import './App.css';
import { genders } from './assets/js/genders';
import GenderSelectionDropdown from './components/genderselectiondropdown';

function App() {
  return (
     <div className='gender-selection-dropdown-container'>
    <GenderSelectionDropdown />
     </div>
  );
}

export default App;
