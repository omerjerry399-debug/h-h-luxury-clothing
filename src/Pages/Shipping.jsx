import React from 'react';

export default function Shipping() {
  return (
    <div className="container my-5 pt-5 px-4">
      <div className="text-center mb-5">
        <p className="text-muted small letter-spacing-2 mb-1">CUSTOMER CARE</p>
        <h1 className="fw-bold display-5" style={{ fontFamily: "'Bodoni Moda', serif", letterSpacing: '5px' }}>SHIPPING & RETURNS</h1>
        <div style={{ width: '60px', height: '2px', backgroundColor: 'black', margin: '15px auto' }}></div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          
          {/* --- SHIPPING POLICY --- */}
          <section className="mb-5">
            <h4 className="fw-bold mb-3" style={{ fontFamily: "'Cinzel', serif" }}>01. SHIPPING POLICY</h4>
            <ul className="text-muted lh-lg small">
              <li><strong>Domestic Shipping:</strong> We deliver across Pakistan. Delivery typically takes 3-5 business days.</li>
              <li><strong>Delivery Charges:</strong> Standard shipping is PKR 250. Free shipping is available on all orders above PKR 5,000.</li>
              <li><strong>Order Tracking:</strong> Once your order is dispatched, you will receive a tracking number via email/SMS.</li>
            </ul>
          </section>

          {/* --- RETURN & EXCHANGE --- */}
          <section className="mb-5">
            <h4 className="fw-bold mb-3" style={{ fontFamily: "'Cinzel', serif" }}>02. RETURNS & EXCHANGES</h4>
            <p className="text-muted small lh-lg">
              We want you to be completely satisfied with your purchase. If the fit isn't right, you can exchange or return your items within <strong>7 days</strong> of delivery.
            </p>
            <ul className="text-muted lh-lg small">
              <li>Items must be unworn, unwashed, and in their original packaging with tags attached.</li>
              <li>Sale items are only eligible for exchange in case of a size issue or manufacturing defect.</li>
              <li>Customer is responsible for return shipping costs unless the item received was damaged.</li>
            </ul>
          </section>

          {/* --- REFUNDS --- */}
          <section className="mb-5">
            <h4 className="fw-bold mb-3" style={{ fontFamily: "'Cinzel', serif" }}>03. REFUND PROCESS</h4>
            <p className="text-muted small lh-lg">
              Once we receive and inspect your return, we will process your refund via Bank Transfer or EasyPaisa within 5-7 working days.
            </p>
          </section>

          {/* --- CONTACT FOR HELP --- */}
          <div className="bg-light p-4 text-center mt-5">
            <p className="mb-1 fw-bold">Need help with your order?</p>
            <p className="small text-muted mb-0">Contact our support team at <strong>support@umarmubarak.com</strong></p>
          </div>

        </div>
      </div>
    </div>
  );
}