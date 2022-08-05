import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastSuccess = (message: any) => {
  // toast.configure();
  toast.success(message, { autoClose: 3000, position: toast.POSITION.BOTTOM_LEFT });
};

export const ToastError = (message: any) => {
  // toast.configure();
  toast.error(message, { autoClose: 3000, position: toast.POSITION.BOTTOM_LEFT });
};
