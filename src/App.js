import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
import MealPlans from './components/mealplans/MealPlans';
import AICopilot from './components/AICopilot';
import WearableIntegration from './components/WearableIntegration';
import GlobalReach from './components/GlobalReach';
import WhiteLabel from './components/WhiteLabel';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <MealPlans />
      <AICopilot />
      <WearableIntegration />
      <GlobalReach />
      <WhiteLabel />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;


{/* https://fitclubfitness.pages.dev/ */}