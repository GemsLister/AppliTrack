import * as AuthHooks from "../../hooks/auth/index";
import * as Buttons from "../buttons/index";
import * as Inputs from "../inputs/index";
import webLogo from "../../assets/web_logo.png";

export const LoginForm = () => {
  const { login, email, setEmail, password, setPassword, loading, error } =
    AuthHooks.useLogin();

  const inputFields = [
    <Inputs.InputEmail
      label="Email"
      placeholder="name@email.com"
      value={email}
      onChange={setEmail}
    />,
    <Inputs.InputPassword
      label="Password"
      placeholder="******"
      value={password}
      onChange={setPassword}
    />,
  ];

  return (
    <form className="flex flex-col items-center justify-center gap-3 sm:h-[495px] md:gap-1 w-[450px] rounded-4xl sm:shadow-2xl sm:bg-form-bg">
      <div className="flex flex-col h-full justify-center sm:justify-around gap-3 w-full px-7">
        <div className="flex flex-col gap-3">
          {/* Logo and Tagline */}
          <div className="flex flex-col w-full justify-start">
            <img src={webLogo} alt="web-logo" className="w-58" />
            <h1 className="font-semibold font-fredoka text-2xl text-primary">
              Sign in and stay on track!
            </h1>
          </div>
          {/* Inputs and Auth Button */}
          <div className="flex flex-col">
            <div className="grid grid-rows-2">
              {inputFields.map((inputs, index) => (
                <div className="flex flex-col my-1" key={index}>
                  {inputs}
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <a href="/forgot-password" className="text-primary">
                Forgot password
              </a>
            </div>
            <div className="flex flex-col mt-3 gap-3">
              <Buttons.PrimaryButton
                type="submit"
                onClick={login}
                loading={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Buttons.PrimaryButton>
            </div>
            <div className="flex justify-center mt-3">
              <p>
                Don't have an account?{" "}
                <span>
                  <a href="/register" className="text-primary">
                    Register
                  </a>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
