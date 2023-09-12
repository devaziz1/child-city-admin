import { Anchor } from "@mantine/core";
import ActionIcons from "../../components/ActionIcons";
import StatusToggle from "../../components/StatusToggle";
import TableImageView from "../../components/TableImageView";
import ViewService from "./ViewOrder";

export const Columns = [
  {
    name: "Sr No.",
    selector: (row) => row.serialNo,
    width: "100px",
    sortable: true,
  },
  {
    name: "",
    selector: (row) => row.coverImage,
    center: true,
    width: "40px",
    cell: (row) => <TableImageView src={row?.coverImage} />,
  },
  {
    name: "Customer Name",
    selector: (row) => row.name,
    sortable: true,
    // center: true,
    width: "250px",
  },
  {
    name: "Product Name",
    selector: (row) => row.productName,
    sortable: true,
    // center: true,
    width: "200px",
  },
  {
    name: "Quantity",
    selector: (row) => row.quantity,
    sortable: true,
    center: true,
    width: "150px",
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
    sortable: true,
    center: true,
    width: "150px",
  },
  {
    name: "Payment",
    selector: (row) => row.payment,
    sortable: true,
    // center: true,
    width: "150px",
    cell: (row) => (
      <Anchor color="primary.0">{row?.receipt || "Receipt"}</Anchor>
    ),
  },
  {
    name: "Status",
    selector: (row) => row.blocked,
    width: "150px",
    sortable: true,
    center: true,
    cell: (row) => (
      <StatusToggle
        status={row.delivered}
        id={row._id}
        type={"order"}
        queryName="fetchServices"
      />
    ),
  },
  {
    name: "Actions",
    center: true,
    width: "100px",
    cell: (row) => (
      <ActionIcons
        rowData={row}
        view={true}
        // del={true}
        // edit={true}
        viewData={<ViewService rowData={row} />}
        type="Order"
      />
    ),
  },
];

export const filterbyStatus = [
  { label: "All", value: null },
  { label: "Delivered", value: true },
  { label: "Pending", value: false },
];
