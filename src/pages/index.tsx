import React, { useState } from "react";
import { NativeButton } from "@/components/Button/nativeButton";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import {
  Alert,
  Avatar,
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Flex,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  SelectProps,
  Slider,
  SliderSingleProps,
  Space,
  Switch,
  Tag,
  Tooltip,
} from "antd";
import { InfoCircle } from "@/assets/icons/InfoCircle";
import { ExclamationCircle } from "@/assets/icons/ExclamationCircle";
import { Payment } from "@/assets/icons/Payment";
import { Copy } from "@/assets/icons/Copy";
import TextArea from "antd/es/input/TextArea";
import { SmallDot } from "@/assets/icons/SmallDot";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
  CheckOutlined,
  CloseOutlined,
  InfoOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AlertTag } from "@/components/Tags/AlertTag";
import { HelpCircle } from "@/assets/icons/HelpCircle";
import ptBR from "antd/es/date-picker/locale/pt_BR";
import ptBRGlobal from "antd/es/locale/pt_BR";
import { Search } from "@/assets/icons/Search";

const { RangePicker } = DatePicker;

const Home: React.FC = () => {
  const [value, setValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const formatPhoneNumber = (value: string) => {
    const onlyNums = value.replace(/\D/g, "");

    const maskedValue = onlyNums
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);

    return maskedValue;
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    setValue(formatPhoneNumber(value));
  };
  const handlePhoneChange = (e: any) => {
    const { value } = e.target;
    setPhoneValue(formatPhoneNumber(value));
  };

  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  const handleSelectChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  const formatter: NonNullable<SliderSingleProps["tooltip"]>["formatter"] = (
    value
  ) => `${value}%`;

  const brazilianLocale: typeof ptBR = {
    ...ptBR,
    lang: {
      ...ptBR.lang,
      fieldDateFormat: "DD/MM/YYYY",
      fieldDateTimeFormat: "DD/MM/YYYY HH:mm:ss",
      yearFormat: "YYYY",
      cellYearFormat: "YYYY",
    },
  };

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginLeft: 10, margin: 10, overflowX: "auto" }}>
      <div className="Buttons">
        <h2>
          <strong>Buttons:</strong>
        </h2>
        <div>
          <div style={{ display: "flex", gap: "14px", marginTop: 5 }}>
            <NativeButton
              type="primary"
              leftIcon={<Sparkle fillColor="white" />}
              rightIcon={<Sparkle fillColor="white" />}
            >
              Button CTA
            </NativeButton>
            <NativeButton type="primary" leftIcon={<Dot fillColor="white" />}>
              Button CTA
            </NativeButton>
            <NativeButton type="primary">
              <Sparkle fillColor="white" />
            </NativeButton>
          </div>
          <div style={{ display: "flex", gap: "14px", marginTop: 5 }}>
            <NativeButton
              type="primary"
              leftIcon={<Sparkle fillColor="white" isDisabled />}
              rightIcon={<Sparkle fillColor="white" isDisabled />}
              disabled
            >
              Button CTA
            </NativeButton>
            <NativeButton
              type="primary"
              leftIcon={<Dot fillColor="white" isDisabled />}
              disabled
            >
              Button CTA
            </NativeButton>
            <NativeButton type="primary" disabled>
              <Sparkle fillColor="white" isDisabled />
            </NativeButton>
          </div>
        </div>
        <div style={{ marginTop: 25 }}>
          <div style={{ display: "flex", gap: "14px", marginTop: 5 }}>
            <NativeButton
              type="default"
              leftIcon={<Sparkle fillColor="black" />}
              rightIcon={<Sparkle fillColor="black" />}
              variant="default"
            >
              Button CTA
            </NativeButton>
            <NativeButton
              type="default"
              leftIcon={<Dot fillColor="#17B26A" />}
              variant="default"
            >
              Button CTA
            </NativeButton>
            <NativeButton type="default" variant="default">
              <Sparkle fillColor="black" />
            </NativeButton>
          </div>
          <div style={{ display: "flex", gap: "14px", marginTop: 5 }}>
            <NativeButton
              type="default"
              leftIcon={<Sparkle fillColor="black" isDisabled />}
              rightIcon={<Sparkle fillColor="black" isDisabled />}
              disabled
            >
              Button CTA
            </NativeButton>
            <NativeButton
              type="default"
              leftIcon={<Dot fillColor="#17B26A" isDisabled />}
              disabled
            >
              Button CTA
            </NativeButton>
            <NativeButton type="default" disabled>
              <Sparkle fillColor="black" isDisabled />
            </NativeButton>
          </div>
        </div>
        <div style={{ marginTop: 25 }}>
          <div style={{ display: "flex", gap: "14px", marginTop: 5 }}>
            <NativeButton
              type="default"
              leftIcon={<Sparkle fillColor="black" />}
              rightIcon={<Sparkle fillColor="black" />}
              variant="green"
            >
              Button CTA
            </NativeButton>
            <NativeButton
              type="default"
              leftIcon={<Dot fillColor="#17B26A" />}
              variant="green"
            >
              Button CTA
            </NativeButton>
            <NativeButton type="default" variant="green">
              <Sparkle fillColor="black" />
            </NativeButton>
          </div>
          <div style={{ display: "flex", gap: "14px", marginTop: 5 }}>
            <NativeButton
              type="default"
              leftIcon={<Sparkle fillColor="black" isDisabled />}
              rightIcon={<Sparkle fillColor="black" isDisabled />}
              disabled
            >
              Button CTA
            </NativeButton>
            <NativeButton
              type="default"
              leftIcon={<Dot fillColor="#17B26A" isDisabled />}
              disabled
            >
              Button CTA
            </NativeButton>
            <NativeButton type="default" disabled>
              <Sparkle fillColor="black" isDisabled />
            </NativeButton>
          </div>
        </div>
        <div style={{ marginTop: 25 }}>
          <div style={{ display: "flex", gap: "14px", marginTop: 5 }}>
            <NativeButton
              type="text"
              leftIcon={<Sparkle fillColor="black" />}
              rightIcon={<Sparkle fillColor="black" />}
            >
              Button CTA
            </NativeButton>
            <NativeButton type="text" leftIcon={<Dot fillColor="#17B26A" />}>
              Button CTA
            </NativeButton>
            <NativeButton type="text">
              <Sparkle fillColor="black" />
            </NativeButton>
          </div>
          <div style={{ display: "flex", gap: "14px", marginTop: 5 }}>
            <NativeButton
              type="text"
              leftIcon={<Sparkle fillColor="black" isDisabled />}
              rightIcon={<Sparkle fillColor="black" isDisabled />}
              disabled
            >
              Button CTA
            </NativeButton>
            <NativeButton
              type="text"
              leftIcon={<Dot fillColor="#17B26A" isDisabled />}
              disabled
            >
              Button CTA
            </NativeButton>
            <NativeButton type="text" disabled>
              <Sparkle fillColor="black" isDisabled />
            </NativeButton>
          </div>
        </div>
        <div style={{ marginTop: 25 }}>
          <div style={{ display: "flex", gap: "14px" }}>
            <NativeButton
              type="text"
              leftIcon={<Sparkle fillColor="black" />}
              rightIcon={<Sparkle fillColor="black" />}
              variant="green"
            >
              Button CTA
            </NativeButton>
            <NativeButton
              type="text"
              leftIcon={<Dot fillColor="#17B26A" />}
              variant="green"
            >
              Button CTA
            </NativeButton>
            <NativeButton type="text" variant="green">
              <Sparkle fillColor="black" />
            </NativeButton>
          </div>
          <div style={{ display: "flex", gap: "14px", marginTop: 5 }}>
            <NativeButton
              type="text"
              leftIcon={<Sparkle fillColor="black" isDisabled />}
              rightIcon={<Sparkle fillColor="black" isDisabled />}
              disabled
            >
              Button CTA
            </NativeButton>
            <NativeButton
              type="text"
              leftIcon={<Dot fillColor="#17B26A" isDisabled />}
              disabled
            >
              Button CTA
            </NativeButton>
            <NativeButton type="text" disabled>
              <Sparkle fillColor="black" isDisabled />
            </NativeButton>
          </div>
        </div>
      </div>
      <div className="Inputs">
        <h2>
          <strong>Inputs:</strong>
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "14px",
            marginTop: 5,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: 5,
            }}
            className="text-input"
          >
            <Space.Compact>
              <div>
                <Input
                  width="228px"
                  type="text"
                  placeholder="Placeholder"
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  type="text"
                  width="228px"
                  placeholder="Placeholder"
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  className="input-disabled"
                  disabled
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  type="text"
                  width="228px"
                  status="error"
                  placeholder="Placeholder"
                  suffix={<ExclamationCircle fillColor="#F04438" />}
                />
              </div>
            </Space.Compact>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: 5,
            }}
            className="number-input"
          >
            <Space.Compact>
              <div>
                <InputNumber
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "100%" }}
                  controls={false}
                  placeholder="0.000.000,00"
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <InputNumber
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "100%" }}
                  controls={false}
                  placeholder="0.000.000,00"
                  className="number-input-disabled"
                  disabled
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <InputNumber
                  status="error"
                  suffix={<ExclamationCircle fillColor="#F04438" />}
                  style={{ width: "100%" }}
                  controls={false}
                  placeholder="0.000.000,00"
                />
              </div>
            </Space.Compact>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: 5,
            }}
            className="password-input"
          >
            <Space.Compact>
              <div>
                <Input
                  type="password"
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "100%" }}
                  placeholder="******"
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  type="password"
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "100%" }}
                  placeholder="******"
                  className="input-disabled"
                  disabled
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  type="password"
                  status="error"
                  suffix={<ExclamationCircle fillColor="#F04438" />}
                  style={{ width: "100%" }}
                  placeholder="******"
                />
              </div>
            </Space.Compact>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: 5,
            }}
            className="email-input"
          >
            <Space.Compact>
              <div>
                <Input
                  type="email"
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "100%" }}
                  placeholder="contact@email.com"
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  type="email"
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "100%" }}
                  placeholder="contact@email.com"
                  className="input-disabled"
                  disabled
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  type="email"
                  status="error"
                  suffix={<ExclamationCircle fillColor="#F04438" />}
                  style={{ width: "100%" }}
                  placeholder="contact@email.com"
                />
              </div>
            </Space.Compact>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: 5,
            }}
            className="date-time-input"
          >
            <Space.Compact>
              <div>
                <Input
                  type="datetime-local"
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "100%" }}
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  type="datetime-local"
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "100%" }}
                  className="input-disabled"
                  disabled
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  type="datetime-local"
                  status="error"
                  suffix={<ExclamationCircle fillColor="#F04438" />}
                  style={{ width: "100%" }}
                />
              </div>
            </Space.Compact>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: 5,
            }}
            className="phone-input"
          >
            <Space.Compact>
              <div>
                <Input
                  type="tel"
                  value={value}
                  onChange={handleChange}
                  maxLength={15}
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "100%" }}
                  placeholder="(00)00000-0000"
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  type="tel"
                  pattern="(00)00000-0000"
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "100%" }}
                  placeholder="(00)00000-0000"
                  className="input-disabled"
                  disabled
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  type="tel"
                  value={phoneValue}
                  onChange={handlePhoneChange}
                  maxLength={15}
                  status="error"
                  suffix={<ExclamationCircle fillColor="#F04438" />}
                  style={{ width: "100%" }}
                  placeholder="(00)00000-0000"
                />
              </div>
            </Space.Compact>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "14px",
            marginTop: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: 5,
            }}
            className="finance-input"
          >
            <Space.Compact>
              <div>
                <InputNumber
                  prefix={<span style={{ color: "#475467" }}>R$</span>}
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "200px" }}
                  controls={false}
                  placeholder="0.000.000,00"
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <InputNumber
                  prefix={<span style={{ color: "#475467" }}>R$</span>}
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "200px" }}
                  controls={false}
                  placeholder="0.000.000,00"
                  className={"number-input-disabled"}
                  disabled
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <InputNumber
                  prefix={<span style={{ color: "#475467" }}>R$</span>}
                  status="error"
                  suffix={<ExclamationCircle fillColor="#F04438" />}
                  style={{ width: "200px" }}
                  controls={false}
                  placeholder="0.000.000,00"
                />
              </div>
            </Space.Compact>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: 5,
            }}
            className="website-input"
          >
            <Space.Compact>
              <div>
                <Input
                  addonBefore="https://"
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "200px" }}
                  placeholder="www.website.com"
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  addonBefore="https://"
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "200px" }}
                  placeholder="www.website.com"
                  className={"number-input-disabled"}
                  disabled
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  addonBefore="https://"
                  status="error"
                  style={{ width: "200px" }}
                  placeholder="www.website.com"
                  suffix={<ExclamationCircle fillColor="#F04438" />}
                />
              </div>
            </Space.Compact>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: 5,
            }}
            className="payment-input"
          >
            <Space.Compact>
              <div>
                <Input
                  prefix={<Payment />}
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "200px" }}
                  placeholder="Card number"
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  prefix={<Payment />}
                  suffix={<InfoCircle fillColor="#98A2B3" />}
                  style={{ width: "200px" }}
                  placeholder="Card number"
                  className={"number-input-disabled"}
                  disabled
                />
              </div>
            </Space.Compact>
            <Space.Compact>
              <div>
                <Input
                  prefix={<Payment />}
                  status="error"
                  style={{ width: "200px" }}
                  placeholder="Card number"
                  suffix={<ExclamationCircle fillColor="#F04438" />}
                />
              </div>
            </Space.Compact>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: 5,
            }}
            className="select-input"
          >
            <Space>
              <div>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "200px" }}
                  placeholder="Please select"
                  defaultValue={["Carla", "Maria"]}
                  onChange={handleSelectChange}
                  options={options}
                />
              </div>
            </Space>
            <Space>
              <div>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "200px" }}
                  placeholder="Please select"
                  defaultValue={["Carla", "Maria"]}
                  onChange={handleSelectChange}
                  options={options}
                  disabled
                />
              </div>
            </Space>
            <Space>
              <div>
                <Select
                  mode="multiple"
                  allowClear
                  status="error"
                  style={{ width: "200px" }}
                  placeholder="Please select"
                  defaultValue={["Carla", "Maria"]}
                  onChange={handleSelectChange}
                  options={options}
                />
              </div>
            </Space>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: 5,
            }}
            className="clipboard-input"
          >
            <Space.Compact style={{ width: "200px" }}>
              <Input
                suffix={<InfoCircle fillColor="#98A2B3" />}
                style={{ width: "200px" }}
                placeholder="Content holder"
              />
              <Button type="default" icon={<Copy fillColor="#344054" />}>
                Copy
              </Button>
            </Space.Compact>
            <Space.Compact style={{ width: "200px" }}>
              <Input
                suffix={<InfoCircle fillColor="#98A2B3" />}
                style={{ width: "200px" }}
                placeholder="Content holder"
                disabled
              />
              <Button
                type="default"
                icon={<Copy fillColor="#344054" isDisabled />}
                disabled
              >
                Copy
              </Button>
            </Space.Compact>
            <Space.Compact style={{ width: "200px" }}>
              <Input
                status="error"
                suffix={<InfoCircle fillColor="#98A2B3" />}
                style={{ width: "200px" }}
                placeholder="Content holder"
              />
              <Button type="default" icon={<Copy fillColor="#344054" />}>
                Copy
              </Button>
            </Space.Compact>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: 50,
          }}
          className="text-area-input"
        >
          <Space.Compact style={{ width: "415px" }}>
            <TextArea rows={4} placeholder="Enter a description..." />
          </Space.Compact>
          <Space.Compact style={{ width: "415px" }}>
            <TextArea rows={4} placeholder="Enter a description..." disabled />
          </Space.Compact>
          <Space.Compact style={{ width: "415px" }}>
            <TextArea
              rows={4}
              placeholder="Enter a description..."
              status="error"
            />
          </Space.Compact>
        </div>
      </div>
      <div className="sliders">
        <h2>
          <strong>Sliders:</strong>
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              width: "415px",
            }}
            className="classic-slider"
          >
            <Slider range defaultValue={[0, 100]} />
            <Slider range defaultValue={[25, 78]} />
            <Slider range defaultValue={[65, 100]} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              width: "415px",
            }}
            className="percentage-slider"
          >
            <Slider
              range
              defaultValue={[0, 100]}
              tooltip={{
                formatter,
                open: true,
                placement: "bottom",
                overlayInnerStyle: {
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#101828",
                },
                color: "white",
                arrow: false,
              }}
            />
            <Slider
              range
              defaultValue={[25, 78]}
              tooltip={{
                formatter,
                open: true,
                placement: "bottom",
                overlayInnerStyle: {
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#101828",
                },
                color: "white",
                arrow: false,
              }}
            />
            <Slider
              range
              defaultValue={[65, 100]}
              tooltip={{
                formatter,
                open: true,
                placement: "bottom",
                overlayInnerStyle: {
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#101828",
                },
                color: "white",
                arrow: false,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              width: "415px",
            }}
            className="percentage-slider-tooltip"
          >
            <Slider
              range
              defaultValue={[0, 100]}
              tooltip={{
                formatter,
                open: true,
                placement: "top",
                overlayInnerStyle: {
                  fontWeight: 600,
                  fontSize: "12px",
                  background: "transparent",
                  boxShadow: "none",
                  color: "black",
                },
                overlayStyle: {
                  background: "transparent",
                  boxShadow: "none",
                },
                arrow: false,
              }}
            />
            <Slider
              range
              defaultValue={[25, 78]}
              tooltip={{
                formatter,
                open: true,
                placement: "top",
                overlayInnerStyle: {
                  fontWeight: 600,
                  fontSize: "12px",
                  background: "transparent",
                  boxShadow: "none",
                  color: "black",
                },
                overlayStyle: {
                  background: "transparent",
                  boxShadow: "none",
                },
                arrow: false,
              }}
            />
            <Slider
              range
              defaultValue={[65, 100]}
              tooltip={{
                formatter,
                open: true,
                placement: "top",
                overlayInnerStyle: {
                  fontWeight: 600,
                  fontSize: "12px",
                  background: "transparent",
                  boxShadow: "none",
                  color: "black",
                },
                overlayStyle: {
                  background: "transparent",
                  boxShadow: "none",
                },
                arrow: false,
              }}
            />
          </div>
        </div>
      </div>
      <div className="Chips">
        <h2>
          <strong>Chips:</strong>
        </h2>

        <div
          className="default chips"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px 0" wrap>
            <Tag
              color="#F9FAFB"
              style={{
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F9F5FF"
              style={{
                borderColor: "#E9D7FE",
                color: "#6941C6",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FEF3F2"
              style={{
                borderColor: "#FECDCA",
                color: "#B42318",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FFFAEB"
              style={{
                borderColor: "#FEDF89",
                color: "#B54708",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#ECFDF3"
              style={{
                borderColor: "#ABEFC6",
                color: "#067647",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F8F9FC"
              style={{
                borderColor: "#D5D9EB",
                color: "#363F72",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F0F9FF"
              style={{
                borderColor: "#B9E6FE",
                color: "#026AA2",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#EFF8FF"
              style={{
                borderColor: "#B2DDFF",
                color: "#175CD3",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#EEF4FF"
              style={{
                borderColor: "#C7D7FE",
                color: "#3538CD",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F4F3FF"
              style={{
                borderColor: "#D9D6FE",
                color: "#5925DC",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FDF2FA"
              style={{
                borderColor: "#FCCEEE",
                color: "#C11574",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FEF6EE"
              style={{
                borderColor: "#F9DBAF",
                color: "#B93815",
                fontWeight: "500",
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="default sized chips"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px ">
            <Tag
              color="#F9FAFB"
              style={{
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                fontSize: "14px",
                paddingLeft: 8,
                paddingRight: 8,
                borderRadius: "8px",
              }}
            >
              Label
            </Tag>
            <div>
              <Tag
                color="#F9FAFB"
                style={{
                  borderColor: "#EAECF0",
                  color: "#344054",
                  fontWeight: "500",
                  fontSize: "14px",
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 2,
                  paddingBottom: 2,
                  borderRadius: "8px",
                }}
              >
                Label
              </Tag>
            </div>
          </Flex>
        </div>
        <div
          className="left icon chips"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              icon={<SmallDot fillColor="#667085" />}
              color="#F9FAFB"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: "0",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#9E77ED" />}
              color="#F9F5FF"
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#E9D7FE",
                color: "#6941C6",
                fontWeight: "500",
                borderRadius: "8px",
                gap: "2px",
                paddingLeft: "0",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#F04438" />}
              color="#FEF3F2"
              style={{
                borderColor: "#FECDCA",
                color: "#B42318",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: "0",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#F79009" />}
              color="#FFFAEB"
              style={{
                borderColor: "#FEDF89",
                color: "#B54708",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "0",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#17B26A" />}
              color="#ECFDF3"
              style={{
                borderColor: "#ABEFC6",
                color: "#067647",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: "0",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#4E5BA6" />}
              color="#F8F9FC"
              style={{
                borderColor: "#D5D9EB",
                color: "#363F72",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: "0",
                display: "flex",
                gap: "2px",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#0BA5EC" />}
              color="#F0F9FF"
              style={{
                borderColor: "#B9E6FE",
                color: "#026AA2",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: "0",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#2E90FA" />}
              color="#EFF8FF"
              style={{
                borderColor: "#B2DDFF",
                color: "#175CD3",
                fontWeight: "500",
                paddingLeft: "0",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#6172F3" />}
              color="#EEF4FF"
              style={{
                borderColor: "#C7D7FE",
                color: "#3538CD",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: "0",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#7A5AF8" />}
              color="#F4F3FF"
              style={{
                borderColor: "#D9D6FE",
                color: "#5925DC",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                gap: "2px",
                paddingLeft: "0",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#EE46BC" />}
              color="#FDF2FA"
              style={{
                borderColor: "#FCCEEE",
                color: "#C11574",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                gap: "2px",
                alignItems: "center",
                paddingLeft: "0",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#EF6820" />}
              color="#FEF6EE"
              style={{
                borderColor: "#F9DBAF",
                color: "#B93815",
                fontWeight: "500",
                gap: "2px",
                borderRadius: "8px",
                paddingLeft: "0",
                display: "flex",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="sized left icon chips"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              icon={<SmallDot fillColor="#667085" />}
              color="#F9FAFB"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                borderColor: "#EAECF0",
                color: "#344054",
                fontSize: "14px",
                fontWeight: "500",
                borderRadius: "8px",
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 6,
                paddingRight: 6,
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#667085" />}
              color="#F9FAFB"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                borderColor: "#EAECF0",
                fontSize: "14px",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="left icon outlined chips"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              icon={<SmallDot fillColor="#667085" />}
              color="transparent"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                borderColor: "#D0D5DD",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: "0",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#9E77ED" />}
              color="transparent"
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#D0D5DD",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                gap: "2px",
                paddingLeft: "0",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#F04438" />}
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
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#F79009" />}
              color="transparent"
              style={{
                borderColor: "#D0D5DD",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "0",
                gap: "2px",
              }}
            >
              Label
            </Tag>
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
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#4E5BA6" />}
              color="transparent"
              style={{
                borderColor: "#D0D5DD",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: "0",
                display: "flex",
                gap: "2px",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#0BA5EC" />}
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
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#2E90FA" />}
              color="transparent"
              style={{
                borderColor: "#D0D5DD",
                color: "#344054",
                fontWeight: "500",
                paddingLeft: "0",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#6172F3" />}
              color="transparent"
              style={{
                borderColor: "#D0D5DD",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: "0",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#7A5AF8" />}
              color="transparent"
              style={{
                borderColor: "#D0D5DD",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                gap: "2px",
                paddingLeft: "0",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#EE46BC" />}
              color="transparent"
              style={{
                borderColor: "#D0D5DD",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                gap: "2px",
                alignItems: "center",
                paddingLeft: "0",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#EF6820" />}
              color="transparent"
              style={{
                borderColor: "#D0D5DD",
                color: "#344054",
                fontWeight: "500",
                gap: "2px",
                borderRadius: "8px",
                paddingLeft: "0",
                display: "flex",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="sized left icon outlined chips"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              icon={<SmallDot fillColor="#667085" />}
              color="transparent"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                borderColor: "#D0D5DD",
                color: "#344054",
                fontSize: "14px",
                fontWeight: "500",
                borderRadius: "8px",
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 6,
                paddingRight: 6,
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<SmallDot fillColor="#667085" />}
              color="transparent"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                fontSize: "14px",
                borderColor: "#D0D5DD",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="sized left avatar chips"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#F9FAFB"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#F9F5FF"
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#E9D7FE",
                color: "#6941C6",
                fontWeight: "500",
                borderRadius: "8px",
                gap: "2px",
                paddingLeft: 4,
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#FEF3F2"
              style={{
                borderColor: "#FECDCA",
                color: "#B42318",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#FFFAEB"
              style={{
                borderColor: "#FEDF89",
                color: "#B54708",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                paddingLeft: 4,
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#ECFDF3"
              style={{
                borderColor: "#ABEFC6",
                color: "#067647",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#F8F9FC"
              style={{
                borderColor: "#D5D9EB",
                color: "#363F72",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
                display: "flex",
                gap: "2px",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#F0F9FF"
              style={{
                borderColor: "#B9E6FE",
                color: "#026AA2",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#EFF8FF"
              style={{
                borderColor: "#B2DDFF",
                color: "#175CD3",
                fontWeight: "500",
                paddingLeft: 4,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#EEF4FF"
              style={{
                borderColor: "#C7D7FE",
                color: "#3538CD",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#F4F3FF"
              style={{
                borderColor: "#D9D6FE",
                color: "#5925DC",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                gap: "2px",
                paddingLeft: 4,
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#FDF2FA"
              style={{
                borderColor: "#FCCEEE",
                color: "#C11574",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                gap: "2px",
                alignItems: "center",
                paddingLeft: 4,
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#FEF6EE"
              style={{
                borderColor: "#F9DBAF",
                color: "#B93815",
                fontWeight: "500",
                gap: "2px",
                borderRadius: "8px",
                paddingLeft: 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="avatar sized chip"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#F9FAFB"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                fontSize: "14px",
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 6,
                paddingRight: 6,
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<Avatar size={14}>U</Avatar>}
              color="#F9FAFB"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                fontSize: "14px",
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="close icon chips"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              color="#F9FAFB"
              closeIcon={<CloseOutlined style={{ color: "#98A2B3" }} />}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F9F5FF"
              closeIcon={<CloseOutlined style={{ color: "#B692F6" }} />}
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#E9D7FE",
                color: "#6941C6",
                fontWeight: "500",
                borderRadius: "8px",
                gap: "2px",
                paddingLeft: 4,
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FEF3F2"
              closeIcon={<CloseOutlined style={{ color: "#F97066" }} />}
              style={{
                borderColor: "#FECDCA",
                color: "#B42318",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FFFAEB"
              closeIcon={<CloseOutlined style={{ color: "#FDB022" }} />}
              style={{
                borderColor: "#FEDF89",
                color: "#B54708",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                paddingLeft: 4,
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#ECFDF3"
              closeIcon={<CloseOutlined style={{ color: "#47CD89" }} />}
              style={{
                borderColor: "#ABEFC6",
                color: "#067647",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F8F9FC"
              closeIcon={<CloseOutlined style={{ color: "#717BBC" }} />}
              style={{
                borderColor: "#D5D9EB",
                color: "#363F72",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
                display: "flex",
                gap: "2px",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F0F9FF"
              closeIcon={<CloseOutlined style={{ color: "#36BFFA" }} />}
              style={{
                borderColor: "#B9E6FE",
                color: "#026AA2",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#EFF8FF"
              closeIcon={<CloseOutlined style={{ color: "#53B1FD" }} />}
              style={{
                borderColor: "#B2DDFF",
                color: "#175CD3",
                fontWeight: "500",
                paddingLeft: 4,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#EEF4FF"
              closeIcon={<CloseOutlined style={{ color: "#8098F9" }} />}
              style={{
                borderColor: "#C7D7FE",
                color: "#3538CD",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F4F3FF"
              closeIcon={<CloseOutlined style={{ color: "#9B8AFB" }} />}
              style={{
                borderColor: "#D9D6FE",
                color: "#5925DC",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                gap: "2px",
                paddingLeft: 4,
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FDF2FA"
              closeIcon={<CloseOutlined style={{ color: "#F670C7" }} />}
              style={{
                borderColor: "#FCCEEE",
                color: "#C11574",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                gap: "2px",
                alignItems: "center",
                paddingLeft: 4,
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FEF6EE"
              closeIcon={<CloseOutlined style={{ color: "#F38744" }} />}
              style={{
                borderColor: "#F9DBAF",
                color: "#B93815",
                fontWeight: "500",
                gap: "2px",
                borderRadius: "8px",
                paddingLeft: 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="close icon sized chip"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              closeIcon={<CloseOutlined style={{ color: "#98A2B3" }} />}
              color="#F9FAFB"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                fontSize: "14px",
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 6,
                paddingRight: 6,
              }}
            >
              Label
            </Tag>
            <Tag
              closeIcon={<CloseOutlined style={{ color: "#98A2B3" }} />}
              color="#F9FAFB"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                fontSize: "14px",
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="arrow right icon chips"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              color="#F9FAFB"
              closeIcon={<ArrowRightOutlined style={{ color: "#475467" }} />}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
              }}
            >
              {" "}
              Label
            </Tag>
            <Tag
              color="#F9F5FF"
              closeIcon={<ArrowRightOutlined style={{ color: "#7F56D9" }} />}
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#E9D7FE",
                color: "#6941C6",
                fontWeight: "500",
                borderRadius: "8px",
                gap: "2px",
                paddingLeft: 4,
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FEF3F2"
              closeIcon={<ArrowRightOutlined style={{ color: "#D92D20" }} />}
              style={{
                borderColor: "#FECDCA",
                color: "#B42318",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FFFAEB"
              closeIcon={<ArrowRightOutlined style={{ color: "#DC6803" }} />}
              style={{
                borderColor: "#FEDF89",
                color: "#B54708",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                paddingLeft: 4,
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#ECFDF3"
              closeIcon={<ArrowRightOutlined style={{ color: "#079455" }} />}
              style={{
                borderColor: "#ABEFC6",
                color: "#067647",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F8F9FC"
              closeIcon={<ArrowRightOutlined style={{ color: "#4E5BA6" }} />}
              style={{
                borderColor: "#D5D9EB",
                color: "#363F72",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
                display: "flex",
                gap: "2px",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F0F9FF"
              closeIcon={<ArrowRightOutlined style={{ color: "#0BA5EC" }} />}
              style={{
                borderColor: "#B9E6FE",
                color: "#026AA2",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#EFF8FF"
              closeIcon={<ArrowRightOutlined style={{ color: "#2E90FA" }} />}
              style={{
                borderColor: "#B2DDFF",
                color: "#175CD3",
                fontWeight: "500",
                paddingLeft: 4,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#EEF4FF"
              closeIcon={<ArrowRightOutlined style={{ color: "#6172F3" }} />}
              style={{
                borderColor: "#C7D7FE",
                color: "#3538CD",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F4F3FF"
              closeIcon={<ArrowRightOutlined style={{ color: "#7A5AF8" }} />}
              style={{
                borderColor: "#D9D6FE",
                color: "#5925DC",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                gap: "2px",
                paddingLeft: 4,
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FDF2FA"
              closeIcon={<ArrowRightOutlined style={{ color: "#EE46BC" }} />}
              style={{
                borderColor: "#FCCEEE",
                color: "#C11574",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                gap: "2px",
                alignItems: "center",
                paddingLeft: 4,
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FEF6EE"
              closeIcon={<ArrowRightOutlined style={{ color: "#EF6820" }} />}
              style={{
                borderColor: "#F9DBAF",
                color: "#B93815",
                fontWeight: "500",
                gap: "2px",
                borderRadius: "8px",
                paddingLeft: 4,

                display: "flex",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="arrow right icon sized chip"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              closeIcon={<ArrowRightOutlined style={{ color: "#475467" }} />}
              color="#F9FAFB"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                fontSize: "14px",
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 6,
                paddingRight: 6,
              }}
            >
              Label
            </Tag>
            <Tag
              closeIcon={<ArrowRightOutlined style={{ color: "#475467" }} />}
              color="#F9FAFB"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                fontSize: "14px",
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="arrow up icon chips"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              color="#F9FAFB"
              icon={<ArrowUpOutlined style={{ color: "#475467" }} />}
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
              }}
            >
              {" "}
              Label
            </Tag>
            <Tag
              color="#F9F5FF"
              icon={<ArrowUpOutlined style={{ color: "#7F56D9" }} />}
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#E9D7FE",
                color: "#6941C6",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FEF3F2"
              icon={<ArrowUpOutlined style={{ color: "#D92D20" }} />}
              style={{
                borderColor: "#FECDCA",
                color: "#B42318",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FFFAEB"
              icon={<ArrowUpOutlined style={{ color: "#DC6803" }} />}
              style={{
                borderColor: "#FEDF89",
                color: "#B54708",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                paddingLeft: 4,
              }}
            >
              Label
            </Tag>
            <Tag
              color="#ECFDF3"
              icon={<ArrowUpOutlined style={{ color: "#079455" }} />}
              style={{
                borderColor: "#ABEFC6",
                color: "#067647",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F8F9FC"
              icon={<ArrowUpOutlined style={{ color: "#4E5BA6" }} />}
              style={{
                borderColor: "#D5D9EB",
                color: "#363F72",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F0F9FF"
              icon={<ArrowUpOutlined style={{ color: "#0BA5EC" }} />}
              style={{
                borderColor: "#B9E6FE",
                color: "#026AA2",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#EFF8FF"
              icon={<ArrowUpOutlined style={{ color: "#2E90FA" }} />}
              style={{
                borderColor: "#B2DDFF",
                color: "#175CD3",
                fontWeight: "500",
                paddingLeft: 4,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#EEF4FF"
              icon={<ArrowUpOutlined style={{ color: "#6172F3" }} />}
              style={{
                borderColor: "#C7D7FE",
                color: "#3538CD",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#F4F3FF"
              icon={<ArrowUpOutlined style={{ color: "#7A5AF8" }} />}
              style={{
                borderColor: "#D9D6FE",
                color: "#5925DC",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                paddingLeft: 4,
                alignItems: "center",
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FDF2FA"
              icon={<ArrowUpOutlined style={{ color: "#EE46BC" }} />}
              style={{
                borderColor: "#FCCEEE",
                color: "#C11574",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                paddingLeft: 4,
              }}
            >
              Label
            </Tag>
            <Tag
              color="#FEF6EE"
              icon={<ArrowUpOutlined style={{ color: "#EF6820" }} />}
              style={{
                borderColor: "#F9DBAF",
                color: "#B93815",
                fontWeight: "500",
                borderRadius: "8px",
                paddingLeft: 4,

                display: "flex",
                alignItems: "center",
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="arrow right icon sized chip"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              icon={<ArrowUpOutlined style={{ color: "#475467" }} />}
              color="#F9FAFB"
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                fontSize: "14px",
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 6,
                paddingRight: 6,
              }}
            >
              Label
            </Tag>
            <Tag
              icon={<ArrowUpOutlined style={{ color: "#475467" }} />}
              color="#F9FAFB"
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                fontSize: "14px",
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              Label
            </Tag>
          </Flex>
        </div>
        <div
          className="plus icon chips"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              color="#F9FAFB"
              icon={<PlusOutlined style={{ color: "#475467" }} />}
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                padding: 4,
              }}
            ></Tag>
            <Tag
              color="#F9F5FF"
              icon={<PlusOutlined style={{ color: "#7F56D9" }} />}
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#E9D7FE",
                color: "#6941C6",
                fontWeight: "500",
                borderRadius: "8px",
                padding: 4,
              }}
            ></Tag>
            <Tag
              color="#FEF3F2"
              icon={<PlusOutlined style={{ color: "#D92D20" }} />}
              style={{
                borderColor: "#FECDCA",
                color: "#B42318",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                padding: 4,
                alignItems: "center",
              }}
            ></Tag>
            <Tag
              color="#FFFAEB"
              icon={<PlusOutlined style={{ color: "#DC6803" }} />}
              style={{
                borderColor: "#FEDF89",
                color: "#B54708",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                padding: 4,
              }}
            ></Tag>
            <Tag
              color="#ECFDF3"
              icon={<PlusOutlined style={{ color: "#079455" }} />}
              style={{
                borderColor: "#ABEFC6",
                color: "#067647",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                padding: 4,
                alignItems: "center",
              }}
            ></Tag>
            <Tag
              color="#F8F9FC"
              icon={<PlusOutlined style={{ color: "#4E5BA6" }} />}
              style={{
                borderColor: "#D5D9EB",
                color: "#363F72",
                fontWeight: "500",
                borderRadius: "8px",
                padding: 4,
                display: "flex",
                alignItems: "center",
              }}
            ></Tag>
            <Tag
              color="#F0F9FF"
              icon={<PlusOutlined style={{ color: "#0BA5EC" }} />}
              style={{
                borderColor: "#B9E6FE",
                color: "#026AA2",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                padding: 4,
                alignItems: "center",
              }}
            ></Tag>
            <Tag
              color="#EFF8FF"
              icon={<PlusOutlined style={{ color: "#2E90FA" }} />}
              style={{
                borderColor: "#B2DDFF",
                color: "#175CD3",
                fontWeight: "500",
                padding: 4,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
              }}
            ></Tag>
            <Tag
              color="#EEF4FF"
              icon={<PlusOutlined style={{ color: "#6172F3" }} />}
              style={{
                borderColor: "#C7D7FE",
                color: "#3538CD",
                fontWeight: "500",
                borderRadius: "8px",
                padding: 4,
                display: "flex",
                alignItems: "center",
              }}
            ></Tag>
            <Tag
              color="#F4F3FF"
              icon={<PlusOutlined style={{ color: "#7A5AF8" }} />}
              style={{
                borderColor: "#D9D6FE",
                color: "#5925DC",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                padding: 4,
                alignItems: "center",
              }}
            ></Tag>
            <Tag
              color="#FDF2FA"
              icon={<PlusOutlined style={{ color: "#EE46BC" }} />}
              style={{
                borderColor: "#FCCEEE",
                color: "#C11574",
                fontWeight: "500",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                padding: 4,
              }}
            ></Tag>
            <Tag
              color="#FEF6EE"
              icon={<PlusOutlined style={{ color: "#EF6820" }} />}
              style={{
                borderColor: "#F9DBAF",
                color: "#B93815",
                fontWeight: "500",
                borderRadius: "8px",
                padding: 4,
                display: "flex",
                alignItems: "center",
              }}
            ></Tag>
          </Flex>
        </div>
        <div
          className="plus icon sized chip"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            marginTop: "10px",
          }}
        >
          <Flex gap="4px " wrap>
            <Tag
              color="#F9FAFB"
              icon={<PlusOutlined style={{ color: "#475467" }} />}
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                fontSize: "14px",
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 6,
                paddingRight: 6,
              }}
            ></Tag>
            <Tag
              color="#F9FAFB"
              icon={<PlusOutlined style={{ color: "#475467" }} />}
              style={{
                display: "flex",
                alignItems: "center",
                borderColor: "#EAECF0",
                color: "#344054",
                fontWeight: "500",
                borderRadius: "8px",
                fontSize: "14px",
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            ></Tag>
          </Flex>
        </div>
      </div>
      <div className="Alerts">
        <h2>
          <strong>Alerts:</strong>
        </h2>

        <div
          className="default alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            className="default-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                label="Version 4.0"
              />
            }
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#EAECF0",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
            }}
          />
          <Alert
            className="default-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                label="Version 4.0"
              />
            }
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#EAECF0",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
            }}
          />
          <Alert
            className="default-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                label="Version 4.0"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#EAECF0",
              borderRadius: "10px",
              gap: "12px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
            }}
          />
          <Alert
            className="default-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                label="Version 4.0"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#EAECF0",
              borderRadius: "10px",
              gap: "12px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
            }}
          />
        </div>
        <div
          className="dark tag alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            className="default-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#344054"
                color="#FFFFFF"
                label="Version 4.0"
              />
            }
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#EAECF0",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
            }}
          />
          <Alert
            className="default-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#344054"
                color="#FFFFFF"
                label="Version 4.0"
              />
            }
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#EAECF0",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
            }}
          />
          <Alert
            className="default-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#344054"
                color="#FFFFFF"
                label="Version 4.0"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#EAECF0",
              borderRadius: "10px",
              gap: "12px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
            }}
          />
          <Alert
            className="default-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#344054"
                color="#FFFFFF"
                label="Version 4.0"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#EAECF0",
              borderRadius: "10px",
              gap: "12px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
            }}
          />
        </div>
        <div
          className="light tag alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            className="default-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#475467"
                label="Version 4.0"
              />
            }
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#475467",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
            }}
          />
          <Alert
            className="default-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#475467"
                label="Version 4.0"
              />
            }
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#475467",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
            }}
          />
          <Alert
            className="default-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                label="Version 4.0"
                borderColor="#475467"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#475467",
              borderRadius: "10px",
              gap: "12px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
            }}
          />
          <Alert
            className="default-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                label="Version 4.0"
                borderColor="#475467"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#475467",
              borderRadius: "10px",
              gap: "12px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
            }}
          />
        </div>
        <div
          className="new feature tag alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            className="green-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#27665A" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#1A443C"
                borderColor="#92B2AC"
                label="New Feature"
              />
            }
            style={{
              backgroundColor: "#D9E4E2",
              borderColor: "#92B2AC",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#1A443C",
              padding: 4,
            }}
          />
          <Alert
            className="green-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#27665A" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#1A443C"
                borderColor="#92B2AC"
                label="New Feature"
              />
            }
            style={{
              backgroundColor: "#D9E4E2",
              borderColor: "#92B2AC",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#1A443C",
              padding: 4,
            }}
          />
          <Alert
            className="green-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#1A443C"
                borderColor="#92B2AC"
                label="New Feature"
                rightIcon={<ArrowRightOutlined style={{ color: "#27665A" }} />}
              />
            }
            style={{
              backgroundColor: "#D9E4E2",
              borderColor: "#92B2AC",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#1A443C",
              padding: 4,
            }}
          />
          <Alert
            className="green-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#1A443C"
                borderColor="#92B2AC"
                label="New Feature"
                rightIcon={<ArrowRightOutlined style={{ color: "#27665A" }} />}
              />
            }
            style={{
              backgroundColor: "#D9E4E2",
              borderColor: "#92B2AC",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#1A443C",
              padding: 4,
            }}
          />
        </div>
        <div
          className="dark tag new feature alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            className="green-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#27665A" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#21554B"
                color="#FFFFFF"
                borderColor="#92B2AC"
                label="New Feature"
              />
            }
            style={{
              backgroundColor: "#D9E4E2",
              borderColor: "#92B2AC",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#1A443C",
              padding: 4,
            }}
          />
          <Alert
            className="green-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#27665A" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#21554B"
                color="#FFFFFF"
                borderColor="#92B2AC"
                label="New Feature"
              />
            }
            style={{
              backgroundColor: "#D9E4E2",
              borderColor: "#92B2AC",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#1A443C",
              padding: 4,
            }}
          />
          <Alert
            className="green-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#1A443C"
                borderColor="#92B2AC"
                label="New Feature"
                rightIcon={<ArrowRightOutlined style={{ color: "#27665A" }} />}
              />
            }
            style={{
              backgroundColor: "#D9E4E2",
              borderColor: "#92B2AC",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#1A443C",
              padding: 4,
            }}
          />
          <Alert
            className="green-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#1A443C"
                borderColor="#92B2AC"
                label="New Feature"
                rightIcon={<ArrowRightOutlined style={{ color: "#27665A" }} />}
              />
            }
            style={{
              backgroundColor: "#D9E4E2",
              borderColor: "#92B2AC",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#1A443C",
              padding: 4,
            }}
          />
        </div>
        <div
          className="light tag new feature alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            className="green-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#27665A" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#1A443C"
                borderColor="#21554B"
                label="New Feature"
              />
            }
            style={{
              backgroundColor: "white",
              borderColor: "#21554B",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#1A443C",
              padding: 4,
            }}
          />
          <Alert
            className="green-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#27665A" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#1A443C"
                borderColor="#21554B"
                label="New Feature"
              />
            }
            style={{
              backgroundColor: "white",
              borderColor: "#21554B",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#1A443C",
              padding: 4,
            }}
          />
          <Alert
            className="green-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#1A443C"
                borderColor="#92B2AC"
                label="New Feature"
                rightIcon={<ArrowRightOutlined style={{ color: "#27665A" }} />}
              />
            }
            style={{
              backgroundColor: "white",
              borderColor: "#21554B",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#1A443C",
              padding: 4,
            }}
          />
          <Alert
            className="green-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#1A443C"
                borderColor="#92B2AC"
                label="New Feature"
                rightIcon={<ArrowRightOutlined style={{ color: "#27665A" }} />}
              />
            }
            style={{
              backgroundColor: "white",
              borderColor: "#21554B",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#1A443C",
              padding: 4,
            }}
          />
        </div>
        <div
          className="error alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            type="error"
            className="error-alert"
            message="There was a problem with that action"
            action={<ArrowRightOutlined style={{ color: "#F04438" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#B42318"
                borderColor="#FECDCA"
                label="Error"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#B42318",
              padding: 4,
            }}
          />
          <Alert
            type="error"
            className="error-alert"
            message="There was a problem with that action"
            action={<ArrowRightOutlined style={{ color: "#F04438" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#B42318"
                borderColor="#FECDCA"
                label="Error"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#B42318",
              padding: 4,
            }}
          />
          <Alert
            type="error"
            className="error-alert"
            message="There was a problem with that action"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#B42318"
                borderColor="#FECDCA"
                label="Fix Now"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#B42318",
              padding: 4,
            }}
          />
          <Alert
            type="error"
            className="error-alert"
            message="There was a problem with that action"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#B42318"
                borderColor="#FECDCA"
                label="Fix Now"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#B42318",
              padding: 4,
            }}
          />
        </div>
        <div
          className="dark tag error alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            type="error"
            className="error-alert"
            message="There was a problem with that action"
            action={<ArrowRightOutlined style={{ color: "#F04438" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#D92D20"
                color="#FFFFFF"
                borderColor="#FECDCA"
                label="Error"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#B42318",
              padding: 4,
            }}
          />
          <Alert
            type="error"
            className="error-alert"
            message="There was a problem with that action"
            action={<ArrowRightOutlined style={{ color: "#F04438" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#D92D20"
                color="#FFFFFF"
                borderColor="#FECDCA"
                label="Error"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#B42318",
              padding: 4,
            }}
          />
          <Alert
            type="error"
            className="error-alert"
            message="There was a problem with that action"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#D92D20"
                color="#FFFFFF"
                borderColor="#FECDCA"
                label="Fix Now"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#B42318",
              padding: 4,
            }}
          />
          <Alert
            type="error"
            className="error-alert"
            message="There was a problem with that action"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#D92D20"
                color="#FFFFFF"
                borderColor="#FECDCA"
                label="Fix Now"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#B42318",
              padding: 4,
            }}
          />
        </div>
        <div
          className="light tag error alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            type="error"
            className="error-alert"
            message="There was a problem with that action"
            action={<ArrowRightOutlined style={{ color: "#F04438" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#B42318"
                borderColor="#D92D20"
                label="Error"
              />
            }
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#B42318",
              padding: 4,
              borderColor: "#D92D20",
            }}
          />
          <Alert
            type="error"
            className="error-alert"
            message="There was a problem with that action"
            action={<ArrowRightOutlined style={{ color: "#F04438" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#B42318"
                borderColor="#D92D20"
                label="Error"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#B42318",
              padding: 4,
              borderColor: "#D92D20",
              backgroundColor: "white",
            }}
          />
          <Alert
            type="error"
            className="error-alert"
            message="There was a problem with that action"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#B42318"
                borderColor="#D92D20"
                label="Fix Now"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#B42318",
              padding: 4,
              borderColor: "#D92D20",
              backgroundColor: "white",
            }}
          />
          <Alert
            type="error"
            className="error-alert"
            message="There was a problem with that action"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#B42318"
                borderColor="#D92D20"
                label="Fix Now"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#B42318",
              padding: 4,
              borderColor: "#D92D20",
              backgroundColor: "white",
            }}
          />
        </div>
        <div
          className="warning alert"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            type="warning"
            className="warning-alert"
            message="Just to let you know this might be a problem"
            action={<ArrowRightOutlined style={{ color: "#F79009" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#B54708"
                borderColor="#FEDF89"
                label="Warning"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#B54708",
              padding: 4,
              width: "360px",
            }}
          />
          <Alert
            type="warning"
            className="warning-alert"
            message="Just to let you know this might be a problem"
            action={<ArrowRightOutlined style={{ color: "#F79009" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#B54708"
                borderColor="#FEDF89"
                label="Warning"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#B54708",
              padding: 4,
              width: "400px",
            }}
          />
          <div
            className="warning alert"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            {" "}
            <Alert
              type="warning"
              className="warning-alert"
              message="Just to let you know this might be a problem"
              action={
                <AlertTag
                  fontSize="12px"
                  backgroundColor="#FFFFFF"
                  color="#B54708"
                  borderColor="#FEDF89"
                  label="Warning"
                  rightIcon={
                    <ArrowRightOutlined style={{ color: "#F79009" }} />
                  }
                />
              }
              style={{
                borderRadius: "10px",
                gap: "5px",
                fontWeight: 500,
                fontSize: "12px",
                color: "#B54708",
                padding: 4,
              }}
            />
            <Alert
              type="warning"
              className="warning-alert"
              message="Just to let you know this might be a problem"
              action={
                <AlertTag
                  fontSize="14px"
                  backgroundColor="#FFFFFF"
                  color="#B54708"
                  borderColor="#FEDF89"
                  label="Warning"
                  rightIcon={
                    <ArrowRightOutlined style={{ color: "#F79009" }} />
                  }
                />
              }
              style={{
                borderRadius: "10px",
                gap: "5px",
                fontWeight: 500,
                fontSize: "14px",
                color: "#B54708",
                padding: 4,
              }}
            />
          </div>
        </div>
        <div
          className="dark tag warning alert"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            type="warning"
            className="warning-alert"
            message="Just to let you know this might be a problem"
            action={<ArrowRightOutlined style={{ color: "#F79009" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#DC6803"
                color="#FFFFFF"
                borderColor="#FEDF89"
                label="Warning"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#B54708",
              padding: 4,
              width: "360px",
            }}
          />
          <Alert
            type="warning"
            className="warning-alert"
            message="Just to let you know this might be a problem"
            action={<ArrowRightOutlined style={{ color: "#F79009" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#DC6803"
                color="#FFFFFF"
                borderColor="#FEDF89"
                label="Warning"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#B54708",
              padding: 4,
              width: "400px",
            }}
          />
          <div
            className="dark tag warning alert"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <Alert
              type="warning"
              className="warning-alert"
              message="Just to let you know this might be a problem"
              action={
                <AlertTag
                  fontSize="12px"
                  backgroundColor="#DC6803"
                  color="#FFFFFF"
                  borderColor="#FEDF89"
                  label="Warning"
                  rightIcon={
                    <ArrowRightOutlined style={{ color: "#FFFFFF" }} />
                  }
                />
              }
              style={{
                borderRadius: "10px",
                gap: "5px",
                fontWeight: 500,
                fontSize: "12px",
                color: "#B54708",
                padding: 4,
              }}
            />
            <Alert
              type="warning"
              className="warning-alert"
              message="Just to let you know this might be a problem"
              action={
                <AlertTag
                  fontSize="14px"
                  backgroundColor="#DC6803"
                  color="#FFFFFF"
                  borderColor="#FEDF89"
                  label="Warning"
                  rightIcon={
                    <ArrowRightOutlined style={{ color: "#FFFFFF" }} />
                  }
                />
              }
              style={{
                borderRadius: "10px",
                gap: "5px",
                fontWeight: 500,
                fontSize: "14px",
                color: "#B54708",
                padding: 4,
              }}
            />
          </div>
        </div>
        <div
          className="light tag warning alert"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            type="warning"
            className="warning-alert"
            message="Just to let you know this might be a problem"
            action={<ArrowRightOutlined style={{ color: "#F79009" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#B54708"
                borderColor="#DC6803"
                label="Warning"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#B54708",
              padding: 4,
              borderColor: "#DC6803",
              width: "360px",
              backgroundColor: "white",
            }}
          />
          <Alert
            type="warning"
            className="warning-alert"
            message="Just to let you know this might be a problem"
            action={<ArrowRightOutlined style={{ color: "#F79009" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#B54708"
                borderColor="#DC6803"
                label="Warning"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#B54708",
              padding: 4,
              borderColor: "#DC6803",
              width: "400px",
              backgroundColor: "white",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <Alert
              type="warning"
              className="warning-alert"
              message="Just to let you know this might be a problem"
              action={
                <AlertTag
                  fontSize="12px"
                  backgroundColor="#FFFFFF"
                  color="#B54708"
                  borderColor="#DC6803"
                  label="Warning"
                  rightIcon={<ArrowRightOutlined />}
                />
              }
              style={{
                borderRadius: "10px",
                gap: "5px",
                fontWeight: 500,
                fontSize: "12px",
                color: "#B54708",
                padding: 4,
                borderColor: "#DC6803",
                width: "360px",
                backgroundColor: "white",
              }}
            />
            <Alert
              type="warning"
              className="warning-alert"
              message="Just to let you know this might be a problem"
              action={
                <AlertTag
                  fontSize="14px"
                  backgroundColor="#FFFFFF"
                  color="#B54708"
                  borderColor="#DC6803"
                  label="Warning"
                  rightIcon={<ArrowRightOutlined />}
                />
              }
              style={{
                borderRadius: "10px",
                gap: "5px",
                fontWeight: 500,
                fontSize: "14px",
                color: "#B54708",
                padding: 4,
                borderColor: "#DC6803",
                width: "400px",
                backgroundColor: "white",
              }}
            />
          </div>
        </div>
        <div
          className="succes alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            type="success"
            className="success-alert"
            message="You've updated your profile and details"
            action={<ArrowRightOutlined style={{ color: "#17B26A" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#067647"
                borderColor="#ABEFC6"
                label="Success"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#067647",
              padding: 4,
            }}
          />
          <Alert
            type="success"
            className="success-alert"
            message="You've updated your profile and details"
            action={<ArrowRightOutlined style={{ color: "#17B26A" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#067647"
                borderColor="#ABEFC6"
                label="Success"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#067647",
              padding: 4,
            }}
          />
          <Alert
            type="success"
            className="success-alert"
            message="You've updated your profile and details"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#067647"
                borderColor="#ABEFC6"
                label="Success"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#067647",
              padding: 4,
            }}
          />
          <Alert
            type="success"
            className="success-alert"
            message="You've updated your profile and details"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#067647"
                borderColor="#ABEFC6"
                label="Success"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#067647",
              padding: 4,
            }}
          />
        </div>
        <div
          className="dark tag success alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            type="success"
            className="success-alert"
            message="You've updated your profile and details"
            action={<ArrowRightOutlined style={{ color: "#17B26A" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#079455"
                color="#FFFFFF"
                borderColor="#ABEFC6"
                label="Success"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#067647",
              padding: 4,
            }}
          />
          <Alert
            type="success"
            className="success-alert"
            message="You've updated your profile and details"
            action={<ArrowRightOutlined style={{ color: "#17B26A" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#079455"
                color="#FFFFFF"
                borderColor="#ABEFC6"
                label="Success"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#067647",
              padding: 4,
            }}
          />
          <Alert
            type="success"
            className="success-alert"
            message="You've updated your profile and details"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#079455"
                color="#FFFFFF"
                borderColor="#ABEFC6"
                label="Success"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#067647",
              padding: 4,
            }}
          />
          <Alert
            type="success"
            className="success-alert"
            message="You've updated your profile and details"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#079455"
                color="#FFFFFF"
                borderColor="#ABEFC6"
                label="Success"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#067647",
              padding: 4,
            }}
          />
        </div>
        <div
          className="light tag success alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            type="success"
            className="success-alert"
            message="You've updated your profile and details"
            action={<ArrowRightOutlined style={{ color: "#17B26A" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#067647"
                borderColor="#079455"
                label="Success"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#067647",
              padding: 4,
              borderColor: "#079455",
              backgroundColor: "white",
            }}
          />
          <Alert
            type="success"
            className="success-alert"
            message="You've updated your profile and details"
            action={<ArrowRightOutlined style={{ color: "#17B26A" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#067647"
                borderColor="#079455"
                label="Success"
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#067647",
              padding: 4,
              borderColor: "#079455",
              backgroundColor: "white",
            }}
          />
          <Alert
            type="success"
            className="success-alert"
            message="You've updated your profile and details"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#067647"
                borderColor="#079455"
                label="Success"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#067647",
              padding: 4,
              borderColor: "#079455",
              backgroundColor: "white",
            }}
          />
          <Alert
            type="success"
            className="success-alert"
            message="You've updated your profile and details"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#067647"
                borderColor="#079455"
                label="Success"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#067647",
              padding: 4,
              borderColor: "#079455",
              backgroundColor: "white",
            }}
          />
        </div>
        <div
          className="transparent alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            className="transparent-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="New Feature"
                leftIcon={<SmallDot fillColor="#17B26A" />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Alert
            className="transparent-alert"
            message="You've updated your profile and details"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="New Feature"
                leftIcon={<SmallDot fillColor="#17B26A" />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Alert
            className="transparent-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="New Feature"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            showIcon
            icon={<SmallDot fillColor="#17B26A" />}
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Alert
            className="transparent-alert"
            message="You've updated your profile and details"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="New Feature"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            showIcon
            icon={<SmallDot fillColor="#17B26A" />}
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
        </div>
        <div
          className="transparent alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            className="transparent-alert"
            message="We've just released a new feature"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="New Feature"
                leftIcon={<SmallDot fillColor="#9E77ED" />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Alert
            className="transparent-alert"
            message="You've updated your profile and details"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="New Feature"
                leftIcon={<SmallDot fillColor="#9E77ED" />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Alert
            className="transparent-alert"
            message="We've just released a new feature"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="New Feature"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            showIcon
            icon={<SmallDot fillColor="#9E77ED" />}
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Alert
            className="transparent-alert"
            message="You've updated your profile and details"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="New Feature"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            showIcon
            icon={<SmallDot fillColor="#9E77ED" />}
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
        </div>
        <div
          className="transparent alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            className="transparent-alert"
            message="There was a problem with that action"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="Error"
                leftIcon={<SmallDot fillColor="#F04438" />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Alert
            className="transparent-alert"
            message="There was a problem with that action"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="Error"
                leftIcon={<SmallDot fillColor="#F04438" />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Alert
            className="transparent-alert"
            message="There was a problem with that action"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="Error"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            showIcon
            icon={<SmallDot fillColor="#F04438" />}
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Alert
            className="transparent-alert"
            message="There was a problem with that action"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="Error"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            showIcon
            icon={<SmallDot fillColor="#F04438" />}
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
        </div>
        <div
          className="transparent alert"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            className="transparent-alert"
            message="Just to let you know this might be a problem"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="Warning"
                leftIcon={<SmallDot fillColor="#F79009" />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
              width: "380px",
            }}
          />
          <Alert
            className="transparent-alert"
            message="Just to let you know this might be a problem"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="Warning"
                leftIcon={<SmallDot fillColor="#F79009" />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
              width: "420px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <Alert
              className="transparent-alert"
              message="Just to let you know this might be a problem"
              action={
                <AlertTag
                  fontSize="12px"
                  backgroundColor="#FFFFFF"
                  color="#344054"
                  borderColor="#D0D5DD"
                  label="Warning"
                  rightIcon={<ArrowRightOutlined />}
                />
              }
              showIcon
              icon={<SmallDot fillColor="#F79009" />}
              style={{
                borderRadius: "10px",
                gap: "5px",
                fontWeight: 500,
                fontSize: "12px",
                color: "#344054",
                padding: 4,
                borderColor: "#D0D5DD",
                backgroundColor: "#FFFFFF",
              }}
            />
            <Alert
              className="transparent-alert"
              message="Just to let you know this might be a problem"
              action={
                <AlertTag
                  fontSize="14px"
                  backgroundColor="#FFFFFF"
                  color="#344054"
                  borderColor="#D0D5DD"
                  label="Warning"
                  rightIcon={<ArrowRightOutlined />}
                />
              }
              showIcon
              icon={<SmallDot fillColor="#F79009" />}
              style={{
                borderRadius: "10px",
                gap: "5px",
                fontWeight: 500,
                fontSize: "14px",
                color: "#344054",
                padding: 4,
                borderColor: "#D0D5DD",
                backgroundColor: "#FFFFFF",
              }}
            />
          </div>
        </div>
        <div
          className="transparent alert"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Alert
            className="transparent-alert"
            message="You've updated your profilw and details"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="Success"
                leftIcon={<SmallDot fillColor="#17B26A" />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Alert
            className="transparent-alert"
            message="You've updated your profilw and details"
            action={<ArrowRightOutlined style={{ color: "#667085" }} />}
            showIcon
            icon={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="Success"
                leftIcon={<SmallDot fillColor="#17B26A" />}
              />
            }
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Alert
            className="transparent-alert"
            message="You've updated your profilw and details"
            action={
              <AlertTag
                fontSize="12px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="Success"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            showIcon
            icon={<SmallDot fillColor="#17B26A" />}
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Alert
            className="transparent-alert"
            message="You've updated your profilw and details"
            action={
              <AlertTag
                fontSize="14px"
                backgroundColor="#FFFFFF"
                color="#344054"
                borderColor="#D0D5DD"
                label="Success"
                rightIcon={<ArrowRightOutlined />}
              />
            }
            showIcon
            icon={<SmallDot fillColor="#17B26A" />}
            style={{
              borderRadius: "10px",
              gap: "5px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#344054",
              padding: 4,
              borderColor: "#D0D5DD",
              backgroundColor: "#FFFFFF",
            }}
          />
        </div>
      </div>
      <div className="Toggles">
        <h2>
          <strong>Toggles:</strong>
        </h2>
        <div
          className="default-toggle"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Switch />
          <Switch defaultChecked />
          <Switch disabled />
          <Switch defaultChecked disabled />
          <div
            className="text-toggle"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <Switch checked />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text
                style={{ fontSize: "14px", color: "#344054", fontWeight: 500 }}
              >
                Toggle Title
              </text>
              <text
                style={{ fontSize: "14px", color: "#475467", fontWeight: 400 }}
              >
                Toggle support content.
              </text>
            </div>
          </div>
          <div
            className="text-toggle-disabled"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <Switch />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text
                style={{ fontSize: "14px", color: "#344054", fontWeight: 500 }}
              >
                Toggle Title
              </text>
              <text
                style={{ fontSize: "14px", color: "#475467", fontWeight: 400 }}
              >
                Toggle support content.
              </text>
            </div>
          </div>
        </div>
      </div>
      <div className="Checkbox">
        <h2>
          <strong>Checkbox:</strong>
        </h2>
        <div
          className="checkbox"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Checkbox />
          <Checkbox checked />
          <Checkbox disabled />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <Checkbox />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text
                style={{ fontSize: "14px", color: "#344054", fontWeight: 500 }}
              >
                Checkbox Title
              </text>
              <text
                style={{ fontSize: "14px", color: "#475467", fontWeight: 400 }}
              >
                Checkbox support content.
              </text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <Checkbox checked />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text
                style={{ fontSize: "14px", color: "#344054", fontWeight: 500 }}
              >
                Checkbox Title
              </text>
              <text
                style={{ fontSize: "14px", color: "#475467", fontWeight: 400 }}
              >
                Checkbox support content.
              </text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <Checkbox disabled />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text
                style={{ fontSize: "14px", color: "#344054", fontWeight: 500 }}
              >
                Checkbox Title
              </text>
              <text
                style={{ fontSize: "14px", color: "#475467", fontWeight: 400 }}
              >
                Checkbox support content.
              </text>
            </div>
          </div>
        </div>
      </div>
      <div className="Radio">
        <h2>
          <strong>Radio:</strong>
        </h2>
        <div
          className="radio"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Radio />
          <Radio checked />
          <Radio disabled />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <Radio />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text
                style={{ fontSize: "14px", color: "#344054", fontWeight: 500 }}
              >
                Radio Title
              </text>
              <text
                style={{ fontSize: "14px", color: "#475467", fontWeight: 400 }}
              >
                Radio support content.
              </text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <Radio checked />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text
                style={{ fontSize: "14px", color: "#344054", fontWeight: 500 }}
              >
                Radio Title
              </text>
              <text
                style={{ fontSize: "14px", color: "#475467", fontWeight: 400 }}
              >
                Radio support content.
              </text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <Radio disabled />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text
                style={{ fontSize: "14px", color: "#344054", fontWeight: 500 }}
              >
                Radio Title
              </text>
              <text
                style={{ fontSize: "14px", color: "#475467", fontWeight: 400 }}
              >
                Radio support content.
              </text>
            </div>
          </div>
        </div>
      </div>
      <div className="Switch">
        <h2>
          <strong>Switches:</strong>
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Radio.Group defaultValue="a" size="large">
            <Radio.Button
              value="a"
              className="button-group"
              style={{ color: "#344054" }}
            >
              Text
            </Radio.Button>
            <Radio.Button
              value="b"
              className="button-group"
              style={{ color: "#344054" }}
            >
              Text
            </Radio.Button>
            <Radio.Button
              value="c"
              className="button-group"
              style={{ color: "#344054" }}
            >
              Text
            </Radio.Button>
          </Radio.Group>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Radio.Group disabled defaultValue="a" size="large">
            <Radio.Button
              value="a"
              className="button-group"
              style={{ color: "#344054" }}
            >
              Text
            </Radio.Button>
            <Radio.Button
              value="b"
              className="button-group"
              style={{ color: "#344054" }}
            >
              Text
            </Radio.Button>
            <Radio.Button
              value="c"
              className="button-group"
              style={{ color: "#344054" }}
            >
              Text
            </Radio.Button>
          </Radio.Group>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Radio.Group defaultValue="a" size="large">
            <Radio.Button
              value="a"
              className="button-group"
              style={{ color: "#344054" }}
            >
              <ArrowLeftOutlined style={{ color: "#667085" }} />
            </Radio.Button>
            <Radio.Button
              value="b"
              className="button-group"
              style={{ color: "#344054" }}
            >
              <PlusOutlined style={{ color: "#667085" }} />
            </Radio.Button>
            <Radio.Button
              value="c"
              className="button-group"
              style={{ color: "#344054" }}
            >
              {" "}
              <ArrowRightOutlined style={{ color: "#667085" }} />
            </Radio.Button>
          </Radio.Group>
        </div>
      </div>
      <div className="Tooltip">
        <h2>
          <strong>Tooltip:</strong>
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "200px",
            marginTop: "50px",
            marginLeft: "50px",
          }}
        >
          <Tooltip
            title="This is a tooltip"
            open
            color="#0D231F"
            overlayInnerStyle={{ fontWeight: 600, fontSize: "12px" }}
            arrow={false}
          >
            {" "}
            info
          </Tooltip>
          <Tooltip
            title="This is a tooltip"
            open
            color="#0D231F"
            overlayInnerStyle={{ fontWeight: 600, fontSize: "12px" }}
            arrow={true}
            placement="bottom"
          >
            info
          </Tooltip>
          <Tooltip
            title="This is a tooltip"
            open
            color="#0D231F"
            overlayInnerStyle={{ fontWeight: 600, fontSize: "12px" }}
            arrow={true}
            placement="bottomLeft"
          >
            info
          </Tooltip>
          <Tooltip
            title="This is a tooltip"
            open
            color="#0D231F"
            overlayInnerStyle={{ fontWeight: 600, fontSize: "12px" }}
            arrow={true}
            placement="bottomRight"
          >
            info
          </Tooltip>
          <Tooltip
            title="This is a tooltip"
            open
            color="#0D231F"
            overlayInnerStyle={{ fontWeight: 600, fontSize: "12px" }}
            arrow={true}
            placement="top"
          >
            info
          </Tooltip>
          <Tooltip
            title="This is a tooltip"
            open
            color="#0D231F"
            overlayInnerStyle={{ fontWeight: 600, fontSize: "12px" }}
            arrow={true}
            placement="left"
          >
            info
          </Tooltip>
          <Tooltip
            title="This is a tooltip"
            open
            color="#0D231F"
            overlayInnerStyle={{ fontWeight: 600, fontSize: "12px" }}
            arrow={true}
            placement="right"
          >
            info
          </Tooltip>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "200px",
            marginTop: "100px",
            marginLeft: "50px",
          }}
        >
          <Tooltip
            title="This is a tooltip"
            open
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={false}
          >
            {" "}
            info
          </Tooltip>
          <Tooltip
            title="This is a tooltip"
            open
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={true}
            placement="bottom"
          >
            info
          </Tooltip>
          <Tooltip
            title="This is a tooltip"
            open
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={true}
            placement="bottomLeft"
          >
            info
          </Tooltip>
          <Tooltip
            title="This is a tooltip"
            open
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={true}
            placement="bottomRight"
          >
            info
          </Tooltip>
          <Tooltip
            title="This is a tooltip"
            open
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={true}
            placement="top"
          >
            info
          </Tooltip>
          <Tooltip
            title="This is a tooltip"
            open
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={true}
            placement="left"
          >
            info
          </Tooltip>
          <Tooltip
            title="This is a tooltip"
            open
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={true}
            placement="right"
          >
            info
          </Tooltip>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "600px",
            marginTop: "200px",
            marginLeft: "100px",
          }}
        >
          <Tooltip
            autoAdjustOverflow={false}
            title={
              <>
                <text style={{ fontSize: "12px", fontWeight: 600 }}>
                  This is a tooltip
                </text>
                <br></br>

                <text style={{ fontSize: "12px", fontWeight: 500 }}>
                  Tooltips are used to describe or identify an element. In most
                  scenarios, tooltips help the user understand meaning, function
                  or alt-text.
                </text>
              </>
            }
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={false}
          >
            {" "}
            info
          </Tooltip>
          <Tooltip
            title={
              <>
                <text style={{ fontSize: "12px", fontWeight: 600 }}>
                  This is a tooltip
                </text>
                <br></br>

                <text style={{ fontSize: "12px", fontWeight: 500 }}>
                  Tooltips are used to describe or identify an element. In most
                  scenarios, tooltips help the user understand meaning, function
                  or alt-text.
                </text>
              </>
            }
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={true}
            placement="bottom"
          >
            info
          </Tooltip>
          <Tooltip
            title={
              <>
                <text style={{ fontSize: "12px", fontWeight: 600 }}>
                  This is a tooltip
                </text>
                <br></br>

                <text style={{ fontSize: "12px", fontWeight: 500 }}>
                  Tooltips are used to describe or identify an element. In most
                  scenarios, tooltips help the user understand meaning, function
                  or alt-text.
                </text>
              </>
            }
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={true}
            placement="bottomRight"
          >
            info
          </Tooltip>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "600px",
            marginTop: "300px",
            marginLeft: "50px",
          }}
        >
          <Tooltip
            title={
              <>
                <text style={{ fontSize: "12px", fontWeight: 600 }}>
                  This is a tooltip
                </text>
                <br></br>

                <text style={{ fontSize: "12px", fontWeight: 500 }}>
                  Tooltips are used to describe or identify an element. In most
                  scenarios, tooltips help the user understand meaning, function
                  or alt-text.
                </text>
              </>
            }
            color="#0D231F"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "white",
            }}
            arrow={false}
          >
            {" "}
            info
          </Tooltip>
          <Tooltip
            title={
              <>
                <text style={{ fontSize: "12px", fontWeight: 600 }}>
                  This is a tooltip
                </text>
                <br></br>

                <text style={{ fontSize: "12px", fontWeight: 500 }}>
                  Tooltips are used to describe or identify an element. In most
                  scenarios, tooltips help the user understand meaning, function
                  or alt-text.
                </text>
              </>
            }
            color="#0D231F"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "white",
            }}
            arrow={true}
            placement="bottom"
          >
            info
          </Tooltip>
          <Tooltip
            title={
              <>
                <text style={{ fontSize: "12px", fontWeight: 600 }}>
                  This is a tooltip
                </text>
                <br></br>

                <text style={{ fontSize: "12px", fontWeight: 500 }}>
                  Tooltips are used to describe or identify an element. In most
                  scenarios, tooltips help the user understand meaning, function
                  or alt-text.
                </text>
              </>
            }
            color="#0D231F"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "white",
            }}
            arrow={true}
            placement="bottom"
          >
            info
          </Tooltip>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "600px",
            marginTop: "200px",
            marginLeft: "100px",
          }}
        >
          <Tooltip
            autoAdjustOverflow={false}
            title={
              <>
                <text style={{ fontSize: "12px", fontWeight: 600 }}>
                  This is a tooltip
                </text>
                <br></br>

                <text style={{ fontSize: "12px", fontWeight: 500 }}>
                  Tooltips are used to describe or identify an element. In most
                  scenarios, tooltips help the user understand meaning, function
                  or alt-text.
                </text>
              </>
            }
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={false}
          >
            <span>
              <HelpCircle />
            </span>
          </Tooltip>
          <Tooltip
            title={
              <>
                <text style={{ fontSize: "12px", fontWeight: 600 }}>
                  This is a tooltip
                </text>
                <br></br>

                <text style={{ fontSize: "12px", fontWeight: 500 }}>
                  Tooltips are used to describe or identify an element. In most
                  scenarios, tooltips help the user understand meaning, function
                  or alt-text.
                </text>
              </>
            }
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={true}
            placement="bottom"
          >
            <span>
              <HelpCircle />
            </span>
          </Tooltip>
          <Tooltip
            title={
              <>
                <text style={{ fontSize: "12px", fontWeight: 600 }}>
                  This is a tooltip
                </text>
                <br></br>

                <text style={{ fontSize: "12px", fontWeight: 500 }}>
                  Tooltips are used to describe or identify an element. In most
                  scenarios, tooltips help the user understand meaning, function
                  or alt-text.
                </text>
              </>
            }
            color="white"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "black",
            }}
            overlayStyle={{ boxShadow: " 0px 4px 6px -2px #10182808" }}
            arrow={true}
            placement="bottomRight"
          >
            <span>
              <HelpCircle />
            </span>
          </Tooltip>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "600px",
            marginTop: "300px",
            marginLeft: "50px",
          }}
        >
          <Tooltip
            title={
              <>
                <text style={{ fontSize: "12px", fontWeight: 600 }}>
                  This is a tooltip
                </text>
                <br></br>

                <text style={{ fontSize: "12px", fontWeight: 500 }}>
                  Tooltips are used to describe or identify an element. In most
                  scenarios, tooltips help the user understand meaning, function
                  or alt-text.
                </text>
              </>
            }
            color="#0D231F"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "white",
            }}
            arrow={false}
          >
            {" "}
            <span>
              <HelpCircle />
            </span>
          </Tooltip>
          <Tooltip
            title={
              <>
                <text style={{ fontSize: "12px", fontWeight: 600 }}>
                  This is a tooltip
                </text>
                <br></br>

                <text style={{ fontSize: "12px", fontWeight: 500 }}>
                  Tooltips are used to describe or identify an element. In most
                  scenarios, tooltips help the user understand meaning, function
                  or alt-text.
                </text>
              </>
            }
            color="#0D231F"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "white",
            }}
            arrow={true}
            placement="bottom"
          >
            <span>
              <HelpCircle />
            </span>
          </Tooltip>
          <Tooltip
            title={
              <>
                <text style={{ fontSize: "12px", fontWeight: 600 }}>
                  This is a tooltip
                </text>
                <br></br>

                <text style={{ fontSize: "12px", fontWeight: 500 }}>
                  Tooltips are used to describe or identify an element. In most
                  scenarios, tooltips help the user understand meaning, function
                  or alt-text.
                </text>
              </>
            }
            color="#0D231F"
            overlayInnerStyle={{
              fontWeight: 600,
              fontSize: "12px",
              color: "white",
            }}
            arrow={true}
            placement="bottom"
          >
            <span>
              <HelpCircle />
            </span>
          </Tooltip>
        </div>
      </div>
      <div className="Date Picker">
        <h2>
          <strong>Date Picker:</strong>
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Space direction="vertical" size={12}>
            <RangePicker
              showTime
              locale={brazilianLocale}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "20px",
              }}
              renderExtraFooter={() => (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      gap: "30px",
                      paddingBottom: "10px",
                    }}
                  >
                    <Button type="text">Hoje</Button>

                    <Button type="text">Esta Semana</Button>
                    <Button type="text">Este Mês</Button>
                    <Button type="text">Este Ano</Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      gap: "5px",
                    }}
                  >
                    <Button type="text">Ontem</Button>
                    <Button type="text">Semana Passada</Button>

                    <Button type="text">Mês Passado</Button>

                    <Button type="text">Ano Passado</Button>
                  </div>
                </>
              )}
            />
          </Space>
        </div>
      </div>
      <div className="Select">
        <h2>
          <strong>Select:</strong>
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Select
            placeholder="Select team member"
            style={{ width: 200 }}
            defaultValue="Item1"
            options={[
              { value: "Item1", label: "Item 1" },
              { value: "Item2", label: "Item 2" },
              { value: "Item3", label: "Item 3" },
              { value: "Item4", label: "Item 4" },
            ]}
            optionLabelProp="label"
            dropdownRender={(menu) => <div>{menu}</div>}
            menuItemSelectedIcon={<CheckOutlined />}
            listHeight={256}
            dropdownStyle={{
              fontWeight: 500,
            }}
          />

          <Select
            placeholder="Select team member"
            style={{ width: 200 }}
            defaultValue="Item1"
            options={[
              {
                value: "Item1",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Sparkle fillColor="black" />
                      <text>Item 1</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item2",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Sparkle fillColor="black" />
                      <text>Item 2</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item3",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Sparkle fillColor="black" />
                      <text>Item 3</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item4",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Sparkle fillColor="black" />
                      <text>Item 4</text>
                    </div>
                  </>
                ),
              },
            ]}
            optionLabelProp="value"
            dropdownRender={(menu) => <div>{menu}</div>}
            menuItemSelectedIcon={<CheckOutlined />}
            listHeight={256}
            dropdownStyle={{
              fontWeight: 500,
            }}
          />
          <Select
            placeholder="Select team member"
            style={{ width: 200 }}
            defaultValue="Item1"
            options={[
              {
                value: "Item1",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Avatar size={20}>
                        <UserOutlined />
                      </Avatar>
                      <text>Item 1</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item2",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Avatar size={20}>
                        <UserOutlined />
                      </Avatar>
                      <text>Item 2</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item3",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Avatar size={20}>
                        <UserOutlined />
                      </Avatar>
                      <text>Item 3</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item4",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Avatar size={20}>
                        <UserOutlined />
                      </Avatar>
                      <text>Item 4</text>
                    </div>
                  </>
                ),
              },
            ]}
            optionLabelProp="label"
            dropdownRender={(menu) => <div>{menu}</div>}
            menuItemSelectedIcon={<CheckOutlined />}
            listHeight={256}
            dropdownStyle={{
              fontWeight: 500,
            }}
          />
          <Select
            placeholder="Select team member"
            style={{ width: 200 }}
            defaultValue="Item1"
            options={[
              {
                value: "Item1",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Dot fillColor="#17B26A" />
                      <text>Item 1</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item2",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Dot fillColor="#17B26A" />
                      <text>Item 2</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item3",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Dot fillColor="#17B26A" />
                      <text>Item 3</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item4",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Dot fillColor="#17B26A" />
                      <text>Item 4</text>
                    </div>
                  </>
                ),
              },
            ]}
            optionLabelProp="label"
            dropdownRender={(menu) => <div>{menu}</div>}
            menuItemSelectedIcon={<CheckOutlined />}
            listHeight={256}
            dropdownStyle={{
              fontWeight: 500,
            }}
          />
          <Select
            placeholder="Select team member"
            style={{ width: 200 }}
            defaultValue="Item1"
            options={[
              {
                value: "Item1",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Avatar size={20}>
                        <UserOutlined />
                      </Avatar>
                      <text>Item 1</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item2",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Avatar size={20}>
                        <UserOutlined />
                      </Avatar>
                      <text>Item 2</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item3",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Avatar size={20}>
                        <UserOutlined />
                      </Avatar>
                      <text>Item 3</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item4",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Avatar size={20}>
                        <UserOutlined />
                      </Avatar>
                      <text>Item 4</text>
                    </div>
                  </>
                ),
              },
            ]}
            // onSearch={}
            suffixIcon={<Search />}
            optionLabelProp="value"
            showSearch
            dropdownRender={(menu) => <div>{menu}</div>}
            menuItemSelectedIcon={<CheckOutlined />}
            listHeight={256}
            dropdownStyle={{
              fontWeight: 500,
            }}
          />
          <Select
            placeholder="Select team member"
            style={{ width: 200 }}
            defaultValue="Item1"
            options={[
              {
                value: "Item1",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Avatar size={20}>
                        <UserOutlined />
                      </Avatar>
                      <text>Item 1</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item2",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Avatar size={20}>
                        <UserOutlined />
                      </Avatar>
                      <text>Item 2</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item3",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Avatar size={20}>
                        <UserOutlined />
                      </Avatar>
                      <text>Item 3</text>
                    </div>
                  </>
                ),
              },
              {
                value: "Item4",
                label: (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Avatar size={20}>
                        <UserOutlined />
                      </Avatar>
                      <text>Item 4</text>
                    </div>
                  </>
                ),
              },
            ]}
            // onSearch={}
            mode="multiple"
            suffixIcon={<Search />}
            optionLabelProp="value"
            showSearch
            dropdownRender={(menu) => <div>{menu}</div>}
            menuItemSelectedIcon={<CheckOutlined />}
            listHeight={256}
            dropdownStyle={{
              fontWeight: 500,
            }}
          />
        </div>
      </div>
      <div className="Modal">
        <h2>
          <strong>Modal</strong>
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Space>
            <Button type="primary" onClick={showModal}>
              Open Modal
            </Button>
          </Space>
          <Modal
            open={open}
            title="Modal_Title"
            keyboard
            onOk={handleOk}
            width={600}
            onCancel={handleCancel}
            footer={(_, { OkBtn, CancelBtn }) => (
              <>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      justifyItems: "space-between",
                      gap: "5px",
                    }}
                  >
                    <NativeButton type="default">esc</NativeButton>
                    <text style={{ color: "#667085", fontWeight: 500 }}>
                      {" "}
                      para fechar
                    </text>
                  </div>
                  <NativeButton
                    type="default"
                    leftIcon={<Sparkle fillColor="black" />}
                    rightIcon={<Sparkle fillColor="black" />}
                  >
                    Button CTA
                  </NativeButton>
                  <NativeButton
                    type="primary"
                    leftIcon={<Sparkle fillColor="white" />}
                    rightIcon={<Sparkle fillColor="white" />}
                  >
                    Button CTA
                  </NativeButton>
                </div>
              </>
            )}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
