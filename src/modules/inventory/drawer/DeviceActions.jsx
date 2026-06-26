/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceActions
 * Module: Inventory
 *
 * Responsibility:
 * Displays all available actions for the selected device.
 *
 * Features:
 * - Locate Device
 * - Open Web UI
 * - SSH
 * - Restart
 * - Edit
 * - Delete
 *
 * Dependencies:
 * - Card
 * - CardHeader
 * - Button
 * ------------------------------------------------------------
 */

import {
  Edit3,
  ExternalLink,
  LocateFixed,
  Monitor,
  Power,
  Trash2,
} from "lucide-react";

import {
  Button,
  Card,
  CardHeader,
} from "@/components/ui";

export default function DeviceActions({
  device,
  onLocate,
  onRestart,
  onOpenWeb,
  onSSH,
  onEdit,
  onDelete,
}) {
  if (!device) return null;

  return (
    <Card noPadding>
      <CardHeader
        title="Actions"
        description="Manage this device"
        icon={Monitor}
      />

      <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-3">
        <Button
          variant="secondary"
          leftIcon={LocateFixed}
          onClick={() => onLocate?.(device)}
          className="justify-start"
        >
          Locate Device
        </Button>

        <Button
          variant="secondary"
          leftIcon={ExternalLink}
          onClick={() => onOpenWeb?.(device)}
          className="justify-start"
        >
          Open Web UI
        </Button>

        <Button
          variant="secondary"
          leftIcon={Monitor}
          onClick={() => onSSH?.(device)}
          className="justify-start"
        >
          SSH Session
        </Button>

        <Button
          variant="warning"
          leftIcon={Power}
          onClick={() => onRestart?.(device)}
          className="justify-start"
        >
          Restart Device
        </Button>

        <Button
          variant="primary"
          leftIcon={Edit3}
          onClick={() => onEdit?.(device)}
          className="justify-start"
        >
          Edit Device
        </Button>

        <Button
          variant="danger"
          leftIcon={Trash2}
          onClick={() => onDelete?.(device)}
          className="justify-start"
        >
          Delete Device
        </Button>
      </div>
    </Card>
  );
}