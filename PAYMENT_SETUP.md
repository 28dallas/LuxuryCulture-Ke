# Payment Gateway Setup Guide

## 🔑 Required API Keys

### 1. Stripe (Card Payments)
1. Go to [stripe.com](https://stripe.com) → Sign up/Login
2. Get your keys from Dashboard → Developers → API Keys
3. Replace in `.env.local`:
```env
STRIPE_PUBLISHABLE_KEY=pk_test_51...  # Your actual publishable key
STRIPE_SECRET_KEY=sk_test_51...       # Your actual secret key
```

### 2. PayPal (International)
1. Go to [developer.paypal.com](https://developer.paypal.com)
2. Create app → Get Client ID & Secret
3. Replace in `.env.local`:
```env
PAYPAL_CLIENT_ID=AYour_actual_client_id
PAYPAL_CLIENT_SECRET=EYour_actual_secret
```

### 3. M-Pesa (Kenya)
1. Go to [developer.safaricom.co.ke](https://developer.safaricom.co.ke)
2. Create app → Get Consumer Key & Secret
3. Replace in `.env.local`:
```env
MPESA_CONSUMER_KEY=your_actual_consumer_key
MPESA_CONSUMER_SECRET=your_actual_consumer_secret
MPESA_PASSKEY=your_actual_passkey
MPESA_SHORTCODE=174379  # Your business shortcode
```

### 4. Paystack (Nigeria)
1. Go to [paystack.com](https://paystack.com) → Sign up
2. Get keys from Settings → API Keys & Webhooks
3. Replace in `.env.local`:
```env
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_actual_key
PAYSTACK_SECRET_KEY=sk_test_your_actual_key
```

## 🧪 Testing Payment Methods

### Current Status: ✅ SIMULATION MODE
All payments are currently simulated and working for testing:

1. **M-Pesa**: Shows STK push simulation (30s delay)
2. **Card Payment**: Validates card details, simulates processing
3. **PayPal**: Loads PayPal SDK (needs real Client ID)
4. **Paystack**: Ready for Nigerian market

### Test the Payments:
1. Add items to cart
2. Go to `/checkout`
3. Fill customer info
4. Try each payment method

## 🚀 Go Live Checklist

- [ ] Replace all API keys with production keys
- [ ] Update webhook URLs for M-Pesa callbacks
- [ ] Test with small amounts first
- [ ] Set up proper error logging
- [ ] Configure email notifications
- [ ] Set up order management system

## 🔒 Security Notes

- Never commit real API keys to git
- Use environment variables only
- Enable webhook signature verification
- Set up proper CORS policies
- Use HTTPS in production