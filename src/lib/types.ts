// Types for Merchant of Record Platform

export type TransactionStatus = 'completed' | 'pending' | 'failed' | 'refunded';
export type PaymentMethod = 'credit_card' | 'paypal' | 'bank_transfer' | 'crypto' | 'pix';
export type FraudRiskLevel = 'low' | 'medium' | 'high';

export interface User {
  id: string;
  name: string;
  email: string;
  country: string;
  taxId: string;
  billingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  createdAt: Date;
}

export interface Transaction {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  paymentMethod: PaymentMethod;
  country: string;
  taxAmount: number;
  netAmount: number;
  fraudRisk: FraudRiskLevel;
  fraudScore: number;
  productName: string;
  timestamp: Date;
  ipAddress: string;
}

export interface SalesMetrics {
  totalRevenue: number;
  totalTransactions: number;
  averageOrderValue: number;
  conversionRate: number;
  fraudRate: number;
  refundRate: number;
}

export interface RevenueData {
  date: string;
  revenue: number;
  transactions: number;
}

export interface PaymentMethodStats {
  method: PaymentMethod;
  count: number;
  revenue: number;
  percentage: number;
}

export interface CountryStats {
  country: string;
  revenue: number;
  transactions: number;
  taxCollected: number;
}
