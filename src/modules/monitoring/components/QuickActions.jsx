/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: QuickActions
 * Module: Monitoring
 *
 * Responsibility:
 * Fast access actions for operators in the Monitoring dashboard.
 *
 * Features:
 * - One-click operational controls
 * - Network actions
 * - Device actions
 * ------------------------------------------------------------
 */

import {
  Plus,
  RefreshCw,
  Radar,
  Zap,
  LocateFixed,
  Settings,
} from "lucide-react";

import {
  Button,
  Card,
  CardHeader,
} from "@/components/ui";

export default function QuickActions({
  onAddDevice,
  onRefresh,
  onDiscover,
  onLocate,
  onUpgrade,
  onSettings,
}) {
  return (
    <Card noPadding>
      <CardHeader
        title="Quick Actions"
        description="Fast network operations"
      />

      <div className="grid gap-3 p-5">

        <Button
          leftIcon={Plus}
          onClick={onAddDevice}
          className="justify-start"
        >
          Add Device
        </Button>

        <Button
          variant="secondary"
          leftIcon={RefreshCw}
          onClick={onRefresh}
          className="justify-start"
        >
          Refresh Network
        </Button>

        <Button
          variant="secondary"
          leftIcon={Radar}
          onClick={onDiscover}
          className="justify-start"
        >
          Discover Devices
        </Button>

        <Button
          variant="secondary"
          leftIcon={LocateFixed}
          onClick={onLocate}
          className="justify-start"
        >
          Locate Device
        </Button>

        <Button
          variant="secondary"
          leftIcon={Zap}
          onClick={onUpgrade}
          className="justify-start"
        >
          Firmware Upgrade
        </Button>

        <Button
          variant="secondary"
          leftIcon={Settings}
          onClick={onSettings}
          className="justify-start"
        >
          Settings
        </Button>

      </div>
    </Card>
  );
}