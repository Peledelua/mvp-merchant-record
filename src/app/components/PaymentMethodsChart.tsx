'use client';

import { PaymentMethodStats } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Wallet } from 'lucide-react';

interface PaymentMethodsChartProps {
  data: PaymentMethodStats[];
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

export function PaymentMethodsChart({ data }: PaymentMethodsChartProps) {
  const chartData = data.map(item => ({
    name: item.method.replace('_', ' ').toUpperCase(),
    value: item.revenue,
    count: item.count
  }));

  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-blue-600" />
          Métodos de Pagamento
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
              formatter={(value: number, name, props) => [
                `$${value.toFixed(2)} (${props.payload.count} transações)`,
                props.payload.name
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
        
        <div className="mt-4 space-y-2">
          {data.map((item, index) => (
            <div key={item.method} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-gray-700 dark:text-gray-300 capitalize">
                  {item.method.replace('_', ' ')}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 dark:text-gray-400">
                  {item.count} transações
                </span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  ${item.revenue.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
