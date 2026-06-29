import * as AuthHooks from "../../hooks/auth/index";
import * as Buttons from "../buttons/index";
import * as Inputs from "../inputs/index";
import { LoadingAnimation } from "../../assets/icons/LoadingAnimation";
import webLogo from "../../assets/web_logo.png";

export const RegisterForm = () => {
  const {
    register,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
  } = AuthHooks.useRegister();

  const inputFields = [
    <Inputs.InputText
      label="Username"
      placeholder="e.g. Juan Dela Cruz"
      value={username}
      onChange={setUsername}
    />,
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
    <form className="flex flex-col items-center justify-center gap-3 sm:h-[550px] md:gap-1 w-[450px] rounded-4xl sm:shadow-2xl sm:bg-form-bg">
      <div className="flex flex-col h-full justify-center sm:justify-around gap-3 w-full px-7">
        <div className="flex flex-col gap-3">
          {/* Logo and Tagline */}
          <div className="flex flex-col w-full justify-start">
            <img src={webLogo} alt="web-logo" className="w-58" />
            <h1 className="font-semibold font-fredoka text-2xl text-primary">
              Start tracking your dream job!
            </h1>
          </div>
          {/* Inputs and Auth Button */}
          <div className="grid grid-rows-3">
            {inputFields.map((inputs, index) => (
              <div className="flex flex-col my-1" key={index}>
                {inputs}
              </div>
            ))}
            <div className="mt-5">
              <Buttons.PrimaryButton
                type="submit"
                onClick={register}
                loading={loading}
              >
                {loading ? "Registering..." : "Register"}
              </Buttons.PrimaryButton>
            </div>
            <div className="flex justify-center mt-3">
              <p>
                Already have an account?{" "}
                <span>
                  <a href="/" className="text-primary">
                    Login
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
