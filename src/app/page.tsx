'use client';

import { DollarSign, TrendingUp, CreditCard, AlertTriangle, Users, Globe } from 'lucide-react';
import { StatsCard } from './components/StatsCard';
import { TransactionTable } from './components/TransactionTable';
import { RevenueChart } from './components/RevenueChart';
import { PaymentMethodsChart } from './components/PaymentMethodsChart';
import { FraudAlerts } from './components/FraudAlerts';
import { 
  mockTransactions, 
  mockMetrics, 
  mockRevenueData, 
  mockPaymentMethods 
} from '@/lib/mock-data';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  MoR Platform
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Merchant of Record Dashboard
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Sistema Ativo
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <StatsCard
            title="Receita Total"
            value={`$${mockMetrics.totalRevenue.toFixed(2)}`}
            change="+12.5% vs mês anterior"
            changeType="positive"
            icon={DollarSign}
            description="Receita líquida após taxas"
          />
          <StatsCard
            title="Transações"
            value={mockMetrics.totalTransactions.toString()}
            change="+8 novas hoje"
            changeType="positive"
            icon={CreditCard}
            description="Total de pagamentos processados"
          />
          <StatsCard
            title="Ticket Médio"
            value={`$${mockMetrics.averageOrderValue.toFixed(2)}`}
            change="+5.2% vs média"
            changeType="positive"
            icon={TrendingUp}
            description="Valor médio por transação"
          />
          <StatsCard
            title="Taxa de Conversão"
            value={`${mockMetrics.conversionRate.toFixed(1)}%`}
            change="+2.3% este mês"
            changeType="positive"
            icon={Users}
            description="Conversão de visitantes"
          />
          <StatsCard
            title="Taxa de Fraude"
            value={`${mockMetrics.fraudRate.toFixed(1)}%`}
            change="Dentro do esperado"
            changeType="neutral"
            icon={AlertTriangle}
            description="Transações com risco detectado"
          />
          <StatsCard
            title="Taxa de Reembolso"
            value={`${mockMetrics.refundRate.toFixed(1)}%`}
            change="-1.2% vs mês anterior"
            changeType="positive"
            icon={CreditCard}
            description="Reembolsos solicitados"
          />
        </div>

        {/* Fraud Alerts */}
        <div className="mb-8">
          <FraudAlerts transactions={mockTransactions} />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <RevenueChart data={mockRevenueData} />
          <PaymentMethodsChart data={mockPaymentMethods} />
        </div>

        {/* Transactions Table */}
        <TransactionTable transactions={mockTransactions} />

        {/* Footer Info */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Compliance Fiscal
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Impostos calculados automaticamente para 195+ países
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Proteção Anti-Fraude
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Machine learning detectando padrões suspeitos em tempo real
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Métodos de Pagamento
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Cartões, PayPal, PIX, transferência bancária e criptomoedas
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Relatórios Detalhados
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Análises completas de vendas, conversão e performance
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
