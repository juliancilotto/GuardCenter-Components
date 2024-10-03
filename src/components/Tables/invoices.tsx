import React from "react";
import { Avatar, Button, Checkbox, Flex, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { SmallDot } from "@/assets/icons/SmallDot";
import {
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckOutlined,
  CloseOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Copy } from "@/assets/icons/Copy";
import { Delete } from "@/assets/icons/Delete";
import { EyeOpen } from "@/assets/icons/Eye";
import { Download } from "@/assets/icons/Download";
import { Edit } from "@/assets/icons/Edit";
import { NativeButton } from "../Button/nativeButton";
import { ArrowRight } from "@/assets/icons/ArrowRight";

enum StatusEnum {
  Paid = "paid",
  Cancelled = "cancelled",
  Refunded = "refunded",
}

interface DataType {
  key: string;
  invoice: string;
  date: string;
  customer: string;
  purchase: string;
  status: StatusEnum;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: (
      <>
        <Checkbox style={{ marginRight: 8 }} />
        <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
          Invoice
        </text>
      </>
    ),
    dataIndex: "invoice",
    key: "invoice",
    render: (text) => (
      <>
        <Checkbox style={{ marginRight: 8 }} />
        <text style={{ fontSize: "12px", fontWeight: 600, color: "#0C111D" }}>
          {text}
        </text>
      </>
    ),
  },
  {
    title: (
      <>
        <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
          Date
        </text>{" "}
        <ArrowDownOutlined style={{ marginLeft: 8 }} />
      </>
    ),
    dataIndex: "date",
    key: "date",
    render: () => (
      <text style={{ fontSize: "12px", fontWeight: 400, color: "#475467" }}>
        Jan 6, 2022
      </text>
    ),
  },
  {
    title: (
      <>
        <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
          Status
        </text>
        <InfoCircleOutlined style={{ marginLeft: 8 }} />
      </>
    ),
    dataIndex: "role",
    key: "Role",
    render: (text, record) => {
      const status = record.status;
      let tagColor = "#ECFDF3";
      let borderColor = "#ABEFC6";
      let iconColor = "#17B26A";
      let label = "Paid";
      let icon = <CheckOutlined style={{ color: iconColor, paddingLeft: 5 }} />;

      if (status === StatusEnum.Cancelled) {
        tagColor = "#FEF3F2";
        borderColor = "#FECDCA";
        iconColor = "#F04438";
        label = "Cancelled";
        icon = <CloseOutlined style={{ color: iconColor, paddingLeft: 5 }} />;
      } else if (status === StatusEnum.Refunded) {
        tagColor = "#F9FAFB";
        borderColor = "#EAECF0";
        iconColor = "#667085";
        label = "Refunded";
        icon = (
          <ArrowLeftOutlined style={{ color: iconColor, paddingLeft: 5 }} />
        );
      }
      return (
        <Flex gap="4px " wrap>
          <Tag
            icon={
              <CheckOutlined style={{ color: iconColor, paddingLeft: 5 }} />
            }
            color={tagColor}
            style={{
              borderColor: borderColor,
              color: iconColor,
              fontWeight: "500",
              borderRadius: "8px",
              display: "flex",
              paddingLeft: "0",
              alignItems: "center",
              gap: "2px",
            }}
          >
            {label}
          </Tag>
        </Flex>
      );
    },
  },
  {
    title: (
      <text style={{ fontSize: "12px", fontWeight: 600, color: "##475467" }}>
        Customer
      </text>
    ),
    dataIndex: "customer",
    key: "customer",
    render: (text) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          style={{ backgroundColor: "gray", marginRight: 8 }}
          icon={<span>{text[0]}</span>}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{ fontSize: "12px", fontWeight: 600, color: "#0C111D" }}>
            {text}
          </div>
          <div style={{ fontSize: "12px", fontWeight: 400, color: "#475467" }}>
            @john
          </div>
        </div>
      </div>
    ),
  },
  {
    title: (
      <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
        Purchase
      </text>
    ),
    key: "purchase",
    dataIndex: "purchase",
    render: () => (
      <text style={{ fontSize: "12px", fontWeight: 400, color: "#475467" }}>
        Monthly subscription
      </text>
    ),
  },
  {
    title: "",
    key: "action",
    render: () => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 0,
          alignItems: "center",
        }}
      >
        <NativeButton type="text">Delete</NativeButton>{" "}
        <Button type="text" style={{ color: "#6941C6" }}>
          Edit
        </Button>
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    invoice: "#2065",
    date: "Jan 6, 2022",
    status: StatusEnum.Paid,
    customer: "John Doe",
    purchase: "Monthly subscription",
  },
  {
    key: "2",
    invoice: "#2066",
    date: "Jan 7, 2022",
    status: StatusEnum.Cancelled,
    customer: "Jane Smith",
    purchase: "Annual subscription",
  },
  {
    key: "3",
    invoice: "#2067",
    date: "Jan 8, 2022",
    status: StatusEnum.Refunded,
    customer: "Alice Johnson",
    purchase: "One-time purchase",
  },
  {
    key: "4",
    invoice: "#2065",
    date: "Jan 6, 2022",
    status: StatusEnum.Paid,
    customer: "John Doe",
    purchase: "Monthly subscription",
  },
  {
    key: "5",
    invoice: "#2066",
    date: "Jan 7, 2022",
    status: StatusEnum.Paid,
    customer: "Jane Smith",
    purchase: "Annual subscription",
  },
  {
    key: "6",
    invoice: "#2067",
    date: "Jan 8, 2022",
    status: StatusEnum.Paid,
    customer: "Alice Johnson",
    purchase: "One-time purchase",
  },

  {
    key: "7",
    invoice: "#2065",
    date: "Jan 6, 2022",
    status: StatusEnum.Paid,
    customer: "John Doe",
    purchase: "Monthly subscription",
  },
  {
    key: "8",
    invoice: "#2066",
    date: "Jan 7, 2022",
    status: StatusEnum.Paid,
    customer: "Jane Smith",
    purchase: "Annual subscription",
  },
  {
    key: "9",
    invoice: "#2067",
    date: "Jan 8, 2022",
    status: StatusEnum.Cancelled,
    customer: "Alice Johnson",
    purchase: "One-time purchase",
  },
];

const InvoicesTable: React.FC = () => (
  <div style={{ overflowX: "auto" }}>
    <Table<DataType>
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 6,
        position: ["bottomCenter"],
        itemRender(page, type, element) {
          if (type === "prev") {
            return (
              <NativeButton
                type="default"
                leftIcon={<ArrowLeftOutlined />}
                variant="default"
              >
                Previous
              </NativeButton>
            );
          }
          if (type === "next") {
            return (
              <NativeButton
                type="default"
                rightIcon={<ArrowRightOutlined />}
                variant="default"
              >
                Next
              </NativeButton>
            );
          }
          return element;
        },
      }}
    />
  </div>
);

export default InvoicesTable;
