import * as AuthHooks from "../../hooks/auth/index";
import * as Buttons from "../buttons/index";
import * as Inputs from "../inputs/index";
import webLogo from "../../assets/web_logo.png";

export const ResetPasswordForm = () => {
  const {
    resetPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    error,
  } = AuthHooks.useResetPassword();

  return (
    <form className="flex flex-col items-center justify-center gap-3 sm:h-[495px] md:gap-1 w-[450px] rounded-4xl sm:shadow-2xl sm:bg-form-bg">
      <div className="flex flex-col h-full justify-center sm:justify-around gap-3 w-full px-7">
        <div className="flex flex-col gap-3">
          {/* Logo and Tagline */}
          <div className="flex flex-col w-full justify-start">
            <img src={webLogo} alt="web-logo" className="w-58" />
            <h1 className="font-semibold font-fredoka text-2xl text-primary">
              Create a strong new password
            </h1>
          </div>
          {/* Inputs and Auth Button */}
          <div>
            <Inputs.InputPassword
              label="New password"
              placeholder="******"
              value={newPassword}
              onChange={setNewPassword}
            />
            <Inputs.InputPassword
              label="Confirm password"
              placeholder="******"
              value={confirmPassword}
              onChange={setConfirmPassword}
            />
          </div>
          <div className="flex flex-col mt-3 gap-3">
            <Buttons.PrimaryButton
              type="submit"
              onClick={resetPassword}
              loading={loading}
            >
              {loading ? "Loading..." : "Continue"}
            </Buttons.PrimaryButton>
          </div>
          <div className="flex justify-center mt-3">
            <p>
              <span>
                <a href="/forgot-password" className="text-primary">
                  Back
                </a>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};
