import { toast } from "sonner";
import { X } from "lucide-react";
import Link from "next/link";

const CartToast = ({ id, productName }) => {
  return (
    <div className="flex w-full lg:w-110 items-center justify-between rounded-lg  bg-accent-soft p-4 shadow-lg">
      <div>
        <h4 className="font-semibold text-sm font-manrope lg:hidden">Item Added to your Cart!</h4>
        <h4 className="font-semibold text-sm font-manrope hidden lg:block">{productName} Added to your Cart!</h4>
        
      </div>

      <div className="flex items-center gap-2">
        <Link
          href="/cart"
          onClick={() => toast.dismiss(id)}
          className="rounded bg-accent px-2 lg:px-3 py-1 text-[10px] sm:text-sm text-background "
        >
          View Cart
        </Link>

        <button
          onClick={() => toast.dismiss(id)}
          className="rounded p-1 hover:bg-accent-soft cursor-pointer"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartToast;
