import { createBrowserRouter, } from "react-router-dom";
import Main from "../layout/Main";
import CustomerDashboard from "../Pages/CustomerDashboard";
import AllCategories from "../Pages/AllCategories";
import AllProducts from "../Pages/AllProducts";
import SpecificProduct from "../Pages/SpecificProduct";
import BatchHistory from "../Pages/customer-dashboard-pages/BatchHistory";
import NewCategory from "../Pages/NewCategory";
import HomeScreenBanner from "../Pages/HomeScreenBanner";
import AddNewProduct from "../Pages/AddNewProduct";
import ProductSale from "../Pages/ProductSale";
import ProductHistory from "../Pages/ProductHistory";
import BatchHistory2 from "../Pages/BatchHistory2";
import BatchHistoryDetails from "../Pages/BatchHistoryDetails";
import AllRegisteredCoustomers from "../Pages/AllRegisteredCoustomers";
import CustomerProfile from "../Pages/CustomerProfile";
import CustomerAffiliateList from "../Pages/CustomerAffiliateList";
import CustomerAffiliateDetails from "../Pages/CustomerAffiliateDetails";
import CustomerAffiliateOrderList from "../Pages/CustomerAffiliateOrderList";
import CustomerAffiliateOrderDetails from "../Pages/CustomerAffiliateOrderDetails";
import NotificationList from "../Pages/NotificationList";
import NewNotification from "../Pages/NewNotification";
import ProductWithReviewList from "../Pages/ProductWithReviewList";
import ProductsReviews from "../Pages/ProductsReviews";
import AllFaqsList from "../Pages/AllFaqsList";
import AddNewFaq from "../Pages/AddNewFaq";
import DeliverySchedule from "../Pages/DeliverySchedule";
import CustomerSupport from "../Pages/CustomerSupport";
import Chat from "../Pages/Chat";
import RidersOnline from "../RiderPages/RidersOnline";
import RidersOnmove from "../RiderPages/RidersOnmove";
import RidersOrderdetail from "../RiderPages/RidersOrderdetail";
import RegisterRiders from "../RiderPages/RegisterRiders";
import RiderProfile from "../RiderPages/RiderProfile";
import NewApplications from "../RiderPages/NewApplications";
import RiderAppdetails from "../RiderPages/RiderAppdetails";
import RidersWallet from "../RiderPages/RidersWallet";
import RiderwaletDetail from "../RiderPages/RiderwaletDetail";
import RidertransactionDetail from "../RiderPages/RidertransactionDetail";
import TransactionRequest from "../RiderPages/TransactionRequest";
import TransactionRequestdetail from "../RiderPages/TransactionRequestdetail";
import OrderHistory from "../RiderPages/OrderHistory";
import OrderDetails from "../RiderPages/OrderDetails";
import FaqsList from "../RiderPages/FaqsList";
import NewFaq from "../RiderPages/NewFaq";
import Notification from "../RiderPages/Notification";
import NewNotifications from "../RiderPages/NewNotifications";
import Support from "../RiderPages/Support";

