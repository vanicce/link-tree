const Pages = (props) => {
  return (
    <>
      <a href={props.link} target='_blank' rel='noreferrer'>
        <div className='rounded-md ring-1 ring-black p-3 m-3 flex items-center justify-center gap-1 whitespace-nowrap md:hover:scale-105 transition'>
          <img src={props.icon} alt='' className='w-7' />
          <p>{props.title}</p>
        </div>
      </a>
    </>
  );
};

export default Pages;
