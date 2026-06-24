import { useState, useEffect } from "react";
//react에서 {}안의 훅을 가져옴

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  isLoggedIn: boolean;
};
//user타입 정의

type UseUserReturn = {
  user: User | null;
  isLoading: boolean;
  login: (id: number) => void;
  logout: () => void;
  updateUser: (updated: Partial<User>) => void;
};
//useUser 훅이 반환할 값들 정의

function useUser(): UseUserReturn {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    console.log("현재 유저 정보:", user);
  }, [user]);

  const login = async (id: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setUser({
        id: data.id,
        name: data.name,
        email: data.email,
        age: 0,
        isLoggedIn: true,
      });
    } catch (error) {
      console.error("유저 정보를 불러오는데 실패했습니다:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updated: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...updated } : null));
  };

  return { user, isLoading, login, logout, updateUser };
}

export default useUser;