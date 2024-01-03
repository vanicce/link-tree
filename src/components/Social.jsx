const Social = (props) => {
  return (
    <a href={props.link} target='_blank' rel='noreferrer'>
      <div className='rounded-md ring-1 ring-black p-2 flex gap-2 items-start'>
        <img
          src={props.icon}
          alt=''
          className='w-5'
        />
      </div>
    </a>
  );
};

export default Social;
