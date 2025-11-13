import { Transaction, SalesMetrics, RevenueData, PaymentMethodStats, CountryStats } from './types';

// Mock transactions data
export const mockTransactions: Transaction[] = [
  {
    id: 'TXN-001',
    userId: 'USR-001',
    userName: 'John Smith',
    userEmail: 'john.smith@email.com',
    amount: 299.99,
    currency: 'USD',
    status: 'completed',
    paymentMethod: 'credit_card',
    country: 'United States',
    taxAmount: 29.99,
    netAmount: 270.00,
    fraudRisk: 'low',
    fraudScore: 12,
    productName: 'Premium Digital Course',
    timestamp: new Date('2024-01-15T10:30:00'),
    ipAddress: '192.168.1.1'
  },
  {
    id: 'TXN-002',
    userId: 'USR-002',
    userName: 'Maria Silva',
    userEmail: 'maria.silva@email.com',
    amount: 149.90,
    currency: 'BRL',
    status: 'completed',
    paymentMethod: 'pix',
    country: 'Brazil',
    taxAmount: 14.99,
    netAmount: 134.91,
    fraudRisk: 'low',
    fraudScore: 8,
    productName: 'E-book Bundle',
    timestamp: new Date('2024-01-15T09:15:00'),
    ipAddress: '201.45.67.89'
  },
  {
    id: 'TXN-003',
    userId: 'USR-003',
    userName: 'Hans Mueller',
    userEmail: 'hans.mueller@email.com',
    amount: 499.00,
    currency: 'EUR',
    status: 'pending',
    paymentMethod: 'bank_transfer',
    country: 'Germany',
    taxAmount: 94.81,
    netAmount: 404.19,
    fraudRisk: 'medium',
    fraudScore: 45,
    productName: 'Software License',
    timestamp: new Date('2024-01-15T08:45:00'),
    ipAddress: '88.123.45.67'
  },
  {
    id: 'TXN-004',
    userId: 'USR-004',
    userName: 'Sarah Johnson',
    userEmail: 'sarah.j@email.com',
    amount: 99.99,
    currency: 'USD',
    status: 'completed',
    paymentMethod: 'paypal',
    country: 'Canada',
    taxAmount: 13.00,
    netAmount: 86.99,
    fraudRisk: 'low',
    fraudScore: 15,
    productName: 'Monthly Subscription',
    timestamp: new Date('2024-01-15T07:20:00'),
    ipAddress: '142.58.123.45'
  },
  {
    id: 'TXN-005',
    userId: 'USR-005',
    userName: 'Yuki Tanaka',
    userEmail: 'yuki.tanaka@email.com',
    amount: 799.00,
    currency: 'JPY',
    status: 'failed',
    paymentMethod: 'credit_card',
    country: 'Japan',
    taxAmount: 79.90,
    netAmount: 0,
    fraudRisk: 'high',
    fraudScore: 87,
    productName: 'Enterprise Package',
    timestamp: new Date('2024-01-15T06:10:00'),
    ipAddress: '210.123.45.67'
  },
  {
    id: 'TXN-006',
    userId: 'USR-006',
    userName: 'Pierre Dubois',
    userEmail: 'pierre.d@email.com',
    amount: 199.99,
    currency: 'EUR',
    status: 'completed',
    paymentMethod: 'credit_card',
    country: 'France',
    taxAmount: 40.00,
    netAmount: 159.99,
    fraudRisk: 'low',
    fraudScore: 10,
    productName: 'Digital Template Pack',
    timestamp: new Date('2024-01-15T05:30:00'),
    ipAddress: '82.234.56.78'
  },
  {
    id: 'TXN-007',
    userId: 'USR-007',
    userName: 'Emma Wilson',
    userEmail: 'emma.w@email.com',
    amount: 349.99,
    currency: 'GBP',
    status: 'refunded',
    paymentMethod: 'paypal',
    country: 'United Kingdom',
    taxAmount: 70.00,
    netAmount: 0,
    fraudRisk: 'low',
    fraudScore: 5,
    productName: 'Pro Membership',
    timestamp: new Date('2024-01-14T23:45:00'),
    ipAddress: '81.123.45.67'
  },
  {
    id: 'TXN-008',
    userId: 'USR-008',
    userName: 'Carlos Rodriguez',
    userEmail: 'carlos.r@email.com',
    amount: 89.90,
    currency: 'USD',
    status: 'completed',
    paymentMethod: 'crypto',
    country: 'Mexico',
    taxAmount: 14.38,
    netAmount: 75.52,
    fraudRisk: 'medium',
    fraudScore: 38,
    productName: 'Starter Pack',
    timestamp: new Date('2024-01-14T22:15:00'),
    ipAddress: '189.123.45.67'
  }
];

// Mock sales metrics
export const mockMetrics: SalesMetrics = {
  totalRevenue: 2487.75,
  totalTransactions: 8,
  averageOrderValue: 310.97,
  conversionRate: 68.5,
  fraudRate: 12.5,
  refundRate: 12.5
};

// Mock revenue data for chart
export const mockRevenueData: RevenueData[] = [
  { date: '2024-01-08', revenue: 1250.00, transactions: 5 },
  { date: '2024-01-09', revenue: 1890.50, transactions: 7 },
  { date: '2024-01-10', revenue: 2340.75, transactions: 9 },
  { date: '2024-01-11', revenue: 1670.25, transactions: 6 },
  { date: '2024-01-12', revenue: 2890.00, transactions: 11 },
  { date: '2024-01-13', revenue: 2150.50, transactions: 8 },
  { date: '2024-01-14', revenue: 3120.75, transactions: 12 },
  { date: '2024-01-15', revenue: 2487.75, transactions: 8 }
];

// Mock payment method stats
export const mockPaymentMethods: PaymentMethodStats[] = [
  { method: 'credit_card', count: 3, revenue: 1098.98, percentage: 44.2 },
  { method: 'paypal', count: 2, revenue: 449.98, percentage: 18.1 },
  { method: 'pix', count: 1, revenue: 149.90, percentage: 6.0 },
  { method: 'bank_transfer', count: 1, revenue: 499.00, percentage: 20.1 },
  { method: 'crypto', count: 1, revenue: 89.90, percentage: 3.6 }
];

// Mock country stats
export const mockCountryStats: CountryStats[] = [
  { country: 'United States', revenue: 399.98, transactions: 2, taxCollected: 42.99 },
  { country: 'Germany', revenue: 499.00, transactions: 1, taxCollected: 94.81 },
  { country: 'France', revenue: 199.99, transactions: 1, taxCollected: 40.00 },
  { country: 'Brazil', revenue: 149.90, transactions: 1, taxCollected: 14.99 },
  { country: 'United Kingdom', revenue: 349.99, transactions: 1, taxCollected: 70.00 },
  { country: 'Canada', revenue: 99.99, transactions: 1, taxCollected: 13.00 },
  { country: 'Japan', revenue: 799.00, transactions: 1, taxCollected: 79.90 },
  { country: 'Mexico', revenue: 89.90, transactions: 1, taxCollected: 14.38 }
];
