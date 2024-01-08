const Social = (props) => {
  return (
    <a href={props.link} target='_blank' rel='noreferrer'>
      <div className='rounded-lg ring-1 ring-black p-2 md:hover:scale-110 transition'>
        <img
          src={props.icon}
          alt=''
          className='w-7'
        />
      </div>
    </a>
  );
};

export default Social;
