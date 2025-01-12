/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Logo from "../elements/logo";

const AuthLayout = ({ children, type }) => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-special-mainBg">
      {/* Container Start */}
      <div className="w-full max-w-sm">
        <Logo />

        {type === "forgot" && (
          <div className="flex flex-col gap-4 mt-10 items-center justify-center">
            <span className="text-xl font-bold">Forgot Password</span>
            <small className="capitalize">
              Enter your email to get the password reset link
            </small>
          </div>
        )}

        {/* Form Start */}
        <div className="mt-16">{children}</div>
        {/* Form End */}

        {type === "sign up" && (
          <>
            {/* Divider Text Start */}
            <div className="my-9 px-7 flex justify-center text-xs text-gray-03 items-center flex-col relative">
              <div className="border border-gray-05 w-full"></div>
              <div className="px-2 bg-special-mainBg absolute">
                or sign in with
              </div>
            </div>
            {/* Divider Text End */}

            {/* Google Sign-In Button Start */}
            <div className="mb-8">
              <button
                className="h-12 flex items-center justify-center rounded-md text-sm w-full bg-gray-05 text-gray-01"
                type="button"
              >
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-0.5 0 48 48"
                >
                  <g fill="none" fillRule="evenodd">
                    <g id="Color-">
                      <path
                        fill="#FBBC05"
                        d="M9.83 24a14.17 14.17 0 010-9.36L2.62 13.6a23.87 23.87 0 000 20.8l7.91-6.06A14.15 14.15 0 019.83 24z"
                      />
                      <path
                        fill="#EB4335"
                        d="M23.71 10.13a13.52 13.52 0 018.65 3.09l6.84-6.83A23.88 23.88 0 0023.71 0.53c-9.29 0-17.27 5.31-21.09 13.06L10.53 19.64a13.5 13.5 0 0113.18-9.51z"
                      />
                      <path
                        fill="#34A853"
                        d="M23.71 37.87a13.5 13.5 0 01-13.18-9.51l-7.91 6.04a23.88 23.88 0 0021.09 12.87c5.73 0 11.2-2.04 15.33-5.85l-7.51-5.8a13.5 13.5 0 01-8.82 2.25z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.15 24c0-1.39-.21-2.78-.54-4.26H23.71v9.07h12.6a13.48 13.48 0 01-4.8 6.09l7.51 5.8C43.33 37.61 46.15 31.65 46.15 24z"
                      />
                    </g>
                  </g>
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
            {/* Google Sign-In Button End */}
          </>
        )}

        {/* Link Section Start */}
        <div className="flex justify-center">
          {type === "sign up" ? (
            <>
              <span className="text-sm text-gray-03">
                Already have an account?&nbsp;
              </span>
              <Link to="/login" className="text-primary text-sm font-bold">
                Sign In Here
              </Link>
            </>
          ) : type === "forgot" ? (
            <Link to="/login" className="text-primary mt-5 text-sm font-bold">
              Back To Login
            </Link>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <Link to="/register" className="text-primary text-sm font-bold">
                Create an account
              </Link>
              <Link
                to="/forgotPassword"
                className="text-primary text-sm font-bold"
              >
                Forgot Password
              </Link>
            </div>
          )}
        </div>
        {/* Link Section End */}
      </div>
      {/* Container End */}
    </div>
  );
};

export default AuthLayout;
