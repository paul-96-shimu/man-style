import { CardCvcElement, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const PaymentFrom = () => {

    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }


    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='p-20 bg-white rounded shadow'>
                <CardElement>
                    <button type='submit'
                    className='btn btn-primary w-full bg-amber-50'
                     disabled={!stripe}>
                        Pay
                    </button>
                </CardElement>




            </form>
        </div>
    );
};
// module-66.3...milestone-12-- class time:5:34

export default PaymentFrom;