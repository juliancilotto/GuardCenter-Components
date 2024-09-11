import React from "react";
import { Flex } from "antd";
import { ButtonLayout } from "../../buttonLayout";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import { PrimaryButtonLayout } from "../primaryButtonLayout";

export const DisablePrimaryButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconDisablePrimarydButton />
    <OnlyIconDisabledPrimaryButton />
    <IconDisabledPrimaryButton />
  </Flex>
);

export const DoubleIconDisablePrimarydButton: React.FC = () => (
  <Flex gap="small" vertical>
    <PrimaryButtonLayout
      type="primary"
      leftIcon={<Sparkle fillColor="white" isDisabled />}
      rightIcon={<Sparkle fillColor="white" isDisabled />}
      isDisabled
    >
      Button CTA
    </PrimaryButtonLayout>
  </Flex>
);

export const OnlyIconDisabledPrimaryButton: React.FC = () => (
  <Flex gap="small" vertical>
    <PrimaryButtonLayout
      type="primary"
      leftIcon={<Dot fillColor="white" isDisabled />}
      isDisabled
    >
      Button CTA
    </PrimaryButtonLayout>
  </Flex>
);

export const IconDisabledPrimaryButton: React.FC = () => (
  <Flex gap="small" vertical>
    <PrimaryButtonLayout
      isDisabled
      type="primary"
      leftIcon={<Sparkle fillColor="white" isDisabled />}
    />
  </Flex>
);
