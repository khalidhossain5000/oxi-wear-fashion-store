import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import PrimaryButton from '../shared/Button/PrimaryButton';

const OrderSummary = ({shippingZone,setShippingZone,subtotal , total}) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-6 font-sora">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary font-manrope">Subtotal</span>
                  <span className='flex items-center'><TbCurrencyTaka />{subtotal.toLocaleString()}</span>
                </div>

                <div>
                  <p className="text-text-secondary mb-2 font-sora">Shipping</p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted-surface cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="shipping"
                        value="inside"
                        checked={shippingZone === "inside"}
                        onChange={() => setShippingZone("inside")}
                        className="accent-accent"
                      />
                      <div className="flex-1">
                        <p className="font-medium font-sora">Inside Dhaka</p>
                        <p className="text-xs text-text-secondary font-manrope">
                          Delivery within 2‑3 days
                        </p>
                      </div>
                      <span className="font-medium flex items-center font-sora"><TbCurrencyTaka />60</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted-surface cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="shipping"
                        value="outside"
                        checked={shippingZone === "outside"}
                        onChange={() => setShippingZone("outside")}
                        className="accent-accent"
                      />
                      <div className="flex-1">
                        <p className="font-medium font-sora">Outside Dhaka</p>
                        <p className="text-xs text-text-secondary font-manrope">
                          Delivery within 4‑7 days
                        </p>
                      </div>
                      <span className="font-medium flex items-center gap-1 font-manrope" ><TbCurrencyTaka/>120</span>
                    </label>
                  </div>
                </div>
              </div>

              <hr className="my-4 border-border" />

              <div className="flex items-center justify-between text-lg font-semibold mb-6 font-sora">
                <span>Total</span>
                <span className="flex items-center gap-1"><TbCurrencyTaka />{total.toLocaleString()}</span>
              </div>

             <div className="flex flex-col md:flex-row items-center justify-center font-manrope">

         
              <PrimaryButton className="px-4 lg:px-12 rounded-full">   Proceed to Checkout</PrimaryButton>
    </div>
              <p className="text-xs text-text-secondary mt-4 text-center font-manrope">
                Free returns within 7 days.
              </p>
        </div>
    );
};

export default OrderSummary;