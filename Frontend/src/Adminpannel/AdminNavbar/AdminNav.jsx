import React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AirplanemodeActiveTwoToneIcon from '@mui/icons-material/AirplanemodeActiveTwoTone';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import WallpaperTwoToneIcon from '@mui/icons-material/WallpaperTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';

import Dashboard from '../Dashboard/Dashboard';
import Customer from '../Coustmer/Coustmer';
import PaymentRequest from '../PaymentRequest/PaymentRequset';
import PaymentSuccessfull from '../PaymentSuccessfull/PaymentSuccessfull';
import AccountForm from '../AccountForm/AccountForm'; // Import the AccountForm component

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'payment-request',
    title: 'Payment Request',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Payment CheckOut',
    icon: <AdminPanelSettingsTwoToneIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Payment Successfull',
        icon: <AirplanemodeActiveTwoToneIcon />,
      },
    ],
  },
  {
    segment: 'customer',
    title: 'Customer',
    icon: <SupportAgentTwoToneIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Account Management',
  },
  {
    segment: 'account',
    title: 'Account Management',
    icon: <AccountBalanceWalletTwoToneIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          {/* Render content based on route */}
          {router.pathname === '/dashboard' && <Dashboard />}
          {router.pathname === '/customer' && <Customer />}
          {router.pathname === '/payment-request' && <PaymentRequest />}
          {router.pathname === '/reports/sales' && <PaymentSuccessfull />}
          {router.pathname === '/account' && <AccountForm />} {/* Render AccountForm */}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
