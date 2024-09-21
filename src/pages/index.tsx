import React, { useState } from "react";
import { NativeButton } from "@/components/Button/nativeButton";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import { Button, Input, InputNumber, Select, SelectProps, Space } from "antd";
import { InfoCircle } from "@/assets/icons/InfoCircle";
import { ExclamationCircle } from "@/assets/icons/ExclamationCircle";
import InputMask from "react-input-mask";
import { Calendar } from "@/assets/icons/Calendar";
import { Payment } from "@/assets/icons/Payment";
import { Copy } from "@/assets/icons/Copy";
import TextArea from "antd/es/input/TextArea";

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

  return (
    <div style={{ marginLeft: 10, margin: 10 }}>
      <div className="Buttons">
        <h2>
          <strong>Buttons:</strong>
        </h2>
        <div>
          <div style={{ display: "flex", gap: "16px", marginTop: 5 }}>
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
          <div style={{ display: "flex", gap: "16px", marginTop: 5 }}>
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
          <div style={{ display: "flex", gap: "16px", marginTop: 5 }}>
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
          <div style={{ display: "flex", gap: "16px", marginTop: 5 }}>
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
          <div style={{ display: "flex", gap: "16px", marginTop: 5 }}>
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
          <div style={{ display: "flex", gap: "16px", marginTop: 5 }}>
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
          <div style={{ display: "flex", gap: "16px", marginTop: 5 }}>
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
          <div style={{ display: "flex", gap: "16px", marginTop: 5 }}>
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
          <div style={{ display: "flex", gap: "16px" }}>
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
          <div style={{ display: "flex", gap: "16px", marginTop: 5 }}>
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
            gap: "16px",
            marginTop: 5,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
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
              gap: "16px",
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
              gap: "16px",
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
              gap: "16px",
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
              gap: "16px",
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
              gap: "16px",
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
            gap: "16px",
            marginTop: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
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
              gap: "16px",
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
              gap: "16px",
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
              gap: "16px",
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
              gap: "16px",
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
            gap: "16px",
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
    </div>
  );
};

export default Home;
