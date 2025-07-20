const express = require('express');
const router = express.Router();

// POST /api/orders - Handle checkout/order submissions
router.post('/', async (req, res) => {
  try {
    const { items, total, ...customerInfo } = req.body;

    // Log the order data (for development)
    console.log('📦 New Order Received:');
    console.log('Customer Info:', customerInfo);
    console.log('Items:', JSON.parse(items || '[]'));
    console.log('Total:', total);

    // TODO: Save to database, send emails, process payment, etc.
    // For now, we'll just return a success response

    const orderData = {
      orderId: `CK-${Date.now()}`, // Simple order ID generation
      items: JSON.parse(items || '[]'),
      total: parseFloat(total || 0),
      customerInfo,
      status: 'received',
      createdAt: new Date().toISOString()
    };

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({
      success: true,
      message: 'Order submitted successfully!',
      order: orderData
    });

  } catch (error) {
    console.error('❌ Order submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process order',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// GET /api/orders - Get all orders (for admin)
router.get('/', async (req, res) => {
  try {
    // TODO: Fetch from database
    res.status(200).json({
      success: true,
      message: 'Orders endpoint is working',
      orders: [] // Will be populated when database is connected
    });
  } catch (error) {
    console.error('❌ Error fetching orders:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders'
    });
  }
});

module.exports = router;
