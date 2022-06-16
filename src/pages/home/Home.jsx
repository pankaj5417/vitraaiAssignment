import { Rightbar } from "../../components/rightbar/Rightbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./home.css";
export const Home = () => {
  return (
    <>
      <div className="home">
        <Sidebar />
        <Rightbar />
      </div>
    </>
  );
};
