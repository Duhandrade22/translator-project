import Background from "@/assets/background/hero_img-sm.jpg";

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

const BackgroundLayout = ({ children }: BackgroundLayoutProps) => {
  return (
    <div className="relative min-h-screen w-full">
      <img
        src={Background}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen --4">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;
