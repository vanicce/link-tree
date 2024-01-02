const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='fixed bottom-0 flex justify-center w-screen'>
      {year} &copy;
    </div>
  );
};

export default Footer;
