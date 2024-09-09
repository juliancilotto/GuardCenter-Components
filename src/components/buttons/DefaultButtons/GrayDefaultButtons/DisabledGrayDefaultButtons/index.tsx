import React from "react";
import { Flex } from "antd";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import { DefaultButtonLayout } from "../../defaultButtonLayout";

export const DisableGrayDefaultButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconDisableGrayDefaultButton />
    <OnlyIconDisabledGrayDefaultButton />
    <IconDisabledGrayDefaultButton />
  </Flex>
);

export const DoubleIconDisableGrayDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <DefaultButtonLayout
      type="default"
      leftIcon={<Sparkle fillColor="white" isDisabled />}
      rightIcon={<Sparkle fillColor="white" isDisabled />}
      isDisabled
      isDefault
    >
      Button CTA
    </DefaultButtonLayout>
  </Flex>
);

export const OnlyIconDisabledGrayDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <DefaultButtonLayout
      type="default"
      leftIcon={<Dot fillColor="white" isDisabled />}
      isDisabled
      isDefault
    >
      Button CTA
    </DefaultButtonLayout>
  </Flex>
);

export const IconDisabledGrayDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <DefaultButtonLayout
      isDisabled
      isDefault
      type="default"
      leftIcon={<Sparkle fillColor="white" isDisabled />}
    />
  </Flex>
);
