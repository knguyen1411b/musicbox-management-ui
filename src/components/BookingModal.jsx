export default function BookingModal({ step, setStep, paymentStatus, setPaymentStatus }) {
    if (step <= 0) return null

    return (
        <div
            className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overscroll-contain"
            role="dialog"
            aria-modal="true"
        >
            {step === 1 && (
                <div className="glass-card w-full max-w-lg rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_0_60px_rgba(139,92,246,0.3)] max-h-[92vh] overflow-y-auto">
                    <div className="bg-gradient-to-br from-mb-purple-600 to-indigo-700 p-6 sm:p-7 relative">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-2">
                            <div className="text-center sm:text-left order-2 sm:order-1">
                                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter leading-tight">
                                    Xác nhận lịch đặt
                                </h2>
                            </div>
                            <div className="order-1 sm:order-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full shrink-0">
                                <span className="text-[10px] font-bold text-white whitespace-nowrap">P.402 - VIP</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                value="Nguyễn Hoàng Nam"
                                disabled
                                aria-label="Tên khách hàng"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white"
                            />
                            <input
                                type="text"
                                value="0987 654 321"
                                disabled
                                aria-label="Số điện thoại"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="w-full py-4 rounded-2xl bg-mb-purple-600 hover:bg-mb-purple-500 font-bold text-white text-[11px] uppercase tracking-[0.2em] transition-colors"
                        >
                            Thanh toán ngay
                        </button>
                        <button
                            type="button"
                            onClick={() => setStep(0)}
                            className="w-full py-3 rounded-2xl bg-transparent border border-white/10 font-bold text-gray-500 hover:text-white hover:bg-white/5 text-[10px] uppercase tracking-[0.2em] transition-colors"
                        >
                            Hủy bỏ (Quay lại)
                        </button>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="bg-white text-slate-800 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
                    <div className="bg-[#005baa] p-4 flex justify-center">
                        <img
                            src="https://vnpay.vn/wp-content/uploads/2020/07/Logo-VNPAYQR-update.png"
                            alt="VNPAY QR"
                            width="128"
                            height="32"
                            className="h-8 invert brightness-0"
                        />
                    </div>
                    <div className="p-8 text-center space-y-3">
                        <button
                            type="button"
                            onClick={() => {
                                setStep(3)
                                setPaymentStatus('success')
                            }}
                            className="w-full py-4 rounded-xl border-2 border-emerald-500 text-emerald-600 font-bold hover:bg-emerald-500/10 transition-colors"
                        >
                            Giả lập: Thanh toán thành công
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setStep(3)
                                setPaymentStatus('fail')
                            }}
                            className="w-full py-4 rounded-xl border-2 border-rose-500 text-rose-600 font-bold hover:bg-rose-500/10 transition-colors"
                        >
                            Giả lập: Thanh toán lỗi/Hủy
                        </button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="glass-card w-full max-w-md rounded-3xl p-8 text-center border-white/10 shadow-2xl">
                    {paymentStatus === 'success' ? (
                        <>
                            <h2 className="text-3xl font-black mb-2 uppercase">Thành công!</h2>
                            <button
                                type="button"
                                onClick={() => setStep(0)}
                                className="w-full py-4 rounded-xl bg-mb-purple-600 hover:bg-mb-purple-500 font-bold"
                            >
                                Xem phòng đã đặt
                            </button>
                        </>
                    ) : (
                        <>
                            <h2 className="text-3xl font-black mb-2 uppercase text-rose-400">Thất bại</h2>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setStep(0)}
                                    className="py-3 rounded-xl bg-white/5 hover:bg-white/10 font-bold"
                                >
                                    Trang chủ
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="py-3 rounded-xl bg-rose-600 hover:bg-rose-500 font-bold"
                                >
                                    Thử lại
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}
