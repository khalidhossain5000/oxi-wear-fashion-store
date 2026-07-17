import React from 'react';
import { toast } from 'sonner';

const SuccessToast = ({message}) => {
    return (
       toast.success(message,{
        className:"bg-accent-soft relative z-99999999999999999999 border border teal-600 rounded-sm shaodw-lg"
       })
    );
};

export default SuccessToast;