/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: ConfirmDialog
 * Module: Shared UI
 *
 * Responsibility:
 * Standard confirmation dialog used before destructive or
 * important user actions.
 *
 * Features:
 * - Built on top of Modal
 * - Configurable severity
 * - Primary / Secondary actions
 * - Loading state
 * - Keyboard friendly
 *
 * Used By:
 * - Delete Device
 * - Delete Site
 * - Delete User
 * - Restart Device
 * - Reset Configuration
 * - Factory Reset
 * - Log Out
 *
 * Dependencies:
 * - Modal
 * - Button
 *
 * ------------------------------------------------------------
 */

import {
  AlertTriangle,
  Info,
  ShieldAlert,
  Trash2,
} from "lucide-react";

import Modal from "./Modal";
import Button from "./Button";

const variants = {
  danger: {
    icon: Trash2,
    iconBg: "bg-red-500/10",
    iconBorder: "border-red-500/20",
    iconColor: "text-red-400",
    confirmVariant: "danger",
  },

  warning: {
    icon: AlertTriangle,
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-500/20",
    iconColor: "text-amber-400",
    confirmVariant: "warning",
  },

  info: {
    icon: Info,
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/20",
    iconColor: "text-cyan-400",
    confirmVariant: "primary",
  },

  security: {
    icon: ShieldAlert,
    iconBg: "bg-violet-500/10",
    iconBorder: "border-violet-500/20",
    iconColor: "text-violet-400",
    confirmVariant: "primary",
  },
};

export default function ConfirmDialog({
  open = false,
  variant = "danger",
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
  onConfirm,
  onCancel,
}) {
  const config =
    variants[variant] ?? variants.danger;

  const Icon = config.icon;

  return (
    <Modal
      open={open}
      size="sm"
      showClose={!loading}
      onClose={onCancel}
      footer={
        <div className="flex justify-end gap-3">
          <Button
            variant="secondary"
            disabled={loading}
            onClick={onCancel}
          >
            {cancelText}
          </Button>

          <Button
            variant={config.confirmVariant}
            loading={loading}
            leftIcon={Icon}
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      }
    >
      {/* ------------------------------------------------ */}
      {/* Dialog Content                                   */}
      {/* ------------------------------------------------ */}

      <div className="flex flex-col items-center text-center">
        {/* Icon */}

        <div
          className={`
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            ${config.iconBg}
            ${config.iconBorder}
          `}
        >
          <Icon
            className={`h-8 w-8 ${config.iconColor}`}
          />
        </div>

        {/* Title */}

        <h2 className="text-2xl font-semibold text-white">
          {title}
        </h2>

        {/* Description */}

        <p className="mt-3 max-w-md leading-7 text-slate-400">
          {description}
        </p>
      </div>
    </Modal>
  );
}