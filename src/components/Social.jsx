const Social = ({ link }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <div className='rounded-md ring-1 ring-black p-2 flex gap-2 items-start'>
        <img
          src='https://www.svgrepo.com/show/512317/github-142.svg'
          alt=''
          className='w-5'
        />
        GitHub
      </div>
    </a>
  );
};

export default Social;
