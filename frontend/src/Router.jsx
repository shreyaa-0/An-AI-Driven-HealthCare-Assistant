  import { createBrowserRouter } from "react-router-dom";
import AddTestResult from './Pages/AddTestResult';
import Appointment from './Pages/Appointment';
import Billing from "./Pages/Billing";
import Billing2 from "./Pages/Billing2";
import Blog from "./Pages/Blog";
import ConsultTopDoctors from './Pages/ConsultTopDoctors';
import Dashboard from './Pages/Dashboard';
import Generalinfo from './Pages/GeneralInfo';
import Glossary from "./Pages/Glossary";
import HealthProfile from './Pages/HealthProfile';
import HealthTips from './Pages/HealthTips';
import HelpSupport from './Pages/HelpSupport';
import Home1 from "./Pages/Home1";
import KnowledgeBase from "./Pages/KnowledgeBase";
import LabTestInterpretation from "./Pages/LabTestInterpretation";
import LifePatternsAndHabits from './Pages/LifePatternsAndHabits';
import MainHealthInformation from './Pages/MainHealthInformation';
import MedicalHistory from './Pages/MedicalHistory';
import PersonalInsights from './Pages/PersonalInsights';
import Primarygoal from "./Pages/Primarygoal";
import Quizintro from "./Pages/Quizintro";
import Secondopinion from "./Pages/Secondopinion";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Supplements from "./Pages/Supplements";
import SymptomsGuide from "./Pages/SymptomsGuide";
import TestResults from './Pages/TestResults';
import Ticket from './Pages/Ticket';
  const router = createBrowserRouter([
    { path: "/", element: <Home1 /> },
    { path: "/price", element: <Billing /> },
    { path: "/second-opinion", element: <Secondopinion />},
    { path: "/lab-test-interpretation", element: <LabTestInterpretation />},
    { path: "/blog", element: <Blog />},
    { path: "/symptoms-guide", element: <SymptomsGuide />},
    { path: "/sign-in", element: <SignIn />},
    { path: "/sign-up", element: <SignUp />},
    { path: "/sign-up", element: <SignUp />},
    { path: "/quizintro", element: <Quizintro />},
    { path: "/primary-goal", element: <Primarygoal />},
    { path: "/personal-insights", element: <PersonalInsights />},
    { path: "/general-info", element: <Generalinfo />},
    { path: "/medical-history", element: <MedicalHistory />},
    { path: "/life-habits", element: <LifePatternsAndHabits />},
    { path: "/dashboard", element: <Dashboard />},
    { path: "/profile", element: <HealthProfile />},
    { path: "/appointment", element: <Appointment />},
    { path: "/consult-doctors", element: <ConsultTopDoctors />},
    { path: "/test-result", element: <TestResults />},
    { path: "/add-test", element: <AddTestResult />},
    { path: "/help-support", element: <HelpSupport />},
    { path: "/ticket", element: <Ticket />},
    { path: "/main-health-info", element: <MainHealthInformation />},
    { path: "/supplements", element: <Supplements />},
    { path: "/billing", element: <Billing />},
    { path: "/Billing2", element: <Billing2 />},
    { path: "/knowledge-base", element: <KnowledgeBase />},
    { path: "/glossary", element: <Glossary />},
    { path: "/health-tips", element: <HealthTips />},


  ]);
  export default router;
