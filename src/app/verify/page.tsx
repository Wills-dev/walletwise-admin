import AuthLayout from "@/components/templates/AuthLayout/AuthLayout";
import VerifyWrapper from "@/features/auth/components/VerifyWrapper/VerifyWrapper";

const VerifyLoginPage = () => {
  return (
    <AuthLayout
      title="Verify Login"
      description="Please enter otp sent to your email."
    >
      <VerifyWrapper />
    </AuthLayout>
  );
};

export default VerifyLoginPage;
