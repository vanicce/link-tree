import Social from "./Social";

const Profile = () => {
  const myAge = Math.floor(
    (new Date() - new Date("2004-06-01")) / (365 * 24 * 60 * 60 * 1000)
  );

  const social = [
    {
      link: "https://www.github.com/lucwx",
      icon: "https://www.svgrepo.com/show/512317/github-142.svg",
    },
    {
      link: "https://www.linkedin.com/in/pedro-lucas-santos-silva",
      icon: "https://www.svgrepo.com/show/521725/linkedin.svg",
    },
    {
      link: "https://www.x.com/lucassun_",
      icon: "https://www.svgrepo.com/show/513008/twitter-154.svg",
    },
  ];

  const socials = social.map((social) => (
    <Social link={social.link} icon={social.icon} />
  ));
  return (
    <div className='flex justify-center items-center flex-col p-3 '>
      <img
        src='https://avatars.githubusercontent.com/u/103083001?v=4'
        alt='my github profile'
        className='rounded-full ring ring-[#4751F1] ring-offset-2 w-2/4 md:w-1/3 mb-2'
      />
      <h1>Lucas - {myAge}y</h1>
      <p className='text-center'>
        a little lost but always in search of knowledge.
      </p>
      <div className='flex m-2 gap-3'>{socials}</div>
    </div>
  );
};

export default Profile;
