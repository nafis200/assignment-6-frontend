/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { NMTable } from "@/components/ui/core/NMTable/index";
import { IMeta } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import TablePagination from "@/components/ui/core/NMTable/TablePagination";

const PaymentOrders = ({ products, meta }: { products: any[]; meta: IMeta }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const columns: ColumnDef<any>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="dark:ring-offset-gray-900 dark:ring-gray-500"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            if (value) {
              setSelectedIds((prev) => [...prev, row.original._id]);
            } else {
              setSelectedIds(
                selectedIds.filter((id) => id !== row.original._id)
              );
            }
            row.toggleSelected(!!value);
          }}
          aria-label="Select row"
          className="dark:ring-offset-gray-900 dark:ring-gray-500"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <span className="dark:text-gray-300">{row.original.email}</span>,
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <span className="dark:text-gray-300">{row.original.name}</span>,
    },
    {
      accessorKey: "totalPrice",
      header: "Total Price",
      cell: ({ row }) => <span className="dark:text-gray-300">{row.original.totalPrice}</span>,
    },
    {
      accessorKey: "phone_number",
      header: "Phone Number",
      cell: ({ row }) => <span className="dark:text-gray-300">{row.original.phone_number}</span>,
    },
    {
      accessorKey: "address",
      header: "Address",
      cell: ({ row }) => <span className="dark:text-gray-300">{row.original.address}</span>,
    },
    {
      accessorKey: "transaction.bank_status",
      header: "Transaction Status",
      cell: ({ row }) => (
        <span className="dark:text-gray-300">{row.original.transaction?.bank_status}</span>
      ),
    },
  ];

  return (
    <div className="dark:bg-gray-900 dark:text-gray-200 min-h-screen p-4 rounded-md">
      <h1 className="text-xl font-bold mb-4 dark:text-gray-100">Manage Transactions</h1>
      <NMTable columns={columns} data={products || []} />
      <TablePagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default PaymentOrders;
