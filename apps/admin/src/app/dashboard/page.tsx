'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
    ShoppingBag,
    Users,
    Flag,
    DollarSign,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Sparkles,
    ShieldAlert,
    CheckCircle2,
    Clock,
} from 'lucide-react';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

export default function DashboardPage() {
    const stats = [
        {
            title: 'Active Listings',
            value: '24,592',
            change: '+14.2%',
            trend: 'up',
            icon: ShoppingBag,
            color: 'text-listify-orange bg-listify-orange/10 border-listify-orange/20',
        },
        {
            title: 'Promoted Revenue',
            value: 'PKR 1.48M',
            change: '+22.5%',
            trend: 'up',
            icon: DollarSign,
            color: 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400',
        },
        {
            title: 'Verified Users',
            value: '18,240',
            change: '+8.1%',
            trend: 'up',
            icon: Users,
            color: 'text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400',
        },
        {
            title: 'Pending Moderation',
            value: '142',
            change: '-4.3%',
            trend: 'down',
            icon: Flag,
            color: 'text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400',
        },
    ];

    const listingTrendData = [
        { day: 'Mon', listings: 1240, revenue: 140000 },
        { day: 'Tue', listings: 1450, revenue: 165000 },
        { day: 'Wed', listings: 1890, revenue: 210000 },
        { day: 'Thu', listings: 1720, revenue: 195000 },
        { day: 'Fri', listings: 2200, revenue: 260000 },
        { day: 'Sat', listings: 2840, revenue: 340000 },
        { day: 'Sun', listings: 3100, revenue: 390000 },
    ];

    const categoryDistribution = [
        { name: 'Mobiles & Tablets', value: 42, color: '#FC6901' },
        { name: 'Vehicles & Cars', value: 28, color: '#3B82F6' },
        { name: 'Property & Rent', value: 18, color: '#10B981' },
        { name: 'Fashion & Beauty', value: 12, color: '#8B5CF6' },
    ];

    const recentModeration = [
        {
            id: 'LST-8942',
            title: 'iPhone 15 Pro Max 256GB Natural Titanium (PTA Approved)',
            category: 'Mobiles',
            price: 'PKR 345,000',
            seller: 'Usman Ali',
            sellerRating: '4.9 ⭐',
            time: '5 mins ago',
            status: 'PENDING',
        },
        {
            id: 'LST-8941',
            title: 'Honda Civic Oriel 1.5 Turbo 2022 Low Mileage',
            category: 'Vehicles',
            price: 'PKR 6,850,000',
            seller: 'Lahore Auto Motors',
            sellerRating: '5.0 ⭐ (Dealer)',
            time: '12 mins ago',
            status: 'PENDING',
        },
        {
            id: 'LST-8940',
            title: '1 Kanal Luxury House for Sale in DHA Phase 6',
            category: 'Property',
            price: 'PKR 75,000,000',
            seller: 'Hamza Estate',
            sellerRating: '4.8 ⭐',
            time: '25 mins ago',
            status: 'PENDING',
        },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-listify-dark p-6 md:p-8 text-white shadow-xl border border-slate-800">
                <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-listify-orange/20 blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-listify-orange/20 border border-listify-orange/30 text-listify-orange text-xs font-bold">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Listify Platform v2.0 Overview</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                            Marketplace Command Center
                        </h1>
                        <p className="text-slate-400 text-sm max-w-xl">
                            Real-time platform activity across Pakistan. Monitor listing velocity, automated risk scores, user trust badges, and revenue metrics.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="primary" className="shadow-lg shadow-listify-orange/30">
                            <CheckCircle2 className="h-4 w-4" />
                            Approve Pending ({stats[3].value})
                        </Button>
                    </div>
                </div>
            </div>

            {/* KPI Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={idx} className="relative overflow-hidden hover:shadow-md transition-all border-slate-200/80 dark:border-slate-800">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className={`p-3 rounded-2xl border ${stat.color}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div className={`flex items-center text-xs font-bold ${stat.trend === 'up' ? 'text-emerald-600' : 'text-amber-600'}`}>
                                        {stat.trend === 'up' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                                        {stat.change}
                                    </div>
                                </div>
                                <div className="mt-4 space-y-1">
                                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{stat.title}</p>
                                    <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">{stat.value}</p>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Analytics Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Listing Velocity & Revenue Area Chart */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div>
                            <CardTitle className="text-base font-bold">Listing Volume & Ad Sales</CardTitle>
                            <CardDescription>Daily listing submissions and featured ad revenue over 7 days</CardDescription>
                        </div>
                        <Badge variant="active" size="sm">
                            <TrendingUp className="h-3 w-3" /> Live
                        </Badge>
                    </CardHeader>
                    <CardContent className="pt-4">
                        <div className="h-72 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={listingTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="orangeGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#FC6901" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#FC6901" stopOpacity={0.0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="day" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#1E1E24',
                                            borderRadius: '12px',
                                            border: 'none',
                                            color: '#FFF',
                                        }}
                                    />
                                    <Area type="monotone" dataKey="listings" stroke="#FC6901" strokeWidth={3} fillOpacity={1} fill="url(#orangeGrad)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Category Breakdown Donut */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-bold">Top Categories</CardTitle>
                        <CardDescription>Listing distribution across main market segments</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center">
                        <div className="h-56 w-full flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={categoryDistribution}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {categoryDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="w-full space-y-2 mt-2">
                            {categoryDistribution.map((cat, idx) => (
                                <div key={idx} className="flex items-center justify-between text-xs font-medium">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                                        <span className="text-slate-700 dark:text-slate-300">{cat.name}</span>
                                    </div>
                                    <span className="font-bold text-slate-900 dark:text-slate-100">{cat.value}%</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Moderation Stream Table Preview */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="text-base font-bold">Pending Moderation Stream</CardTitle>
                        <CardDescription>Listings awaiting administrative compliance review</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                        View All Moderation Queue
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {recentModeration.map((item, idx) => (
                            <div key={idx} className="py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 shrink-0 font-bold text-xs">
                                        {item.id}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-listify-orange transition-colors">
                                            {item.title}
                                        </h4>
                                        <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500">
                                            <Badge variant="outline" size="sm">{item.category}</Badge>
                                            <span className="font-bold text-listify-orange">{item.price}</span>
                                            <span>•</span>
                                            <span>Seller: <strong>{item.seller}</strong> ({item.sellerRating})</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1 text-slate-400">
                                                <Clock className="h-3 w-3" /> {item.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    <Button variant="success" size="sm">
                                        Approve
                                    </Button>
                                    <Button variant="danger" size="sm">
                                        Reject
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
