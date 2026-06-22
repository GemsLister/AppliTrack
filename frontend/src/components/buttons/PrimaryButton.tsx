import { LoadingAnimation } from "../../assets/icons/LoadingAnimation";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick: () => Promise<void>;
  loading: boolean;
  type: "button" | "submit";
};

export const PrimaryButton = ({
  children,
  loading,
  onClick,
  type,
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex justify-center bg-primary w-full rounded-xl p-2 text-amber-50"
      disabled={loading}
    >
      {children}
    </button>
  );
};
