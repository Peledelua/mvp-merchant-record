'use client';

import { Transaction } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Shield, XCircle } from 'lucide-react';

interface FraudAlertsProps {
  transactions: Transaction[];
}

export function FraudAlerts({ transactions }: FraudAlertsProps) {
  const highRiskTransactions = transactions.filter(t => t.fraudRisk === 'high');
  const mediumRiskTransactions = transactions.filter(t => t.fraudRisk === 'medium');
  const failedTransactions = transactions.filter(t => t.status === 'failed');

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          Alertas de Segurança e Fraude
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {highRiskTransactions.length > 0 && (
          <Alert variant="destructive" className="border-red-200 bg-red-50 dark:bg-red-900/20">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle className="font-semibold">Alto Risco de Fraude Detectado</AlertTitle>
            <AlertDescription>
              {highRiskTransactions.length} transação(ões) com alto risco de fraude requer(em) revisão imediata.
              <div className="mt-2 space-y-1">
                {highRiskTransactions.map(t => (
                  <div key={t.id} className="text-sm flex items-center justify-between bg-white dark:bg-gray-800 p-2 rounded">
                    <span className="font-mono">{t.id}</span>
                    <span>{t.userName}</span>
                    <span className="font-semibold">{t.currency} {t.amount}</span>
                    <span className="text-red-600 dark:text-red-400">Score: {t.fraudScore}%</span>
                  </div>
                ))}
              </div>
            </AlertDescription>
          </Alert>
        )}

        {mediumRiskTransactions.length > 0 && (
          <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-900/20">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="font-semibold text-amber-900 dark:text-amber-200">
              Risco Médio Detectado
            </AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-300">
              {mediumRiskTransactions.length} transação(ões) com risco médio. Monitoramento recomendado.
              <div className="mt-2 space-y-1">
                {mediumRiskTransactions.map(t => (
                  <div key={t.id} className="text-sm flex items-center justify-between bg-white dark:bg-gray-800 p-2 rounded">
                    <span className="font-mono">{t.id}</span>
                    <span>{t.userName}</span>
                    <span className="font-semibold">{t.currency} {t.amount}</span>
                    <span className="text-amber-600 dark:text-amber-400">Score: {t.fraudScore}%</span>
                  </div>
                ))}
              </div>
            </AlertDescription>
          </Alert>
        )}

        {failedTransactions.length > 0 && (
          <Alert className="border-gray-200 bg-gray-50 dark:bg-gray-800/50">
            <XCircle className="h-5 w-5 text-gray-600" />
            <AlertTitle className="font-semibold text-gray-900 dark:text-gray-200">
              Transações Falhadas
            </AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              {failedTransactions.length} transação(ões) falhada(s). Verifique os motivos e entre em contato com os clientes.
            </AlertDescription>
          </Alert>
        )}

        {highRiskTransactions.length === 0 && mediumRiskTransactions.length === 0 && failedTransactions.length === 0 && (
          <Alert className="border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20">
            <Shield className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="font-semibold text-emerald-900 dark:text-emerald-200">
              Sistema Seguro
            </AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-300">
              Nenhum alerta de segurança no momento. Todas as transações estão dentro dos padrões normais.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
