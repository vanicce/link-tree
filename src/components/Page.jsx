const Pages = (props) => {
  return (
    <>
      <a href={props.link} target='_blank' rel='noreferrer'>
        <div className='rounded-md ring-1 ring-black p-3 m-4 flex items-center justify-center gap-2 whitespace-nowrap'>
          <img src={props.icon} alt='' className='w-7' />
          <p>{props.title}</p>
        </div>
      </a>
    </>
  );
};

export default Pages;
