// Test Payment APIs
const testPayments = async () => {
  const baseUrl = 'http://localhost:3000'
  
  // Test data
  const testOrder = {
    email: 'test@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+254700000000',
    address: '123 Test Street',
    city: 'Nairobi',
    country: 'Kenya'
  }

  console.log('🧪 Testing Payment APIs...\n')

  // Test M-Pesa STK Push
  try {
    console.log('1. Testing M-Pesa STK Push...')
    const mpesaResponse = await fetch(`${baseUrl}/api/payment/mpesa/stkpush`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber: '+254700000000',
        amount: 1000,
        accountReference: 'TEST123',
        transactionDesc: 'Test Payment',
        orderInfo: testOrder
      })
    })
    const mpesaData = await mpesaResponse.json()
    console.log('✅ M-Pesa:', mpesaData.success ? 'Working' : 'Failed')
  } catch (error) {
    console.log('❌ M-Pesa: Failed -', error.message)
  }

  // Test Stripe Card Payment
  try {
    console.log('2. Testing Stripe Card Payment...')
    const stripeResponse = await fetch(`${baseUrl}/api/payment/stripe/charge`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: 100000, // 1000 KES in cents
        currency: 'KES',
        card: {
          number: '4242424242424242',
          exp_month: 12,
          exp_year: 2025,
          cvc: '123'
        },
        billing_details: {
          name: 'John Doe',
          email: 'test@example.com'
        },
        orderInfo: testOrder
      })
    })
    const stripeData = await stripeResponse.json()
    console.log('✅ Stripe:', stripeData.success ? 'Working' : 'Failed')
  } catch (error) {
    console.log('❌ Stripe: Failed -', error.message)
  }

  // Test PayPal Create Order
  try {
    console.log('3. Testing PayPal Create Order...')
    const paypalResponse = await fetch(`${baseUrl}/api/payment/paypal/create-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: '10.00'
          }
        }]
      })
    })
    const paypalData = await paypalResponse.json()
    console.log('✅ PayPal:', paypalData.id ? 'Working' : 'Failed')
  } catch (error) {
    console.log('❌ PayPal: Failed -', error.message)
  }

  console.log('\n🎉 Payment API tests completed!')
}

// Run if this file is executed directly
if (typeof window === 'undefined') {
  testPayments()
}