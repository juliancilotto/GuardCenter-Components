import React from "react";
import { NativeButton } from "@/components/Button/nativeButton";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";

const Home: React.FC = () => {
  return (
    <div style={{ marginLeft: 10 }}>
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
    </div>
  );
};

export default Home;
