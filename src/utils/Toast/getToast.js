import { toast } from "react-toastify";

const randomId = () => Math.floor(Math.random() * 9000);
const getToast = ({ message, success = true }) => {
  let content;
  if (success) {
    content = toast.success(message || "Successfully", { toastId: randomId() });
  } else {
    content = toast.error(message || "Ops! Try Again", { toastId: randomId() });
  }
  return content;
};

export default getToast;
