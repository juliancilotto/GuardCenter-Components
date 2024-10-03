import React from "react";
import { Avatar, Checkbox, Flex, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { SmallDot } from "@/assets/icons/SmallDot";
import {
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Copy } from "@/assets/icons/Copy";
import { Delete } from "@/assets/icons/Delete";
import { EyeOpen } from "@/assets/icons/Eye";
import { Download } from "@/assets/icons/Download";
import { Edit } from "@/assets/icons/Edit";
import { NativeButton } from "../Button/nativeButton";
import { ArrowRight } from "@/assets/icons/ArrowRight";

interface DataType {
  key: string;
  name: string;
  email: string;
  status: string;
  role: string;
  teams: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: (
      <>
        <Checkbox style={{ marginRight: 8 }} />
        <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
          Name
        </text>
      </>
    ),
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox style={{ marginRight: 8 }} />
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
      <>
        <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
          Status
        </text>{" "}
        <ArrowDownOutlined style={{ marginLeft: 8 }} />
      </>
    ),
    dataIndex: "Status",
    key: "Status",
    render: () => (
      <Flex gap="4px " wrap>
        <Tag
          icon={<SmallDot fillColor="#17B26A" />}
          color="transparent"
          style={{
            borderColor: "#D0D5DD",
            color: "#344054",
            fontWeight: "500",
            borderRadius: "8px",
            display: "flex",
            paddingLeft: "0",
            alignItems: "center",
            gap: "2px",
          }}
        >
          Active
        </Tag>
      </Flex>
    ),
  },
  {
    title: (
      <>
        <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
          Role
        </text>
        <InfoCircleOutlined style={{ marginLeft: 8 }} />
      </>
    ),
    dataIndex: "role",
    key: "Role",
    render: (text) => (
      <text style={{ fontSize: "12px", fontWeight: 400, color: "#475467" }}>
        {text}
      </text>
    ),
  },
  {
    title: (
      <text style={{ fontSize: "12px", fontWeight: 600, color: "##475467" }}>
        Email address
      </text>
    ),
    dataIndex: "email",
    key: "Email address",
    render: (text) => (
      <text style={{ fontSize: "12px", fontWeight: 400, color: "#475467" }}>
        {text}
      </text>
    ),
  },
  {
    title: (
      <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
        Teams
      </text>
    ),
    key: "teams",
    dataIndex: "teams",
    render: () => (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Flex gap="4px " wrap>
          <Tag
            color="#F9F5FF"
            style={{
              borderColor: "#E9D7FE",
              color: "#6941C6",
              fontWeight: "500",
              borderRadius: "16px",
              display: "flex",
              paddingLeft: 4,
              alignItems: "center",
              gap: "2px",
            }}
          >
            Design
          </Tag>
        </Flex>
        <Flex gap="4px " wrap>
          <Tag
            color="#EFF8FF"
            style={{
              borderColor: "#B2DDFF",
              color: "#175CD3",
              fontWeight: "500",
              borderRadius: "16px",
              display: "flex",
              paddingLeft: 4,
              alignItems: "center",
              gap: "2px",
            }}
          >
            Product
          </Tag>
        </Flex>
        <Flex gap="4px " wrap>
          <Tag
            color="#EEF4FF"
            style={{
              borderColor: "#C7D7FE",
              color: "#3538CD",
              fontWeight: "500",
              borderRadius: "16px",
              display: "flex",
              paddingLeft: 4,
              alignItems: "center",
              gap: "2px",
            }}
          >
            Product
          </Tag>
        </Flex>
        <Flex gap="4px " wrap>
          <Tag
            color="#F9FAFB"
            style={{
              borderColor: "#EAECF0",
              color: "#344054",
              fontWeight: "500",
              borderRadius: "16px",
              display: "flex",
              paddingLeft: 4,
              alignItems: "center",
              gap: "2px",
            }}
          >
            +4
          </Tag>
        </Flex>
      </div>
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
          gap: 20,
          alignItems: "center",
        }}
      >
        <EyeOpen fillColor="#0D231F" />
        <Copy fillColor="#0D231F" />
        <Download fillColor="#0D231F" />
        <Edit fillColor="#0D231F" />
        <Delete fillColor="#0D231F" />
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Designer",
  },
  {
    key: "2",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Manager",
  },
  {
    key: "3",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Frontend Developer",
  },
  {
    key: "4",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Designer",
  },
  {
    key: "5",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Manager",
  },
  {
    key: "6",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Frontend Developer",
  },

  {
    key: "7",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Designer",
  },
  {
    key: "8",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Manager",
  },
  {
    key: "9",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Frontend Developer",
  },
  {
    key: "10",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Designer",
  },
  {
    key: "11",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Manager",
  },
  {
    key: "12",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Frontend Developer",
  },

  {
    key: "13",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Designer",
  },
  {
    key: "14",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Manager",
  },
  {
    key: "15",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Frontend Developer",
  },
  {
    key: "16",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Designer",
  },
  {
    key: "17",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Manager",
  },
  {
    key: "18",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Frontend Developer",
  },

  {
    key: "18",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Designer",
  },
  {
    key: "20",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Manager",
  },
  {
    key: "21",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Frontend Developer",
  },
  {
    key: "22",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Designer",
  },
  {
    key: "23",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Product Manager",
  },
  {
    key: "24",
    name: "John Doe",
    email: "john@untitledui.com",
    teams: ["Design", "Product", "Marketing", "+4"],
    status: "active",
    role: "Frontend Developer",
  },
];

const TeamMembersTable: React.FC = () => (
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

export default TeamMembersTable;
