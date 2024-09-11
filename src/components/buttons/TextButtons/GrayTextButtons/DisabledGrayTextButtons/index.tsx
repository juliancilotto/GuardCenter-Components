import React from "react";
import { Flex } from "antd";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import { TextButtonLayout } from "../../textButtonLayout";

export const DisabledGrayTextButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconDisabledGrayTextButton />
    <OnlyIconDisabledGrayTexttButton />
    <IconDisabledGrayTextButton />
  </Flex>
);

export const DoubleIconDisabledGrayTextButton: React.FC = () => (
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

export const OnlyIconDisabledGrayTexttButton: React.FC = () => (
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

export const IconDisabledGrayTextButton: React.FC = () => (
  <Flex gap="small" vertical>
    <TextButtonLayout
      type="text"
      leftIcon={<Sparkle fillColor="#98A2B3" />}
      isDisabled
    />
  </Flex>
);
