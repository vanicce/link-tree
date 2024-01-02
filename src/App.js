import Profile from "./components/Profile";
import Pages from "./components/Pages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-neutral-100 h-[100dvh] selection:bg-neutral-800 selection:text-neutral-50">
      <Profile/>
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
