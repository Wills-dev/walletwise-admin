"use client";

import { useState } from "react";

import { Archive, Edit, Eye } from "lucide-react";

import Button from "@/components/atoms/Button/Button";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import SummaryCardLoader from "@/components/atoms/skeleton/SummaryCardLoader";

import { numberWithCommas } from "@/lib/helpers";
import { useCreateNewAdminRole } from "@/lib/hooks/useCreateNewAdminRole";
import { useCreatePermission } from "@/lib/hooks/useCreatePermission";
import { useDeleteRole } from "@/lib/hooks/useDeleteRole";
import { useGetAllAdminRoles } from "@/lib/hooks/useGetAllAdminRoles";
import { useUpdateRolePermissions } from "@/lib/hooks/useUpdateRolePermissions";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";
import EditRoleModal from "@/components/molecules/modals/EditRoleModal/EditRoleModal";
import CreatePermissionModal from "@/components/molecules/modals/CreatePermissionModal/CreatePermissionModal";
import CreateRoleModal from "@/components/molecules/modals/CreateRoleModal/CreateRoleModal";
import ViewRolePermission from "@/components/molecules/modals/ViewRolePermission/ViewRolePermission";

const RolesWrapper = () => {
  const [rolePermissions, setRolePermissions] = useState({
    id: "",
    name: "",
    permissions: [],
  });

  const [openPermissionModal, setOpenPermissionModal] = useState(false);
  const { openModal, setOpenModal, handleDelete, isDeleting } = useDeleteRole();

  const {
    open,
    setOpen,
    permission,
    setPermission,
    handleCreatePermission,
    isCreating,
  } = useCreatePermission();

  const {
    isOpen,
    setIsOpen,
    selectedPermissions,
    handleToggle,
    handleSelectAll,
    handleUpdatePermissions,
    isUpdating,
  } = useUpdateRolePermissions();

  const {
    isMoadalOpen,
    setIsModalOpen,
    permissions,
    onSelectPermission,
    handleSelectAllPermissions,
    handleCreateRole,
    isCreating: isCreatingRole,
  } = useCreateNewAdminRole();

  const { roles, isLoading } = useGetAllAdminRoles();

  const sortedRoles = [...roles].reverse();

  return (
    <div className="space-y-6">
      <div className="flex lg:items-center justify-between max-lg:flex-col gap-4">
        <PageTitle
          title="Roles & Permissions"
          description="Manage user roles and permissions"
        />
        <div className="flex flex-wrap gap-2">
          <Button width="w-fit" onClick={() => setIsModalOpen(true)}>
            Create new role
          </Button>
          <Button onClick={() => setOpen(true)} width="w-fit">
            Create new permission
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <SummaryCardLoader />
        ) : (
          <>
            {sortedRoles?.map((role) => (
              <div
                key={role?.id}
                className=" bg-white dark:bg-gray-800 dark:border-2 shadow px-4 py-8 rounded-lg flex-1 min-w-[300px]"
              >
                <h4 className="text-gray-400 ">
                  Total {role?.user_count && numberWithCommas(role?.user_count)}{" "}
                  users
                </h4>
                <h1 className="sm:text-xl text-lg font-semibold pt-5">
                  {role?.name}
                </h1>
                <div className="flex items-center gap-3 justify-between mt-2">
                  <div className="flex gap-3">
                    <button
                      className="cursor-pointer hover:text-blue-500 transition-all duration-200"
                      onClick={() => {
                        setIsOpen(true);
                        setRolePermissions(role);
                      }}
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      className="text-red-500 cursor-pointer hover:text-red-700 transition-all duration-300"
                      onClick={() => {
                        setOpenModal(true);
                        setRolePermissions(role);
                      }}
                    >
                      <Archive className="w-5 h-5" />
                    </button>
                  </div>

                  <button
                    className="cursor-pointer hover:text-green-500 transition-all duration-300"
                    onClick={() => {
                      setOpenPermissionModal(true);
                      setRolePermissions(role);
                    }}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <ConfirmAction
        isPending={isDeleting}
        open={openModal}
        setOpen={setOpenModal}
        onCancel={() => setOpenModal(false)}
        onConfirm={() => handleDelete(rolePermissions?.id)}
        title="Are You Sure You Want to Delete This Role?"
        description="Are you sure you want to delete this role? All users assigned to this role will be affected."
      />
      <EditRoleModal
        onClose={() => setIsOpen(false)}
        openModal={isOpen}
        isLoad={isUpdating}
        handleSubmit={handleUpdatePermissions}
        selectedPermissions={selectedPermissions}
        handleSelectAll={handleSelectAll}
        handleToggle={handleToggle}
        role={rolePermissions}
      />
      <CreatePermissionModal
        onClose={() => setOpen(false)}
        onSubmit={handleCreatePermission}
        isSubmitting={isCreating}
        openModal={open}
        permission={permission}
        setPermission={setPermission}
      />
      <CreateRoleModal
        onClose={() => setIsModalOpen(false)}
        openModal={isMoadalOpen}
        load={isCreatingRole}
        handleTogglePermission={onSelectPermission}
        handleSelectAllPermission={handleSelectAllPermissions}
        handleCreateRole={handleCreateRole}
        selectedPermmissionIds={permissions}
      />
      <ViewRolePermission
        onCancel={() => setOpenPermissionModal(false)}
        open={openPermissionModal}
        roleName={rolePermissions?.name || ""}
        rolePermissions={rolePermissions?.permissions || []}
      />
    </div>
  );
};

export default RolesWrapper;
