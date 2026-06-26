/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: InventoryToolbar
 * Module: Inventory
 *
 * Responsibility:
 * Primary toolbar for the Inventory module.
 *
 * Features:
 * - Device search
 * - Device filters
 * - Refresh inventory
 * - Add device
 * - Shared Nebula UI components
 *
 * Dependencies:
 * - Card
 * - Button
 * - SearchInput
 * ------------------------------------------------------------
 */

import { Filter, Plus, RefreshCw } from "lucide-react";

import {
  Button,
  Card,
  SearchInput,
} from "@/components/ui";

export default function InventoryToolbar({
  search,
  onSearch,
  onRefresh,
  onAddDevice,
  filterContent,
  rightContent,
}) {
  return (
    <Card className="mb-6">
      {/* ------------------------------------------------ */}
      {/* Toolbar                                          */}
      {/* ------------------------------------------------ */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* ------------------------------------------------ */}
        {/* Search                                           */}
        {/* ------------------------------------------------ */}

        <div className="w-full max-w-xl">
          <SearchInput
            value={search}
            onChange={onSearch}
            placeholder="Search by device name, vendor, model, IP or serial..."
          />
        </div>

        {/* ------------------------------------------------ */}
        {/* Actions                                          */}
        {/* ------------------------------------------------ */}

        <div className="flex flex-wrap items-center gap-3">
          {filterContent ?? (
            <Button
              variant="secondary"
              leftIcon={Filter}
            >
              Filters
            </Button>
          )}

          <Button
            variant="secondary"
            leftIcon={RefreshCw}
            onClick={onRefresh}
          >
            Refresh
          </Button>

          <Button
            leftIcon={Plus}
            onClick={onAddDevice}
          >
            Add Device
          </Button>

          {rightContent}
        </div>
      </div>
    </Card>
  );
}