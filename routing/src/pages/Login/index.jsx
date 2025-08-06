import { useAuth } from "../../context/auth-context";

export const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const onLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <h1>This is Login page</h1>
      {!isLoggedIn && (
        <label htmlFor="">
          Mobile No :
          <input type="text" placeholder="enter mobile number" maxLength={10} />
        </label>
      )}

      <button onClick={onLoginClick}>{!isLoggedIn ? "Login" : "Logout"}</button>
    </>
  );
};
