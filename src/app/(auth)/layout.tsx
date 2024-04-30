import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <Card variant="default" className="flex w-100 p-8 bg-purple-200 min-h-96">{children}</Card>;
  // return <div className='p-10 rounded-md'>{children}</div>;
};

export default AuthLayout;
