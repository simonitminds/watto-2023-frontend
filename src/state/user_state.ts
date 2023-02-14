import { atom, useAtom } from 'jotai';

const defaultUser = {
  isLoggedIn: false,
  username: '',
};

const userAtom = atom(defaultUser);

export const useUserState = () => {
  const [user] = useAtom(userAtom);
  return user;
};

export const useSetUserState = () => {
  const [, setUser] = useAtom(userAtom);
  return setUser;
};
