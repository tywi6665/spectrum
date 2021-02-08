import MainContainer from "./Components/Containers/MainContainer";
import SectionContainer from "./Components/Containers/SectionContainer";
import SubContainer from "./Components/Containers/SubContainer";
import Spectrum from "./Components/Spectrum";

import "./App.scss";

function App() {
  return (
    <MainContainer>
      <SectionContainer sectionName="header">
        <h1>Spectrum</h1>
        {/* <Wave /> */}
      </SectionContainer>
      <SectionContainer sectionName="side-1">
        <p>This is a section Container</p>
      </SectionContainer>
      <SectionContainer sectionName="spectrum">
        <Spectrum />
      </SectionContainer>
      <SectionContainer sectionName="side-2">
        <p>This is a section Container</p>
      </SectionContainer>
      <SectionContainer sectionName="bottom-1">
        <p>This is a section Container</p>
      </SectionContainer>
      <SectionContainer sectionName="bottom-2">
        <p>This is a section Container</p>
      </SectionContainer>
    </MainContainer>
  );
}

export default App;
