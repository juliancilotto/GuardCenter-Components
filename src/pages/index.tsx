import React, { useState } from "react";
import { NativeButton } from "@/components/Button/nativeButton";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import {
  Avatar,
  Button,
  Flex,
  Input,
  InputNumber,
  Select,
  SelectProps,
  Slider,
  SliderSingleProps,
  Space,
  Tag,
} from "antd";
import { InfoCircle } from "@/assets/icons/InfoCircle";
import { ExclamationCircle } from "@/assets/icons/ExclamationCircle";
import InputMask from "react-input-mask";
import { Calendar } from "@/assets/icons/Calendar";
import { Payment } from "@/assets/icons/Payment";
import { Copy } from "@/assets/icons/Copy";
import TextArea from "antd/es/input/TextArea";
import { SmallDot } from "@/assets/icons/SmallDot";
import {
  ArrowRightOutlined,
  ArrowUpOutlined,
  CloseOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { ArrowRight } from "@/assets/icons/ArrowRight";
import Icon from "@ant-design/icons/lib/components/Icon";

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

  return (
    <div style={{ marginLeft: 10, margin: 10 }}>
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
      <div
        className="sliders"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          marginTop: 5,
        }}
      >
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
              }}
            />
            <Slider
              range
              defaultValue={[25, 78]}
              tooltip={{
                formatter,
                open: true,
                placement: "bottom",
              }}
            />
            <Slider
              range
              defaultValue={[65, 100]}
              tooltip={{
                formatter,
                open: true,
                placement: "bottom",
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
              }}
            />
            <Slider
              range
              defaultValue={[25, 78]}
              tooltip={{
                formatter,
                open: true,
                placement: "top",
              }}
            />
            <Slider
              range
              defaultValue={[65, 100]}
              tooltip={{
                formatter,
                open: true,
                placement: "top",
              }}
            />
          </div>
        </div>
      </div>
      <div className="Chips & Badges">
        <h2>
          <strong>Chips & Badges:</strong>
        </h2>
        <h3>
          <strong>Chips:</strong>
        </h3>
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
        <h3>
          <strong>Badges:</strong>
        </h3>
      </div>
    </div>
  );
};

export default Home;
