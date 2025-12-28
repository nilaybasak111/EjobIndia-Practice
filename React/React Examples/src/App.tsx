import July19Ex1 from "./components/19July_ex1";
import July19Ex2 from "./components/19July_ex2";
import UserInput from "./components/26July_ User Input_ex2";
import UserInput1 from "./components/26July_ User Input_ex3";
import July26Ex1 from "./components/26July_ex1";
import July27Ex1 from "./components/27July_ex1";
import July27Ex2 from "./components/27July_ex2";
import July27Ex3 from "./components/27July_ex3";
import July27HWEx1 from "./components/27July_HW_ex1";
import AUG2Ex1 from "./components/2AUG_ex1";
import AUG2Ex2 from "./components/2AUG_ Conditional Rendering _ex2";
import AUG2Ex3 from "./components/2AUG_ Toggle Button _ex3";
import AUG3InlineCssEx1 from "./components/3AUG_ Inline Css _ex1";
import AUG3ExternalCssEx2 from "./components/3AUG_ External Css _ex2";
import AUG3BootstrapEx3 from "./components/3AUG_ Bootstrap _ex3";
import AUG3PropsParentEx4 from "./components/3AUG_ Props Parent _ex4";
import AUG3InformationEx5 from "./components/3AUG_ Information _ex5";
import AUG9FunctionPassingParentEx2 from "./components/9AUG_ Function Passing Parent _ex2";
import AUG9StudentInfoEx1 from "./components/9AUG_ Student Info _ex1";
import AUG9ItemsHW1 from "./components/9AUG_ Items _HW1";
import AUG10LifecycleEx1 from "./components/10AUG_ Lifecycle _ex1";
import AUG10LifecycleEx2 from "./components/10AUG_ Lifecycle _ex2";
import AUG10EmpDetails from "./components/10AUG_ EmpDetails _HW1";
import AUG10EmpDetails2 from "./components/10AUG_ EmpDetails _HW2";
import { AUG17RefEx1 } from "./components/17AUG_ Reference _ex1";
import AUG17RefParentEx2 from "./components/17AUG_ Reference Parent_ex2";
import AUG17RefParent2Ex2 from "./components/17AUG_ Reference Parent2_ex2";
import AUG23HooksEx1 from "./hooks/23AUG_ hooks _ex1";
import AUG23HooksUserInputEx2 from "./hooks/23AUG_ hooks User Input _ex2";
import AUG30HooksEx1 from "./hooks/30AUG_ hooks _ex1";
import AUG30HooksEx2 from "./hooks/30AUG_ hooks _ex2";
import AUG30HooksEx3 from "./hooks/30AUG_ hooks _ex3";
import SEP01HooksRefEx1 from "./hooks/01SEP_ hooks useRef _ex1";
import SEP01HooksRefCricketEx2 from "./hooks/01SEP_ hooks useRef _ Cricket _ex2";
import SEP06HooksUseEffectEx1 from "./hooks/06SEP_ useEffect _ex1";
import SEP06HooksUseMemoEx2 from "./hooks/06SEP_ useMemo _ex2";
import SEP06MovieTicketBookingHW from "./hooks/06SEP_ Movie Ticket Booking _HW";
import SEP07ContextParentEx1 from "./context API/07SEP_ Parent CreateContext _ex1";
import SEP07ProfileHW from "./context API/07SEP_ Profile _HW";
import SEP13RoutingRulesEx1 from "./routing/13SEP_ Routing Rules _ex1";
import SEP14DynamicRoutingRoutingRulesHW from "./routing/14SEP_ Dynamic Routing RoutingRules _HW";
import SEP20ProtectedRoutingRulesEx1 from "./routing/Privated _ Protected Routing/20SEP_ Protected Routing Rules _ex1";
import SEP27ApiEx1 from "./Data Display From Backend API/27SEP_ API _ex1";
import OCT04APIEx1 from "./Data Display From Backend API/04OCT_ API _ex1";
import OCT04APIEx2 from "./Data Display From Backend API/04OCT_ API _ex2";
import OCT04APIUsersEx3 from "./Data Display From Backend API/04OCT_ API Users _ex3";
import OCT04APIUsersEx4 from "./Data Display From Backend API/04OCT_ API Users _ex4";
import OCT04APIUsersHW from "./Data Display From Backend API/04OCT_ API Users _HW";
import OCT05APISEARCHEx1 from "./Data Display From Backend API/05OCT_API SEARCH _ex1";
import OCT05APIPOSTEx2 from "./Data Display From Backend API/05OCT_API POST _ex2";
import OCT11APIPaginationEx1 from "./Data Display From Backend API/11OCT_ Pagination API _ex1";
import OCT11APIPaginationEx2 from "./Data Display From Backend API/11OCT_ Pagination API _ex2";
import OCT11APIPaginationHW from "./Data Display From Backend API/11OCT_ Pagination API_HW";
import OCT12InputValidationEx1 from "./Input Validation Formik Yup/12OCT_Input Validation_ex1";
import OCT12InputValidationEx2 from "./Input Validation Formik Yup/12OCT_Input Validation_ex2";
import OCT12InputValidationEx3 from "./Input Validation Formik Yup/12OCT_Input Validation_ex3";

function App() {
  return (
    <>
      {/* <July19Ex1 />
      <July19Ex2 />
      <July26Ex1 />
      <UserInput />
      <UserInput1 />
      <July27Ex1 />
      <July27Ex2 />
      <July27Ex3 />
      <July27HWEx1 />
      <AUG2Ex1 />
      <AUG2Ex2 />
      <AUG2Ex3 />
      <AUG3InlineCssEx1 />
      <AUG3ExternalCssEx2 />
      <AUG3BootstrapEx3 />
      <AUG3PropsParentEx4 />
      <AUG3InformationEx5 />
      <AUG9StudentInfoEx1 />
      <AUG9FunctionPassingParentEx2 />
      <AUG9ItemsHW1 />
      <AUG10LifecycleEx1 />
      <AUG10LifecycleEx2 />
      <AUG10EmpDetails />
      <AUG10EmpDetails2 />
      <AUG17RefEx1 />
      <AUG17RefParentEx2 />
      <AUG17RefParent2Ex2 />
      <AUG23HooksEx1 />
      <AUG23HooksUserInputEx2 />
      <AUG30HooksEx1 />
      <AUG30HooksEx2 />
      <AUG30HooksEx3 />
      <SEP01HooksRefEx1 />
      <SEP01HooksRefCricketEx2 />
      <SEP06HooksUseEffectEx1 />
      <SEP06HooksUseMemoEx2 />
      <SEP06MovieTicketBookingHW />
      <SEP07ContextParentEx1 />
      <SEP07ProfileHW />
      <SEP13RoutingRulesEx1 />
      <SEP14DynamicRoutingRoutingRulesHW />
      <SEP13RoutingRulesEx1 />
      <SEP20ProtectedRoutingRulesEx1 />
      <SEP27ApiEx1 />
      <OCT04APIEx1 />
      <OCT04APIEx2 />
      <OCT04APIUsersEx3 />
      <OCT04APIUsersEx4 />
      <OCT04APIUsersHW />
      <OCT05APISEARCHEx1 />
      <OCT05APIPOSTEx2 />
      <OCT11APIPaginationEx1 />
      <OCT11APIPaginationEx2 />
      <OCT11APIPaginationHW />
      <OCT12InputValidationEx1 />
      <OCT12InputValidationEx2 /> */}
      <OCT12InputValidationEx3 />
    </>
  );
}

export default App;
