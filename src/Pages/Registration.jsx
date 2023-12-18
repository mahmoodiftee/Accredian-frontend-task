import { Link } from "react-router-dom";

const Registration = () => {

    const handleSignUp = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;    
        console.log(name, email, password);
    
        if (
          password.length < 6 ||
          !/[A-Z]/.test(password) ||
          !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)
        ) {
            console.log('Password must be at least 6 characters, contain one uppercase letter, and one special character');
        //   Swal.fire({
        //     icon: 'error',
        //     text: 'Password must be at least 6 characters, contain one uppercase letter, and one special character',
        //   });
        //   return;
        }
      };


    return (
        <div className="mt-10 h-screen">
        <div className="flex justify-center items-center ">
          <div className="max-w-[600px] lg:px-10 relative flex flex-col rounded-xl border bg-white bg-clip-border  text-[#403F3F] shadow-none">
            <p className="block w-[60%] mx-auto border-b-2 py-2 text-center text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Register
            </p>
            <form
              onSubmit={handleSignUp}
              className="mt-4 mb-4 w-80 max-w-screen-lg"
            >
              <div className="mb-4 flex flex-col gap-4">
                <div className="relative h-10 w-[80%] mx-auto min-w-[200px]">
                  <input
                    className="peer rounded-lg h-full w-full  border border-blue-gray-200 border-t-transparent bg-[#F3F3F3] p-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#403F3F] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    name="name"
                    required
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[9px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[9px] peer-focus:leading-tight peer-focus:text-[#403F3F] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#403F3F] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#403F3F] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Enter your name
                  </label>
                </div>
                <div className="relative h-10 w-[80%] mx-auto min-w-[200px]">
                  <input
                    className="peer rounded-lg h-full w-full  border border-blue-gray-200 border-t-transparent bg-[#F3F3F3] p-5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#403F3F] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="email"
                    name="email"
                    required
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[9px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[9px] peer-focus:leading-tight peer-focus:text-[#403F3F] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#403F3F] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#403F3F] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Enter your Email
                  </label>
                </div>
                <div className="relative h-10 w-[80%] mx-auto min-w-[200px]">
                  <input
                    type="password"
                    className="peer rounded-lg h-full w-full  border border-blue-gray-200 border-t-transparent bg-[#F3F3F3] p-5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#403F3F] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    name="password"
                    required
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[9px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[9px] peer-focus:leading-tight peer-focus:text-[#403F3F] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#403F3F] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#403F3F] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Enter your Password
                  </label>
                </div>
              </div>
              <button
                className="mt-4 block w-[80%] mx-auto select-none rounded-lg bg-[#403F3F] py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-[#403F3F]/20 transition-all hover:shadow-lg hover:shadow-[#403F3F]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                data-ripple-light="true"
              >
                Register
              </button>
              <p className="mt-4 text-[12px] block text-center font-normal leading-relaxed  text-[#403F3F] antialiased">
                Already have an account?
                <Link
                  to={"/login"}
                  className="font-medium text-[#292929] transition-colors hover:text-[#777676]"
                  href="#"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Registration;