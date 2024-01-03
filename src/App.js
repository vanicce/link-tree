import Profile from "./components/Profile";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='bg-neutral-100 h-[100dvh] selection:bg-neutral-800 selection:text-neutral-50 flex justify-center'>
      <div className="w-full max-w-lg">
      <Profile />
      <p className='text-center'>you can see something useful here: </p>
      <Page />
      <Page />
      <Page />
      <Page />
      <Page />
      <Page />
      <Page />
      <Footer />
      </div>
    </div>
  );
}

export default App;
