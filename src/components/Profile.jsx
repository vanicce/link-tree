import Social from "./Social";

const Profile = () => {
  const myAge = new Date().getFullYear() - 2004;
  return (
    <div className='flex justify-center items-center flex-col p-3'>
      <img
        src='https://avatars.githubusercontent.com/u/103083001?v=4'
        alt='my github profile'
        className='rounded-full w-2/4 mb-2'
      />
      <h1>Lucas - {myAge}y</h1>
      <div className="flex">
        <Social link={"https://www.github.com/lucwx"} />
      </div>
    </div>
  );
};

export default Profile;
