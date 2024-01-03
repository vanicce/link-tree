import Profile from "./components/Profile";
import Page from "./components/Page";

function App() {
  const sites = [
    {
      title: "my spotify playlist",
      link: "https://open.spotify.com/playlist/6ddhyqtVZj1VJ9dUU4dp1c?si=c9550d169d85466a",
      icon: "https://www.svgrepo.com/show/512899/spotify-162.svg",
    },
    {
      title: "linux terminal cheatsheet",
      link: "https://linuxcommandlibrary.com/",
      icon: "https://www.svgrepo.com/show/503411/linux.svg"
    },
    {
      title: "my portfolio",
      link: "https://lucas-portfolio-navy.vercel.app",
      icon: "https://www.svgrepo.com/show/433647/pc1-f.svg"
    }
  ];
  const sitePages = sites.map((site) => (
    <Page title={site.title} link={site.link} icon={site.icon} />
  ));
  return (
    <div className='bg-neutral-100 selection:bg-neutral-800 selection:text-neutral-50 flex justify-center '>
      <div className='w-full max-w-lg h-full min-h-[100dvh]'>
        <Profile />
        <p className='text-center'>you can see something useful here: </p>
        {sitePages}
      </div>
    </div>
  );
}

export default App;
