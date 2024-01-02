const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='fixed bottom-0 text-center border-t-2 p-2'>
      Made With <a href="https://www.react.dev" className="underline"> React</a> and <a href="https://www.tailwindcss.com" className="underline">TailwindCSS</a> Lucas - {year}
    </div>
  );
};

export default Footer;
