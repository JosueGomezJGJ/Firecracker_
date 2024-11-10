import { Navbar } from "./_components/navbar";
import Chatbot from "./_components/Chatbot";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
      <Chatbot /> 
      <div className="fixed bottom-4 right-4">
        <Chatbot />
      </div>
    </div>
  );
};

export default DashboardLayout;
