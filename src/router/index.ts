import { createWebHistory, createRouter } from "vue-router";
import * as pages from "../pages";

const routes = [
  { path: "/badroom", component: pages.BadroomPage },
  { path: "/livingRoom", component: pages.LivingRoomPage },
  { path: "/diningRoom", component: pages.DiningRoomPage },
  { path: "/office", component: pages.OfficePage },
  { path: "/kitchen", component: pages.KitchenPage },
  { path: "/sofa", component: pages.SofaPage },
  { path: "/home", component: pages.HomePage },
  { path: "/support", component: pages.SupportPage },
  { path: "/privacyPolicy", component: pages.PrivacyPolicyPage },
  { path: "/termsAndConditions", component: pages.TermsAndConditionsPage },
  { path: "/basket", component: pages.BasketPage },
];
const history = createWebHistory();

const router = createRouter({
  history: history,
  routes,
});

export default router;
