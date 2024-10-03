import React from "react";
import { Avatar, Checkbox, Flex, Progress, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { SmallDot } from "@/assets/icons/SmallDot";
import {
  AntDesignOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Copy } from "@/assets/icons/Copy";
import { Delete } from "@/assets/icons/Delete";
import { EyeOpen } from "@/assets/icons/Eye";
import { Download } from "@/assets/icons/Download";
import { Edit } from "@/assets/icons/Edit";
import { NativeButton } from "../Button/nativeButton";
import { ArrowRight } from "@/assets/icons/ArrowRight";
import { MoreVertical } from "@/assets/icons/MoreVertical";

interface DataType {
  company: string;
  key: string;
  status: string;
  about: string;
  users: string;
  license: string;
  disabled: boolean;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: (
      <>
        <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
          Company
        </text>{" "}
        <ArrowDownOutlined style={{ marginLeft: 8 }} />
      </>
    ),
    dataIndex: "company",
    key: "company",
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
            companySite
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
        </text>
      </>
    ),
    dataIndex: "status",
    key: "status",
    render: (text, record) => {
      const isDisabled = record.disabled;

      return (
        <Flex gap="4px " wrap>
          <Tag
            icon={<SmallDot fillColor={isDisabled ? "#667085" : "#17B26A"} />}
            color={isDisabled ? "#F9FAFB" : "#ECFDF3"}
            style={{
              borderColor: isDisabled ? "#EAECF0" : "#ABEFC6",
              color: isDisabled ? "#344054" : "#067647",
              fontWeight: "500",
              borderRadius: "8px",
              display: "flex",
              paddingLeft: "0",
              alignItems: "center",
              gap: "2px",
            }}
          >
            {isDisabled ? "Churned" : "Customer"}
          </Tag>
        </Flex>
      );
    },
  },
  {
    title: (
      <>
        <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
          About
        </text>
      </>
    ),
    dataIndex: "about",
    key: "about",
    render: (text) => (
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "#0C111D" }}>
          Content curating app
        </div>
        <div style={{ fontSize: "12px", fontWeight: 400, color: "#475467" }}>
          Bring all your news into one space
        </div>
      </div>
    ),
  },
  {
    title: (
      <text style={{ fontSize: "12px", fontWeight: 600, color: "##475467" }}>
        Users
      </text>
    ),
    dataIndex: "users",
    key: "users",
    render: (text) => (
      <Avatar.Group>
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        <a href="https://ant.design">
          <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
        </a>

        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />

        <Avatar
          style={{ backgroundColor: "#1677ff" }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    ),
  },
  {
    title: (
      <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
        License use
      </text>
    ),
    key: "license",
    dataIndex: "license",
    render: () => (
      <Flex vertical gap="small" style={{ width: 180 }}>
        <Progress percent={70} size="small" />
      </Flex>
    ),
  },
  {
    title: "",
    key: "action",
    render: () => <MoreVertical fillColor="#0D231F" />,
  },
];

const data: DataType[] = [
  {
    key: "1",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: true,
  },
  {
    key: "2",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "3",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "4",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "5",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "6",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "7",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: true,
  },
  {
    key: "8",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: true,
  },
  {
    key: "9",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "10",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },

  {
    key: "11",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: true,
  },
  {
    key: "12",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "13",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "14",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "15",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "16",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "17",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: true,
  },
  {
    key: "18",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: true,
  },
  {
    key: "19",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "20",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },

  {
    key: "21",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: true,
  },
  {
    key: "22",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
  {
    key: "23",
    company: "Company_Name",
    status: "company_site.com",
    about: "Content",
    users: "active",
    license: "Product Designer",
    disabled: false,
  },
];

const CustomersTable: React.FC = () => (
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

export default CustomersTable;
