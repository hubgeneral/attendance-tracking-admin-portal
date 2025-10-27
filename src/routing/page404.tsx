import Footer from "../components/Footer";
import ThemeBtn from "../components/ThemeBtn";
import page404white from "../assets/404.svg";
import page404dark from "../assets/dark404.svg";

const Page404 = () => {
  return (
    <div className="h-screen bg-[#F2F5F7] dark:bg-[#131C18] flex flex-col">
      <div className="absolute top-4 right-10">
        <ThemeBtn />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-[#FFFFFF] dark:bg-[#14241D] h-[60%] w-[35%] rounded-xl flex items-center justify-center">
          <>
            <img
              src={page404white}
              alt="page404white"
              className="dark:hidden h-96"
            />
            <img
              src={page404dark}
              alt="page404dark"
              className=" hidden dark:block h-96"
            />
          </>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page404;
