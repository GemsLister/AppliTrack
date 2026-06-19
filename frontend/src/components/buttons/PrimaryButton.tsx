type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick: () => Promise<void>;
  type: "button" | "submit";
};

export const PrimaryButton = ({
  children,
  onClick,
  type,
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary w-full rounded-xl p-2 text-amber-50"
    >
      {children}
    </button>
  );
};
