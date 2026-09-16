import React, { useState, useEffect } from 'react';
import { Package, Eye, X, Calendar, CreditCard, MapPin, CheckCircle, Clock } from 'lucide-react';
import axiosInstance from '../../api/axiosConfig';
import { toast } from 'react-toastify';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Strip /api from the base URL so image paths resolve correctly
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL.replace('/api', '');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get('/my-orders');
      if (response.data.status === 'success') {
        setOrders(response.data.data);
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error);
      toast.error('Failed to load your orders.');
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderDetails = async (orderId) => {
    try {
      setDetailsLoading(true);
      setIsModalOpen(true);
      const response = await axiosInstance.get(`/my-orders/${orderId}`);
      if (response.data.status === 'success') {
        setSelectedOrder(response.data.data);
      }
    } catch (error) {
      console.error('Failed to fetch order details:', error);
      toast.error('Failed to load order details.');
      setIsModalOpen(false);
    } finally {
      setDetailsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedOrder(null), 300);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'processing':
        return (
          <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-xs font-semibold flex items-center gap-1 border border-yellow-500/20 w-fit">
            <Clock size={12} /> Processing
          </span>
        );
      case 'completed':
      case 'paid':
        return (
          <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-semibold flex items-center gap-1 border border-green-500/20 w-fit">
            <CheckCircle size={12} /> {status}
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 bg-gray-500/10 text-gray-400 rounded-full text-xs font-semibold uppercase border border-gray-500/20 w-fit">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#05070C] text-white p-6 lg:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-['Familjen_Grotesk'] font-bold mb-8 flex items-center gap-3">
          <Package className="text-[#2BE3FF]" size={32} />
          My Orders
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64 animate-pulse text-[#8EA0BD]">
            Loading your orders...
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-[#0A0F19] p-10 rounded-xl text-center border border-white/5">
            <Package className="mx-auto mb-4 text-[#8EA0BD]" size={48} />
            <h2 className="text-xl font-semibold mb-2">No orders found</h2>
            <p className="text-[#8EA0BD]">You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="bg-[#0A0F19] rounded-xl border border-white/5 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-[#8EA0BD] text-sm uppercase tracking-wider">
                    <th className="p-4 font-medium">Order ID</th>
                    <th className="p-4 font-medium">Date</th>
                    <th className="p-4 font-medium">Product</th>
                    <th className="p-4 font-medium">Total</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-mono text-[#2BE3FF] whitespace-nowrap">{order.invoice_no}</td>
                      <td className="p-4 text-[#8EA0BD] whitespace-nowrap">{formatDate(order.created_at)}</td>
                      <td className="p-4 font-medium truncate max-w-[200px]">{order.product?.name || 'Unknown Product'}</td>
                      <td className="p-4 font-bold">${parseFloat(order.grand_total).toFixed(2)}</td>
                      <td className="p-4">{getStatusBadge(order.order_status)}</td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => fetchOrderDetails(order.id)}
                          className="p-2 bg-[#2BE3FF]/10 text-[#2BE3FF] hover:bg-[#2BE3FF] hover:text-[#05070C] rounded-lg transition-all"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Order Details Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-[#0A0F19] w-full max-w-3xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5 shrink-0">
                <h2 className="text-xl font-bold font-['Familjen_Grotesk']">Order Details</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex-1">
                {detailsLoading || !selectedOrder ? (
                  <div className="flex justify-center items-center h-48 animate-pulse text-[#8EA0BD]">
                    Loading order specifics...
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* Header Info */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-[#05070C]/50 p-5 rounded-xl border border-white/5">
                      <div>
                        <p className="text-xs text-[#8EA0BD] uppercase tracking-wider mb-1">Invoice Number</p>
                        <p className="font-mono text-[#2BE3FF] font-medium">{selectedOrder.invoice_no}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#8EA0BD] uppercase tracking-wider mb-1">Order Date</p>
                        <p className="flex items-center gap-2 text-sm">
                          <Calendar size={16} className="text-[#2BE3FF]" /> {formatDate(selectedOrder.created_at)}
                        </p>
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <p className="text-xs text-[#8EA0BD] uppercase tracking-wider mb-1">Payment Status</p>
                        <div className="mt-1">{getStatusBadge(selectedOrder.payment_status)}</div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div>
                      <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-2">Purchased Item</h3>
                      <div className="flex flex-col sm:flex-row gap-6">
                        {selectedOrder.product?.images?.[0] && (
                          <div className="w-full sm:w-40 h-40 rounded-xl overflow-hidden bg-white/5 border border-white/10 shrink-0 flex items-center justify-center">
                            <img
                              src={`${API_BASE_URL}/${selectedOrder.product.images[0].image}`}
                              alt={selectedOrder.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 flex flex-col justify-center">
                          <h4 className="font-bold text-xl text-white mb-2">{selectedOrder.product?.name}</h4>
                          <p className="text-sm text-[#8EA0BD] mb-4 line-clamp-3">{selectedOrder.product?.description}</p>
                          <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg border border-white/5">
                            <span className="text-[#8EA0BD]">
                              Qty: <strong className="text-white ml-1">{selectedOrder.quantity}</strong>
                            </span>
                            <span className="font-bold text-xl text-[#2BE3FF]">
                              ${parseFloat(selectedOrder.product_variation?.price || 0).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Specifications */}
                    {selectedOrder.product_variation?.technical_specifications?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-2">Specifications</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedOrder.product_variation.technical_specifications.map((spec) => (
                            <div key={spec.id} className="bg-[#05070C]/30 p-3 rounded-lg border border-white/5 flex flex-col justify-center">
                              <p className="text-xs text-[#8EA0BD] mb-1">{spec.title}</p>
                              <p className="font-medium text-sm text-white">{spec.specification}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Shipping & Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                        <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-white">
                          <MapPin size={18} className="text-[#2BE3FF]" /> Shipping Details
                        </h3>
                        <div className="text-sm text-[#8EA0BD] space-y-1.5">
                          <p className="font-bold text-white text-base pb-1">
                            {selectedOrder.customer_info?.first_name} {selectedOrder.customer_info?.last_name}
                          </p>
                          <p>{selectedOrder.customer_info?.address_line_one}</p>
                          {selectedOrder.customer_info?.address_line_two && (
                            <p>{selectedOrder.customer_info.address_line_two}</p>
                          )}
                          <p>
                            {selectedOrder.customer_info?.sub_burb}, {selectedOrder.customer_info?.state}{' '}
                            {selectedOrder.customer_info?.post_code}
                          </p>
                          <p className="text-white">{selectedOrder.customer_info?.country_region}</p>
                          <p className="pt-3 border-t border-white/10 mt-3">
                            Email: <span className="text-white">{selectedOrder.customer_info?.email}</span>
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                        <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-white">
                          <CreditCard size={18} className="text-[#2BE3FF]" /> Order Summary
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between text-[#8EA0BD]">
                            <span>Subtotal</span>
                            <span className="text-white">${parseFloat(selectedOrder.sub_total).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-[#8EA0BD]">
                            <span>Tax</span>
                            <span className="text-white">${parseFloat(selectedOrder.tax).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-[#8EA0BD]">
                            <span>Discount</span>
                            <span className="text-white">-${parseFloat(selectedOrder.discount).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between font-bold text-lg pt-4 border-t border-white/10 mt-2">
                            <span>Grand Total</span>
                            <span className="text-[#2BE3FF]">${parseFloat(selectedOrder.grand_total).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order Notes */}
                    {selectedOrder.notes && (
                      <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl text-sm">
                        <strong className="text-yellow-400 block mb-1">Order Notes:</strong>
                        <p className="text-yellow-500/90">{selectedOrder.notes}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
