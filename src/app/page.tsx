import AuthLayout from "@/components/templates/AuthLayout/AuthLayout";
import LoginWrapper from "@/features/auth/components/LoginWrapper/LoginWrapper";

export default function Home() {
  return (
    <AuthLayout
      title="Welcome to Walletwise! 👋"
      description="Please sign-in to your account"
    >
      <LoginWrapper />
    </AuthLayout>
  );
}
