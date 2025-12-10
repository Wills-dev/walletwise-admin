import { services } from "@/lib/constants";
import { TabType } from "@/lib/types";

import DashboardLayout from "../DashboardLayout/DashboardLayout";
import ServiceNavLink from "@/components/atoms/ServiceNavLink/ServiceNavLink";
import DynamicTabs from "@/components/molecules/DynamicTabs/DynamicTabs";
import Container from "@/components/atoms/Container/Container";

const ServiceLayout = ({
  tabs,
  title,
  defaultTab,
  onClick,
}: {
  tabs: TabType[];
  title: string;
  defaultTab: string;
  onClick: (value: string) => void;
}) => {
  return (
    <DashboardLayout title="Services" className="pt-0 pb-20">
      <div className=" h-10 w-full border-b border-[#EDEDED] dark:border-gray-700 top-14 right-0 fixed bg-white/65 dark:bg-gray-900/65 backdrop-blur-2xl z-20">
        <Container>
          <div className="flex items-center lg:justify-end flex-1 w-full no-scrollbar overflow-x-auto h-10 gap-4">
            {services?.map((service) => (
              <ServiceNavLink
                key={service?.name}
                name={service?.name}
                link={service?.link}
              />
            ))}
          </div>
        </Container>
      </div>
      <div className="h-24 w-full" />
      <div className="py-6">
        <h2 className="sm:text-3xl text-2xl font-semibold dark:text-gray-300 capitalize">
          {title}
        </h2>
      </div>
      <DynamicTabs tabs={tabs} defaultTab={defaultTab} onClick={onClick} />
    </DashboardLayout>
  );
};

export default ServiceLayout;
