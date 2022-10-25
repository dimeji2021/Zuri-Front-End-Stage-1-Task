import './App.css';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
function App() {
  return (
    <div className='p-m-4'>
      <div className='p-d-flex p-jc-center p-ai-center'>
        <Avatar image="kehindeAregbesola.jpg" size="xlarge" 
        shape="circle" className='p-overlay-badge'>
          <Badge value="4" severity="info" />
        </Avatar>
      </div>
      <div className='p-d-flex p-jc-center'>
        Kehinde Aregbesola
      </div>

      {/* <div class="card">
        <div class="flex flex-column card-container green-container">
          <div class="flex align-items-center justify-content-center h-4rem bg-green-500 font-bold text-white border-round m-2">1</div>
          <div class="flex align-items-center justify-content-center h-4rem bg-green-500 font-bold text-white border-round m-2">2</div>
          <div class="flex align-items-center justify-content-center h-4rem bg-green-500 font-bold text-white border-round m-2">3</div>
        </div>
      </div> */}


    </div>
  );
}

export default App;
