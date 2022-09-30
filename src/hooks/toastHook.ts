import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastSuccess = (message: any) => {
  // toast.configure();
  toast.success(message, { autoClose: 2000, position: toast.POSITION.TOP_RIGHT });
};

export const ToastError = (message: any) => {
  // toast.configure();
  toast.error(message, { autoClose: 2000, position: toast.POSITION.TOP_RIGHT });
};
