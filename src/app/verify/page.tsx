import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import AuthLayout from "@/components/templates/AuthLayout/AuthLayout";
import VerifyWrapper from "@/features/auth/components/VerifyWrapper/VerifyWrapper";

const VerifyLoginPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <AuthLayout
        title="Verify Login"
        description="Please enter OTP sent to your email."
      >
        <VerifyWrapper />
      </AuthLayout>
    </Suspense>
  );
};

export default VerifyLoginPage;
