import { MoreVertical } from "@/assets/icons/MoreVertical";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Checkbox, Table, TableProps } from "antd";
import { NativeButton } from "../Button/nativeButton";
import { PdfIcon } from "@/assets/icons/PDFIcon";

interface DataType {
  key: string;
  file: string;
  size: string;
  date: string;
  updated: string;
  uploaded: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: (
      <>
        <Checkbox style={{ marginRight: 8 }} />
        <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
          File Name
        </text>
      </>
    ),
    dataIndex: "file",
    key: "file",
    render: (text) => (
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <Checkbox style={{ marginRight: 8 }} />
        <PdfIcon />
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{ fontSize: "12px", fontWeight: 600, color: "#0C111D" }}>
            {text}
          </div>
          <div style={{ fontSize: "12px", fontWeight: 400, color: "#475467" }}>
            200 KB
          </div>
        </div>
      </div>
    ),
  },
  {
    title: (
      <>
        <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
          File Size
        </text>{" "}
      </>
    ),
    dataIndex: "size",
    key: "size",
    render: () => (
      <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
        200 KB
      </text>
    ),
  },
  {
    title: (
      <>
        <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
          Date uploaded
        </text>
        <InfoCircleOutlined style={{ marginLeft: 8 }} />
      </>
    ),
    dataIndex: "date",
    key: "date",
    render: (text) => (
      <text style={{ fontSize: "12px", fontWeight: 400, color: "#475467" }}>
        {text}
      </text>
    ),
  },
  {
    title: (
      <text style={{ fontSize: "12px", fontWeight: 600, color: "##475467" }}>
        Last updated
      </text>
    ),
    dataIndex: "updated",
    key: "updated",
    render: (text) => (
      <text style={{ fontSize: "12px", fontWeight: 400, color: "#475467" }}>
        {text}
      </text>
    ),
  },
  {
    title: (
      <text style={{ fontSize: "12px", fontWeight: 600, color: "#475467" }}>
        Uploaded by
      </text>
    ),
    key: "uploaded",
    dataIndex: "uploaded",
    render: () => (
      <text style={{ fontSize: "12px", fontWeight: 400, color: "#475467" }}>
        John Doe
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
          gap: 20,
          alignItems: "center",
        }}
      >
        <MoreVertical fillColor="#0D231F" />
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    file: "Tech requirements.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "2",
    file: "Dashboard Screenshot.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "3",
    file: "Tech requirements.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "4",
    file: "Dashboard Screenshot.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "5",
    file: "Tech requirements.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "6",
    file: "Dashboard Screenshot.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "7",
    file: "Tech requirements.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "8",
    file: "Dashboard Screenshot.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "9",
    file: "Tech requirements.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "10",
    file: "Dashboard Screenshot.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },

  {
    key: "11",
    file: "Tech requirements.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "12",
    file: "Dashboard Screenshot.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "13",
    file: "Tech requirements.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "14",
    file: "Dashboard Screenshot.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "15",
    file: "Tech requirements.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "16",
    file: "Dashboard Screenshot.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "17",
    file: "Tech requirements.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "18",
    file: "Dashboard Screenshot.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "19",
    file: "Tech requirements.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "20",
    file: "Dashboard Screenshot.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },

  {
    key: "24",
    file: "Tech requirements.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "22",
    file: "Dashboard Screenshot.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "23",
    file: "Tech requirements.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
  {
    key: "24",
    file: "Dashboard Screenshot.pdf",
    size: "200 KB",
    date: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploaded: "John Doe",
  },
];

const FilesUploadTable: React.FC = () => (
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
                colorVariant="default"
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
                colorVariant="default"
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

export default FilesUploadTable;
