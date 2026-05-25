import { useContext } from "react"
import { RegisterProviderContext } from "../Context/Register.Context"
import { registerUser, loginUser } from "../Api/authApi"

function RegisterHook() {

  // get state and functions from context api
  const {
    error,
    loading,
    result,
    setError,
    setLoading,
    setResult
  } = useContext(RegisterProviderContext)


  // register user function
  const register = async (
    email,
    password,
    month,
    day,
    year,
    userName,
    lastName
  ) => {

    try {

      // check if any field is empty
      if (
        !email.trim() ||
        !password.trim() ||
        !month ||
        !day ||
        !year ||
        !userName.trim() ||
        !lastName.trim()
      ) {
        return setError("All fields are required");
      }

      // validate username length
      if (userName.trim().length <= 2) {
        return setError("name must be more than 2 word");
      }

      // validate password length
      if (password.trim().length <= 6) {
        return setError("password must be more than 6 word")
      }

      // clear old error
      setError(null);

      // start loading
      setLoading(true);

      // clear old result
      setResult("");

      // call register api
      const response = await registerUser(
        email,
        password,
        month,
        day,
        year,
        userName,
        lastName
      );

      // store api response
      setResult(response.data.message);

      return true;

    } catch (err) {

      // handle server or api error
      setError(
        err.response?.data?.message ||
        "please wait something went wrong"
      );

      return false;

    } finally {

      // stop loading
      setLoading(false)
    }
  }



  // login user function
  const login = async (
    
    userName,
    password
  ) => {

    try {

      // check login fields
      // email or username required
      // password also required
      if (
        (!userName.trim()) &&
        !password.trim()
      ) {
        return setError("All fields are required")
      }

      // clear old error
      setError(null);

      // start loading
      setLoading(true);

      // clear old result
      setResult("");

      // call login api
      const response = await loginUser(
        
        userName,
        password
      )

      // store login response
       setResult(response.data.message)

      return true;

    } catch (err) {

      // handle login error
      setError(
        err.response?.data?.message ||
        "please went something went wrong"
      );

      return false;

    } finally {

      // stop loading
      setLoading(false);
    }

  }


  // return states and functions
  return {
    error,
    loading,
    result,
    register,
    login,
    setError,
    setResult
  }
}

export default RegisterHook