const Profile = ({ title }) => {
  return (
    <div className="max-w-96 border rounded-lg border-raymond bg-parrot text-gray-50">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1612831819448-f6cae53d3dcf?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1233&q=80"
          alt="card-info"
        />
        <div className="absolute right-0 -bottom-4 uppercase">
          <p className="p-2 bg-raymond border-b-2 text-gray-900 font-bold text-2xl text-right">
            {title}
          </p>
        </div>
      </div>
      <div className="p-4 text-center mt-4">
        <p className="text-center mb-2">
          Amet deserunt velit adipisicing non quis ut culpa ipsum.Voluptate
          eiusmod duis voluptate ad labore sit.
        </p>
        <ul className="text-xl">
          <li className="border-b-2 w-32 mb-4 mx-auto">
            {' '}
            <span role="img" aria-label="check" className="text-sm">
              ✅
            </span>{' '}
            Prepare
          </li>
          <li className="border-b-2 w-32 mb-4 mx-auto">
            {' '}
            <span role="img" aria-label="check" className="text-sm">
              📑
            </span>{' '}
            Learn
          </li>
          <li className="border-b-2 w-32 mb-4 mx-auto">
            {' '}
            <span role="img" aria-label="check" className="text-sm">
              💪
            </span>{' '}
            Grow
          </li>
          <li className="border-b-2 w-32 mb-4 mx-auto">
            {' '}
            <span role="img" aria-label="check" className="text-sm">
              😇
            </span>{' '}
            Achive
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
