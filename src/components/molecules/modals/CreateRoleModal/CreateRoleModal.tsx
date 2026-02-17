"use client";

import { useState } from "react";

import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";

import { useGetAllPermissions } from "@/lib/hooks/useGetAllPermissions";
import { groupPermissionsEdit } from "@/lib/helpers/groupPermissions";

const CreateRoleModal = ({
  openModal,
  onClose,
  load,
  handleTogglePermission,
  handleSelectAllPermission,
  handleCreateRole,
  selectedPermmissionIds,
}: {
  openModal: boolean;
  onClose: (open: boolean) => void;
  load: boolean;
  handleTogglePermission: (permissionId: string) => void;
  handleSelectAllPermission: (permissionIds: string[]) => void;
  handleCreateRole: (e: React.FormEvent, roleName: string) => void;
  selectedPermmissionIds: string[];
}) => {
  const [roleName, setRoleName] = useState("");

  const { isLoading, permissions } = useGetAllPermissions();

  const groupedPermissions = permissions
    ? groupPermissionsEdit(permissions)
    : [];

  const allChecked = permissions?.every(({ id }: { id: string }) =>
    selectedPermmissionIds.includes(id),
  );

  const isValid = roleName && selectedPermmissionIds.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    handleCreateRole(e, roleName);
  };

  return (
    <ModalWrapper
      open={openModal}
      onClose={onClose}
      title="Create New Role"
      description="Create a new role with selected permissions"
    >
      {isLoading ? (
        <div className="w-full h-[30vh] flex justify-center items-center">
          <p>Loading permissions...</p>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label title="Role Name" />
            <Input
              type="text"
              name="roleName"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
          </div>
          <div className=" flex items-center justify-between  py-4 border-t">
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
                  handleSelectAllPermission(
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
                      checked={selectedPermmissionIds.includes(id)}
                      onChange={() => handleTogglePermission(id)}
                      className="h-4 w-4 accent-[#5c24cc] border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`${category}_${action}`}
                      className="ml-2 text-sm text-gray-500"
                    >
                      {action}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <Button type="submit" disabled={!isValid} loading={load}>
            Create Role
          </Button>
        </form>
      )}
    </ModalWrapper>
  );
};

export default CreateRoleModal;
