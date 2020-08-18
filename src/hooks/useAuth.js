const useAuth = () => {
  return localStorage.getItem("User data") !== null;
};

export default useAuth;
