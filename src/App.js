import './App.css';

import Navbar from './components/Navbar/Navbar'

import Dough from './pages/Dough/Dough'



function App() {
  return (
    <div>
      <Navbar></Navbar>


      <div class="tab-content" id="nav-tabContent">
        <div class=" tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <Dough />
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
      </div>



    </div>
  );
}

export default App;
