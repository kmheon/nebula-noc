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
 * - Search
 * - Filters
 * - Refresh
 * - Add Device
 * - Shared Nebula UI Components
 * ------------------------------------------------------------
 */

import {
  Filter,
  Plus,
  RefreshCw,
} from "lucide-react";

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
    <Card className="mb-8">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        {/* ------------------------------------------------ */}
        {/* Search                                           */}
        {/* ------------------------------------------------ */}

        <div className="w-full xl:max-w-2xl">
          <SearchInput
            value={search}
            onChange={onSearch}
            placeholder="Search by device name, IP, vendor, model or serial..."
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