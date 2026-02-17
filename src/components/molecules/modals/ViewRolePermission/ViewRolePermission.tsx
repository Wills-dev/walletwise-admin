import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";

import { getActionColor } from "@/features/users/helpers";
import { groupPermissions, Permission } from "@/lib/helpers/groupPermissions";

const ViewRolePermission = ({
  open,
  onCancel,
  rolePermissions,
  roleName,
}: {
  open: boolean;
  onCancel: () => void;
  roleName: string;
  rolePermissions: Permission[] | [];
}) => {
  const groupedPermissions =
    rolePermissions && groupPermissions(rolePermissions);

  return (
    <ModalWrapper
      open={open}
      onClose={onCancel}
      title="View Role Permissions"
      description={`Viewing permissions for role: ${roleName || "Unknown Role"}`}
    >
      {" "}
      <div className=" space-y-4">
        {rolePermissions.length > 0 ? (
          <>
            {Object.entries(groupedPermissions).map(([category, actions]) => (
              <div key={category} className="flex items-center justify-between">
                <h6 className="capitalize">{category.replace("_", " ")}:</h6>
                <div className="flex gap-4">
                  {actions.map((action) => (
                    <span
                      key={action}
                      className={`${getActionColor(
                        action,
                      )} py-1 px-3 rounded-md`}
                    >
                      {action}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-sm text-gray-400">
            No permission assigned to this role
          </p>
        )}
      </div>
    </ModalWrapper>
  );
};

export default ViewRolePermission;
