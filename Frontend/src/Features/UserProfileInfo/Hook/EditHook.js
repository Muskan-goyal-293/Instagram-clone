import { EditProviderContext } from "../Context/EditContext";
import edit from "../Api/EditApi";
import { useContext } from "react";

function EditHook() {
  const { error, setError, loading, setLoading, result, setResult } =
    useContext(EditProviderContext);
  const editFun = async (bio, profile_image, isPrivate, hobbies) => {
    try {
      setError("");
      setLoading(false);
      setError("");
      const response = await edit(bio, profile_image, isPrivate, hobbies);
      setResult(response.data?.message);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "someThing went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { error, loading, result, editFun, setError, setResult };
}

export default EditHook;
