'use client';

import React, { useState } from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { 
  IndianRupee, 
  QrCode, 
  History, 
  TrendingUp,
  Settings,
  Users,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download
} from 'lucide-react';

// Define TypeScript interfaces
interface Transaction {
  id: number;
  amount: number;
  type: string;
  customer: string;
  time: string;
}

interface TodayStats {
  totalSales: number;
  transactions: number;
  avgTicketSize: number;
}

interface Customer {
  name: string;
  visits: number;
  total: number;
}

interface AnalyticsData {
  weeklyTotal: number;
  monthlyTotal: number;
  topCustomers: Customer[];
}

interface CustomerData {
  id: number;
  name: string;
  visits: number;
  lastVisit: string;
  loyalty: 'Gold' | 'Silver' | 'Bronze';
}

const MerchantApp = () => {
  // Define type for activeTab state
  const [activeTab, setActiveTab] = useState<'collect' | 'history' | 'analytics' | 'customers'>('collect');
  
  // Sample data with proper typing
  const recentTransactions: Transaction[] = [
    { id: 1, amount: 2500, type: 'credit', customer: 'Raj Kumar', time: '10:30 AM' },
    { id: 2, amount: 1800, type: 'credit', customer: 'Priya S', time: '09:45 AM' },
    { id: 3, amount: 3200, type: 'credit', customer: 'Mohammad A', time: '09:15 AM' },
  ];

  const todayStats: TodayStats = {
    totalSales: 45000,
    transactions: 28,
    avgTicketSize: 1607
  };

  const analyticsData: AnalyticsData = {
    weeklyTotal: 284500,
    monthlyTotal: 1245000,
    topCustomers: [
      { name: 'Raj Kumar', visits: 24, total: 45000 },
      { name: 'Priya S', visits: 18, total: 36000 },
      { name: 'Mohammad A', visits: 15, total: 32000 }
    ]
  };

  const customersList: CustomerData[] = [
    { id: 1, name: 'Raj Kumar', visits: 24, lastVisit: '2 days ago', loyalty: 'Gold' },
    { id: 2, name: 'Priya S', visits: 18, lastVisit: '1 day ago', loyalty: 'Silver' },
    { id: 3, name: 'Mohammad A', visits: 15, lastVisit: '4 days ago', loyalty: 'Gold' },
    { id: 4, name: 'Lakshmi R', visits: 12, lastVisit: 'Today', loyalty: 'Bronze' },
  ];

  const CollectView = () => (
    <>
      <div className="bg-blue-600 text-white p-4 rounded-b-xl shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Welcome, Krishna's Store</h1>
            <p className="text-sm opacity-90">Merchant ID: 8271625</p>
          </div>
          <div className="flex gap-3">
            <button className="hover:opacity-80">
              <Bell className="w-6 h-6" />
            </button>
            <button className="hover:opacity-80">
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>
        <Card className="mt-4 bg-white/10 backdrop-blur-sm text-white border-0">
          <CardContent className="p-4">
            <p className="text-sm">Today's Collection</p>
            <h2 className="text-2xl font-bold flex items-center gap-1">
              <IndianRupee className="w-5 h-5" />
              {todayStats.totalSales.toLocaleString()}
            </h2>
            <div className="flex justify-between mt-2 text-sm">
              <span>{todayStats.transactions} transactions</span>
              <span>Avg. ₹{todayStats.avgTicketSize}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4">
        <button 
          className="w-full"
          onClick={() => setActiveTab('collect')}
        >
          <Card className="bg-green-50 border-0 shadow-sm hover:bg-green-100 transition-colors">
            <CardContent className="p-4 flex flex-col items-center">
              <QrCode className="w-8 h-8 text-green-600 mb-2" />
              <p className="text-sm font-medium">Collect Payment</p>
            </CardContent>
          </Card>
        </button>
        <button 
          className="w-full"
          onClick={() => setActiveTab('history')}
        >
          <Card className="bg-blue-50 border-0 shadow-sm hover:bg-blue-100 transition-colors">
            <CardContent className="p-4 flex flex-col items-center">
              <History className="w-8 h-8 text-blue-600 mb-2" />
              <p className="text-sm font-medium">Transactions</p>
            </CardContent>
          </Card>
        </button>
      </div>

      <Card className="mx-4 border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Recent Transactions</CardTitle>
          <CardDescription>Today's latest payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentTransactions.map(tx => (
              <div key={tx.id} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{tx.customer}</p>
                  <p className="text-sm text-gray-500">{tx.time}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">+₹{tx.amount}</p>
                  <p className="text-xs text-gray-500">Completed</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );

  const HistoryView = () => (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Transaction History</h1>
        <button className="hover:opacity-80">
          <Download className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      
      <Card className="mb-4 border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <Calendar className="w-6 h-6 text-gray-600" />
            <span className="text-sm font-medium">Last 7 days</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Total Collected</p>
              <p className="text-lg font-bold text-green-600">₹{analyticsData.weeklyTotal}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Transactions</p>
              <p className="text-lg font-bold">{todayStats.transactions * 7}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {[...recentTransactions, ...recentTransactions].map((tx, index) => (
          <Card key={index} className="border-0 shadow-sm">
            <CardContent className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{tx.customer}</p>
                  <p className="text-sm text-gray-500">{tx.time}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">+₹{tx.amount}</p>
                  <p className="text-xs text-gray-500">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const AnalyticsView = () => (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Business Analytics</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">This Week</p>
            <p className="text-lg font-bold text-green-600">₹{analyticsData.weeklyTotal}</p>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>12% ↑</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">This Month</p>
            <p className="text-lg font-bold text-green-600">₹{analyticsData.monthlyTotal}</p>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>8% ↑</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm mb-4">
        <CardHeader>
          <CardTitle className="text-lg">Top Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {analyticsData.topCustomers.map((customer, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{customer.name}</p>
                  <p className="text-sm text-gray-500">{customer.visits} visits</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹{customer.total}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const CustomersView = () => (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Customer Directory</h1>
      
      <div className="space-y-3">
        {customersList.map((customer) => (
          <Card key={customer.id} className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{customer.name}</p>
                  <p className="text-sm text-gray-500">{customer.visits} visits • {customer.lastVisit}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    customer.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                    customer.loyalty === 'Silver' ? 'bg-gray-100 text-gray-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {customer.loyalty}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderActiveView = () => {
    switch (activeTab) {
      case 'history':
        return <HistoryView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'customers':
        return <CustomersView />;
      default:
        return <CollectView />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-16">
      {renderActiveView()}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-2">
        <button 
          className={`flex flex-col items-center w-full cursor-pointer ${
            activeTab === 'collect' ? 'text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('collect')}
        >
          <IndianRupee className="w-6 h-6" />
          <span className="text-xs">Collect</span>
        </button>
        <button 
          className={`flex flex-col items-center w-full cursor-pointer ${
            activeTab === 'history' ? 'text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('history')}
        >
          <History className="w-6 h-6" />
          <span className="text-xs">History</span>
        </button>
        <button 
          className={`flex flex-col items-center w-full cursor-pointer ${
            activeTab === 'analytics' ? 'text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('analytics')}
        >
          <TrendingUp className="w-6 h-6" />
          <span className="text-xs">Analytics</span>
        </button>
        <button 
          className={`flex flex-col items-center w-full cursor-pointer ${
            activeTab === 'customers' ? 'text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('customers')}
        >
          <Users className="w-6 h-6" />
          <span className="text-xs">Customers</span>
        </button>
      </div>
    </div>
  );
};

export default MerchantApp;