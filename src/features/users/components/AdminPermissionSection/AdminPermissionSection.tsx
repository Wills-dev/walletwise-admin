import { ChevronDown, ChevronUp, Shield } from "lucide-react";

import { formatModuleName, getActionColor } from "../../helpers";

type PermissionAction = "read" | "write" | "create";

type GroupedPermissions = Record<string, PermissionAction[]>;

interface AdminPermissionSectionProps {
  permissions: string[];
  expandedSection: string | null;
  toggleSection: (value: string) => void;
}

const AdminPermissionSection = ({
  permissions,
  toggleSection,
  expandedSection,
}: AdminPermissionSectionProps) => {
  const groupedPermissions = permissions?.reduce<GroupedPermissions>(
    (acc, perm) => {
      const [module, action] = perm.split(".");
      if (!acc[module]) {
        acc[module] = [];
      }
      acc[module].push(action as PermissionAction);
      return acc;
    },
    {}
  );

  return (
    <div className="dark:bg-gray-900 border dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden">
      <button
        onClick={() => toggleSection("permissions")}
        className="w-full flex items-center justify-between p-6  hover:bg-gray-800/10 dark:hover:bg-gray-800/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-blue-400" />
          <h3 className="text-xl font-semibold dark:text-white text-gray-800">
            Permissions
          </h3>
          <span className="text-sm dark:text-gray-400 text-gray-600">
            ({Object.keys(groupedPermissions).length} modules)
          </span>
        </div>
        {expandedSection === "permissions" ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {expandedSection === "permissions" && (
        <div className="p-6 pt-0 space-y-4">
          {Object.entries(groupedPermissions).map(([module, actions]) => (
            <div
              key={module}
              className="dark:bg-gray-800/50 bg-gray-800/5 rounded-xl p-4 border border-gray-700/5 dark:border-gray-700/50"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                  {formatModuleName(module)}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {actions?.map((action) => (
                  <span
                    key={action}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${getActionColor(
                      action
                    )}`}
                  >
                    {action}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPermissionSection;
