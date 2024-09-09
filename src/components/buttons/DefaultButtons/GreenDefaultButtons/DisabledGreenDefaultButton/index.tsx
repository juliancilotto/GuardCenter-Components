import React from "react";
import { Flex } from "antd";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import { DefaultButtonLayout } from "../../defaultButtonLayout";

export const GreenDisableDefaultButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconDisableGreenDefaultButton />
    <OnlyIconDisabledGreenDefaultButton />
    <IconDisabledGreenDefaultButton />
  </Flex>
);

export const DoubleIconDisableGreenDefaultButton: React.FC = () => (
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

export const OnlyIconDisabledGreenDefaultButton: React.FC = () => (
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

export const IconDisabledGreenDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <DefaultButtonLayout
      isDisabled
      isDefault
      type="default"
      leftIcon={<Sparkle fillColor="white" isDisabled />}
    />
  </Flex>
);
