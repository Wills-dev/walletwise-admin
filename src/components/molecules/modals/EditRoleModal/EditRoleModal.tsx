import Button from "@/components/atoms/Button/Button";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";

import { groupPermissionsEdit } from "@/lib/helpers/groupPermissions";
import { useGetAllPermissions } from "@/lib/hooks/useGetAllPermissions";

const EditRoleModal = ({
  openModal,
  onClose,
  isLoad,
  handleSubmit,
  selectedPermissions,
  handleSelectAll,
  handleToggle,
  role,
}: {
  openModal: boolean;
  onClose: (open: boolean) => void;
  isLoad: boolean;
  handleSubmit: (e: React.FormEvent, roleName: string, roleId: string) => void;
  selectedPermissions: string[];
  handleSelectAll: (permissionIds: string[]) => void;
  handleToggle: (permission: string) => void;
  role: {
    id: string;
    name: string;
    permissions: string[];
  };
}) => {
  const { isLoading, permissions } = useGetAllPermissions();
  const groupedPermissions = permissions
    ? groupPermissionsEdit(permissions)
    : [];

  const allChecked = permissions?.every(({ id }: { id: string }) =>
    selectedPermissions.includes(id),
  );

  const roleName = role?.name || "";
  const roleId = role?.id || "";

  return (
    <ModalWrapper
      open={openModal}
      onClose={onClose}
      title="Edit Role Permissions"
      description={`Editing permissions for role: ${role?.name}`}
    >
      {isLoading ? (
        <div className="w-full h-[30vh] flex justify-center items-center">
          <span className="text-gray-500">Loading permissions...</span>
        </div>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => handleSubmit(e, roleName, roleId)}
        >
          <div className="flex items-center justify-between  py-4 border-t">
            <label
              htmlFor="adminAccess"
              className=" block text-sm text-gray-900"
            >
              Administrator Access
            </label>
            <div className="flex items-center gap-2">
              <input
                id="adminAccess"
                type="checkbox"
                checked={allChecked}
                onChange={() =>
                  handleSelectAll(
                    permissions.map(({ id }: { id: string }) => id),
                  )
                }
                className="h-4 w-4 border-gray-300 rounded accent-[#5c24cc]"
              />
              <label
                htmlFor="adminAccess"
                className=" block text-sm text-gray-500"
              >
                Select all
              </label>
            </div>
          </div>
          {Object.entries(groupedPermissions).map(([category, permissions]) => (
            <div
              key={category}
              className="flex items-center justify-between gap-4 py-4 border-t"
            >
              <div>
                <p className="block text-sm  text-gray-700">
                  {category.replace("_", " ")}
                </p>
              </div>
              <div className="flex items-center justify-between sm:gap-12 gap-6">
                {permissions.map(({ id, action }) => (
                  <div key={id} className="flex items-center">
                    <input
                      id={`${category}_${action}`}
                      type="checkbox"
                      checked={selectedPermissions.includes(id)}
                      onChange={() => handleToggle(id)}
                      className="h-4 w-4 accent-[#5c24cc] border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`${category}_${action}`}
                      className="ml-2 text-sm text-gray-500 capitalize"
                    >
                      {action}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <Button type="submit" disabled={isLoad} loading={isLoad}>
            Save Changes
          </Button>
        </form>
      )}
    </ModalWrapper>
  );
};

export default EditRoleModal;
