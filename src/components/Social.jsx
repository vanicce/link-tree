const Social = ({link}) => {
  return (
    <div className="rounded-md ring-1 ring-black p-2">
      <a href={link} target='_blank' rel='noreferrer' className="flex gap-2 items-start">
        <img src='https://www.svgrepo.com/show/512317/github-142.svg' alt='' className="w-5"/>
        GitHub
      </a>
    </div>
  );
};

export default Social;
