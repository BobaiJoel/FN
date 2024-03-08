import { create } from "zustand";

export const useAuthStore = create((set) => ({
  auth: {
    user: [],
    email: "",
    pass: "",
    activeNavItem: "Overview",
    transaction: [],
    isLoggedIn: false,
    authToken: "",
    click: false,
    confirmDetails: false,
    amount: false,
    successfulPayment: false,
    paymentHistory: [],
    paymentAmount: 0,
    fee: 0,
    totalPayment: 0,
    paymentStatus: "",
    recepientName: "",
    recipientBank: "",
    recipientAccountNumber: 0,
    date: "",
    paymentMethod: "",
    paidWith: "",
    remark: "",
    sessionID: 0,
    transactionNumber: 0,
    recepientPic: "",
    paymentPin: false,
    deactivated: false,
  },
  setEmail: (str) => set((state) => ({ auth: { ...state.auth, email: str } })),
  setPass: (str) => set((state) => ({ auth: { ...state.auth, pass: str } })),
  setDeactivated: (bool) =>
    set((state) => ({ auth: { ...state.auth, deactivated: bool } })),
  setPaymentPin: (bool) =>
    set((state) => ({ auth: { ...state.auth, paymentPin: bool } })),
  setRecepientPic: (str) =>
    set((state) => ({ auth: { ...state.auth, recepientPic: str } })),
  setActiveNavItem: (str) =>
    set((state) => ({ auth: { ...state.auth, activeNavItem: str } })),
  setTransactionNumber: (num) =>
    set((state) => ({ auth: { ...state.auth, transactionNumber: num } })),
  setSessionID: (num) =>
    set((state) => ({ auth: { ...state.auth, sessionID: num } })),
  setRemark: (str) =>
    set((state) => ({ auth: { ...state.auth, remark: str } })),
  setPaidWith: (str) =>
    set((state) => ({ auth: { ...state.auth, paidWith: str } })),
  setPaymentMethod: (str) =>
    set((state) => ({ auth: { ...state.auth, paymentMethod: str } })),
  setDate: (str) => set((state) => ({ auth: { ...state.auth, date: str } })),
  setRecepientAccountNumber: (num) =>
    set((state) => ({ auth: { ...state.auth, recipientAccountNumber: num } })),
  setRecepientBank: (str) =>
    set((state) => ({ auth: { ...state.auth, recipientBank: str } })),
  setRecepientName: (str) =>
    set((state) => ({ auth: { ...state.auth, recepientName: str } })),
  setPaymentStatus: (str) =>
    set((state) => ({ auth: { ...state.auth, paymentStatus: str } })),
  setTotalPayment: (num) =>
    set((state) => ({ auth: { ...state.auth, totalPayment: num } })),
  setFee: (num) => set((state) => ({ auth: { ...state.auth, fee: num } })),
  setPaymentAmount: (num) =>
    set((state) => ({ auth: { ...state.auth, paymentAmount: num } })),
  setSuccessfulPayment: (bool) =>
    set((state) => ({ auth: { ...state.auth, successfulPayment: bool } })),
  setAmount: (bool) =>
    set((state) => ({ auth: { ...state.auth, amount: bool } })),
  setConfirmDetails: (bool) =>
    set((state) => ({ auth: { ...state.auth, confirmDetails: bool } })),
  setAuthToken: (str) =>
    set((state) => ({ auth: { ...state.auth, authToken: str } })),
  setTransaction: (obj) =>
    set((state) => ({ auth: { ...state.auth, transaction: obj } })),
  setUser: (obj) => set((state) => ({ auth: { ...state.auth, user: obj } })),
  setClick: (bool) =>
    set((state) => ({ auth: { ...state.auth, click: bool } })),
  setIsLoggedIn: (bool) =>
    set((state) => ({ auth: { ...state.auth, isLoggedIn: bool } })),
}));
