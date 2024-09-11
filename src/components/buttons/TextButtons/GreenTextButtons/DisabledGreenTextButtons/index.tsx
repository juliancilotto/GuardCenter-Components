import React from "react";
import { Flex } from "antd";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import { TextButtonLayout } from "../../textButtonLayout";

export const DisabledGreenTextButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconDisabledGreenTextButton />
    <OnlyIconDisabledGreenTexttButton />
    <IconDisabledGreenTextButton />
  </Flex>
);

export const DoubleIconDisabledGreenTextButton: React.FC = () => (
  <Flex gap="small" vertical>
    <TextButtonLayout
      type="text"
      leftIcon={<Sparkle fillColor="#98A2B3" />}
      rightIcon={<Sparkle fillColor="#98A2B3" />}
      isDisabled
    >
      Button CTA
    </TextButtonLayout>
  </Flex>
);

export const OnlyIconDisabledGreenTexttButton: React.FC = () => (
  <Flex gap="small" vertical>
    <TextButtonLayout
      type="text"
      leftIcon={<Dot fillColor="#98A2B3" />}
      isDisabled
    >
      Button CTA
    </TextButtonLayout>
  </Flex>
);

export const IconDisabledGreenTextButton: React.FC = () => (
  <Flex gap="small" vertical>
    <TextButtonLayout
      type="text"
      leftIcon={<Sparkle fillColor="#98A2B3" />}
      isDisabled
    />
  </Flex>
);
