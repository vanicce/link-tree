const Pages = () => {
  return (
    <>
    <p className="text-center">you can see something useful here: </p>
    <a href='https://open.spotify.com/playlist/6ddhyqtVZj1VJ9dUU4dp1c?si=c9550d169d85466a' target="_blank" rel="noreferrer">
      <div className='rounded-md ring-2 ring-black p-3 m-4 flex items-center justify-center gap-2'>
        <img src="https://www.svgrepo.com/show/512899/spotify-162.svg" alt=""  className="w-8"/>
        My Spotify Playlist
      </div>
    </a>
    </>
  );
};

export default Pages;