//partner pages
import CustomerPartners from "../Pages/Partner Pages/CustomerPartners";
import CpAffiliates from "../Pages/Partner Pages/CpAffiliates";
import AffiliatesOrder from "../Pages/Partner Pages/AffiliatesOrder";
import SalePartner from "../Pages/Partner Pages/SalePartner";
import SpAffiliates from "../Pages/Partner Pages/SpAffiliates";
import SpAffiliatesOrder from "../Pages/Partner Pages/SpAffiliatesOrder";
import PrimeSalePartner from "../Pages/Partner Pages/PrimeSalePartner";
import SpAffiliates2 from "../Pages/Partner Pages/SpAffiliates2";
import SpAffiliateOrder2 from "../Pages/Partner Pages/SpAffiliateOrder2";
import Register from "../Pages/Partner Pages/Register";
import PartnerProfile from "../Pages/Partner Pages/PartnerProfile";
import NewApplication from "../Pages/Partner Pages/NewApplication";
import PartnerAppDetails from "../Pages/Partner Pages/PartnerAppDetails";
import PartnerAffiliate from "../Pages/Partner Pages/PartnerAffiliate";
import PartnerAffOrder from "../Pages/Partner Pages/PartnerAffOrder";
import PartnerAffOrdDetail from "../Pages/Partner Pages/PartnerAffOrdDetail";
import PartnerWallet from "../Pages/Partner Pages/PartnerWallet";
import PartnerWalletDetail from "../Pages/Partner Pages/PartnerWalletDetail";
import PartnerTransacDetail from "../Pages/Partner Pages/PartnerTransacDetail";
import TransactionRequestPartner from "../Pages/Partner Pages/TransactionRequestPartner";
import TransacRequestdetail from "../Pages/Partner Pages/TransacRequestDetail";
import AllFaqs from "../Pages/Partner Pages/AllFaqs";
import AddNewFaqPartner from "../Pages/Partner Pages/AddNewFaqPartner";
import NotificationPartner from "../Pages/Partner Pages/NotificationPartner";
import NewNotificationPartner from "../Pages/Partner Pages/NewNotificationPartner";
import SpAffiliateOrderDetail from "../Pages/Partner Pages/SpAffiliateOrderDetail";
import CpAffiliateOrderDetail from "../Pages/Partner Pages/CpAffiliateOrderDetail";
import SpAffiliateOrderDetail2 from "../Pages/Partner Pages/SpAffiliateOrderDetail2";
// import PartnerSupport from "../Pages/Partner Pages/partnerSupport";
import PartnerChat from "../Pages/Partner Pages/PartnerChat";
import PartnerMain from "../layout/PartnerMain";
import VendorMain from "../layout/VendorMain";
import VendorDashboard from "../Vendor Pages/VendorDashboard";
import LiveProducts from "../Vendor Pages/LiveProducts";
import VendorProductDetails from "../Vendor Pages/VendorProductDetails";
import VendorBatchHistory from "../Vendor Pages/VendorBatchHistory";
import VendorPriceUpdate from "../Vendor Pages/VendorPriceUpdate";
import VendorBatchUpdate from "../Vendor Pages/VendorBatchUpdate";
import VendorBatchUpdateDetails from "../Vendor Pages/VendorBatchUpdateDetails";
import VendorNewProducts from "../Vendor Pages/VendorNewProducts";
import VendorNewProductDetails from "../Vendor Pages/VendorNewProductDetails";
import RegisteredVendors from "../Vendor Pages/RegisteredVendors";
import VendorDetails from "../Vendor Pages/VendorDetails";
import NewVendorApplication from "../Vendor Pages/NewVendorsApplication";
import VendorApplicationDetails from "../Vendor Pages/VendorApplicationDetails";
import VendorWallet from "../Vendor Pages/VendorWallet";
import VendorWalletDetail from "../Vendor Pages/VendorWalletDetail";
import VendorTransacDetail from "../Vendor Pages/VendorTransacDetail";
import VendorProductHistory from "../Vendor Pages/VendorProductHistory";
import ProductBatchHistory from "../Vendor Pages/ProductBatchHistory";
import VendorBatchDetails from "../Vendor Pages/VendorBatchDetails";
import VendorTransacRequest from "../Vendor Pages/VendorTransacRequest";
import VendorTransacRequestDetail from "../Vendor Pages/VendorTransacRequestDetail";
import VendorAllFaqs from "../Vendor Pages/VendorAllFaqs";
import VendorAddNewFaq from "../Vendor Pages/VendorAddNewFaq";
import VendorNotifications from "../Vendor Pages/VendorNotifications";
import VendorNewNotifications from "../Vendor Pages/VendorNewNotifications";
import VendorSupport from "../Vendor Pages/VendorSupport";
import VendorChat from "../Vendor Pages/VendorChat";
import PartnerDashboard from "../Pages/Partner Pages/PartnerDashboard";
import PartnerLeaderboard from "../Pages/Partner Pages/PartnerLeaderboard";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <CustomerDashboard />
            },
            {
                path: '/all-categories',
                element: <AllCategories />
            },
            {
                path: '/all-products',
                element: <AllProducts />
            },
            {
                path: '/specific-product',
                element: <SpecificProduct />
            },
            {
                path: '/batch-history',
                element: <BatchHistory />
            },
            {
                path: '/new-cate',
                element: <NewCategory />
            },
            {
                path: '/home-banner',
                element: <HomeScreenBanner />
            },
            {
                path: '/add-new',
                element: <AddNewProduct />
            },
            {
                path: '/sale',
                element: <ProductSale />
            },
            {
                path: '/product',
                element: <ProductHistory />
            },
            {
                path: '/his',
                element: <BatchHistory2 />
            },
            {
                path: '/batchHistory',
                element: <BatchHistoryDetails />
            },
            {
                path: '/allRegisteredCoustomers',
                element: <AllRegisteredCoustomers />
            },
            {
                path: '/coustomerProfile',
                element: <CustomerProfile />
            },
            {
                path: '/coustomerAffiliateList',
                element: <CustomerAffiliateList />
            },
            {
                path: '/coustomerAffiliateDetails',
                element: <CustomerAffiliateDetails />
            },
            {
                path: '/coustomerAffiliateOrderList',
                element: <CustomerAffiliateOrderList />
            },
            {
                path: '/coustomerAffiliateOrderListDetails',
                element: <CustomerAffiliateOrderDetails />
            },
            {
                path: '/notificationList',
                element: <NotificationList />
            },
            {
                path: '/newnotification',
                element: <NewNotification />
            },
            {
                path: '/productswithreviewlist',
                element: <ProductWithReviewList />
            },
            {
                path: '/productsreveiws',
                element: <ProductsReviews />
            },
            {
                path: '/allfaqs',
                element: <AllFaqsList />
            },
            {
                path: '/addnewfaq',
                element: <AddNewFaqPartner />
            },
            {
                path: '/delivery',
                element: <DeliverySchedule />
            },
            {
                path: '/customer',
                element: <CustomerSupport />
            },
            {
                path: '/chat',
                element: <Chat />
            },
            {
                path: '/rider/online',
                element: <RidersOnline />
            },
            {
                path: '/rider/move',
                element: <RidersOnmove />
            },
            {
                path: '/rider/order-detail',
                element: <RidersOrderdetail />
            },
            {
                path: '/rider/register',
                element: <RegisterRiders />
            },
            {
                path: '/rider/profile',
                element: <RiderProfile />
            },
            {
                path: '/rider/application',
                element: <NewApplications />
            },
            {
                path: '/rider/app-details',
                element: <RiderAppdetails />
            },
            {
                path: '/rider/wallet',
                element: <RidersWallet />
            },
            {
                path: '/rider/wallet-detail',
                element: <RiderwaletDetail />
            },
            {
                path: '/rider/transaction-detail',
                element: <RidertransactionDetail />
            },
            {
                path: '/rider/request',
                element: <TransactionRequest />
            },
            {
                path: '/rider/request-detail',
                element: <TransactionRequestdetail />
            },
            {
                path: '/rider/history',
                element: <OrderHistory />
            },
            {
                path: '/rider/orderdetail',
                element: <OrderDetails />
            },
            {
                path: '/rider/faq',
                element: <FaqsList />
            },
            {
                path: '/rider/newfaq',
                element: <NewFaq />
            },
            {
                path: '/rider/notification',
                element: <Notification />
            },
            {
                path: '/rider/new-notification',
                element: <NewNotifications />
            },
            {
                path: '/rider/support',
                element: <Support />
            },
            {
                path: '/rider/chat',
                element: <Chat />
            }

        ]

    },
    {

        path: 'partner',
        element: <PartnerMain />,
        children: [
            {
                path: '',
                element: <PartnerDashboard />
            },

            {
                path: 'custompartner',
                element: <CustomerPartners />
            },
            {
                path: 'custompartner/cpaffiliates',
                element: <CpAffiliates />
            },
            {
                path: 'custompartner/cpaffiliates/affiliatesorder',
                element: <AffiliatesOrder />
            },
            {
                path: 'custompartner/cpaffiliates/affiliatesorder/cpaffiliateorderdetails',
                element: <CpAffiliateOrderDetail />
            },
            {
                path: 'salepartner',
                element: <SalePartner />
            },
            {
                path: 'salepartner/spaffiliates',
                element: < SpAffiliates />
            },
            {
                path: 'salepartner/spaffiliates/spaffiliateorder2',
                element: <SpAffiliateOrder2 />
            },
            {
                path: 'salepartner/spaffiliates/spaffiliateorder2/spaffiliateorderdetail',
                element: <SpAffiliateOrderDetail />
            },
            {
                path: 'primesalepartner',
                element: <PrimeSalePartner />
            },
            {
                path: 'primesalepartner/spaffiliates2',
                element: < SpAffiliates2 />
            },
            {
                path: 'primesalepartner/spaffiliates2/spaffiliatesorder',
                element: < SpAffiliatesOrder />
            },
            {
                path: 'primesalepartner/spaffiliates2/spaffiliatesorder/spaffiliateorderdetail2',
                element: <SpAffiliateOrderDetail2 />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'register/partnerprofile',
                element: <PartnerProfile />
            },
            {
                path: 'newapplication',
                element: <NewApplication />
            },
            {
                path: 'newapplication/partnerappdetails',
                element: <PartnerAppDetails />
            },

            {
                path: 'partnerleaderboard',
                element: <PartnerLeaderboard />
            },
            {
                path: 'partneraffiliate',
                element: <PartnerAffiliate />
            },
            {
                path: 'partneraffiliate/partnerafforder',
                element: <PartnerAffOrder />
            },
            {
                path: 'partneraffiliate/partnerafforder/parnterafforderdetails',
                element: <PartnerAffOrdDetail />
            },
            {
                path: 'partnerwallet',
                element: <PartnerWallet />
            },
            {
                path: 'partnerwallet/partnerwalletdetail',
                element: <PartnerWalletDetail />
            },
            {
                path: 'partnerwallet/partnerwalletdetail/partnertransacdetail',
                element: <PartnerTransacDetail />
            },
            {
                path: 'transactionrequest',
                element: <TransactionRequestPartner />
            },
            {
                path: 'transactionrequest/transacrequestdetail',
                element: < TransacRequestdetail />
            },
            {
                path: 'notification',
                element: <NotificationPartner />
            },
            {
                path: 'newnotification',
                element: <NewNotificationPartner />
            },
            {
                path: 'addpartnerfaq',
                element: <AddNewFaqPartner />
            },
            {
                path: 'allfaqs',
                element: <AllFaqs />
            },
            // {
            //     path: 'partnersupport',
            //     element: <PartnerSupport />
            // },
            {
                path: 'partnersupport/partnerchat',
                element: <PartnerChat />
            }
            // {
            //     path: 'cpaffiliates',
            //     element: <CpAffiliates />
            // },

        ]

    },
    {

        path: 'vendor',
        element: <VendorMain />,
        children: [
            {
                path: '',
                element: <VendorDashboard />
            },
            {
                path: 'live-products',
                element: <LiveProducts />
            },
            {
                path: 'live-products/product',
                element: <VendorProductDetails />
            },
            {
                path: 'batch-history',
                element: <VendorBatchHistory />
            },
            {
                path: 'price-update',
                element: <VendorPriceUpdate />
            },
            {
                path: 'batch-update',
                element: <VendorBatchUpdate />
            },
            {
                path: 'batch-update/vendor-update-details',
                element: <VendorBatchUpdateDetails />
            },
            {
                path: 'new-products',
                element: <VendorNewProducts />
            },
            {
                path: 'new-products/new-product-details',
                element: <VendorNewProductDetails />
            },
            {
                path: 'registered',
                element: <RegisteredVendors />
            },
            {
                path: 'registered/details',
                element: <VendorDetails />
            },
            {
                path: 'new-vendors',
                element: <NewVendorApplication />
            },
            {
                path: 'new-vendors/vendor-app-details',
                element: <VendorApplicationDetails />
            },
            {
                path: 'partnerafforder',
                element: <PartnerAffOrder />
            },
            {
                path: 'partnerappdetails',
                element: <PartnerAppDetails />
            },
            {
                path: 'partnerprofile',
                element: <PartnerProfile />
            },
            {
                path: 'partnertransacdetail',
                element: <PartnerTransacDetail />
            },
            {
                path: 'partnerwallet',
                element: <PartnerWallet />
            },
            {
                path: 'partnerwalletdetail',
                element: <PartnerWalletDetail />
            },
            {
                path: 'primesalepartner',
                element: <PrimeSalePartner />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'salepartner',
                element: <SalePartner />
            },
            {
                path: 'spaffiliateorder2',
                element: <SpAffiliateOrder2 />
            },
            {
                path: 'spaffiliateorderdetail',
                element: <SpAffiliateOrderDetail />
            },
            {
                path: 'spaffiliateorderdetail2',
                element: <SpAffiliateOrderDetail2 />
            },
            {
                path: 'spaffiliates',
                element: < SpAffiliates />
            },
            {
                path: 'spaffiliates2',
                element: < SpAffiliates2 />
            },
            {
                path: 'spaffiliatesorder',
                element: < SpAffiliatesOrder />
            },
            {
                path: 'transacrequestdetail',
                element: < TransacRequestdetail />
            },
            {
                path: 'transactionrequest',
                element: <TransactionRequestPartner />
            },
            {
                path: 'vendorwallet',
                element: <VendorWallet />
            },
            {
                path: 'vendorwallet/vendorwalletdetail',
                element: <VendorWalletDetail />
            },
            {
                path: 'vendorwallet/vendorwalletdetail/vendortransacdetail',
                element: <VendorTransacDetail />
            },
            {
                path: 'vendorproducthistory',
                element: <VendorProductHistory />
            },
            {
                path: 'vendorproducthistory/productbatchhistory',
                element: <ProductBatchHistory />
            },
            {
                path: 'vendorproducthistory/productbatchhistory/vendorbatchdetail',
                element: <VendorBatchDetails />
            },
            {
                path: 'vendortransacrequest',
                element: <VendorTransacRequest />
            },
            {
                path: 'vendortransacrequest/vendortransacrequestdetail',
                element: <VendorTransacRequestDetail />
            },
            {
                path: 'vendorallfaqs',
                element: <VendorAllFaqs />
            },
            {
                path: 'vendoraddnewfaq',
                element: <VendorAddNewFaq />
            },
            {
                path: 'vendornotification',
                element: <VendorNotifications />
            },
            {
                path: 'vendornewnotification',
                element: <VendorNewNotifications />
            },
            {
                path: 'vendorsupport',
                element: <VendorSupport />
            },
            {
                path: 'vendorsupport/vendorchat',
                element: <VendorChat />
            },
        ]

    }


])

export default router;