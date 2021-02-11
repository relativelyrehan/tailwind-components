import { signout, useSession } from 'next-auth/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import useModal from '../../utils/useModal';
import Avatar from '../Avatar/Avatar';
import Dropdown from '../Dropdown/Dropdown';
import Modal from '../Modal/Modal';
import Signup from '../Signup/Signup';

const handleSignout = () => {
  signout();
  document.location.reload();
};

const Navbar = () => {
  const { isShowing, toggle } = useModal();
  const [notification, setnotification] = useState();
  const [session, loading] = useSession();
  useEffect(() => {
    if (session) {
      fetch('/api/trade/notifications')
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setnotification(data.number);
          }
        });
    }
  }, [session]);
  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <nav className="flex w-full shadow-md  px-4 justify-between">
        <Link href="/">
          <h1 className="text-3xl cursor-pointer py-3">Prototion</h1>
        </Link>
        {session ? (
          <div className="dropdown relative py-3">
            <Avatar
              className="relative"
              size="12"
              onHover={toggle}
              src={session.user.image}
            ></Avatar>
            {notification > 0 ? (
              <div className="absolute px-1 -right-1 top-2 text-xs text-white bg-red-500 rounded-full">
                {notification > 9 ? 9 : notification}
              </div>
            ) : undefined}

            <Dropdown className="grid w-56">
              <Link href="/dashboard">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer ">
                  Dashboard
                </li>
              </Link>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <div
                  onClick={handleSignout}
                  role="button"
                  tabIndex={0}
                  onKeyDown={handleSignout}
                >
                  {' '}
                  Logout
                </div>
              </li>
            </Dropdown>
          </div>
        ) : (
          <button
            onClick={toggle}
            className="py-3 justify-self-end bg-red-400 py- px-2 ml-8 text-white rounded cursor-pointer select-none"
          >
            Sign Up
          </button>
        )}
      </nav>
      <Modal isShowing={isShowing} hide={toggle}>
        <Signup />
      </Modal>
    </div>
  );
};

export default Navbar;
