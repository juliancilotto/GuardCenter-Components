import React from "react";
import { Flex } from "antd";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import { PrimaryButtonLayout } from "../primaryButtonLayout";

export const PrimaryButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconPrimaryButton />
    <OnlyIconPrimaryButton />
    <IconPrimaryButton />
  </Flex>
);

export const DoubleIconPrimaryButton: React.FC = () => (
  <Flex gap="small" vertical>
    <PrimaryButtonLayout
      type="primary"
      leftIcon={<Sparkle fillColor="white" />}
      rightIcon={<Sparkle fillColor="white" />}
    >
      Button CTA
    </PrimaryButtonLayout>
  </Flex>
);

export const OnlyIconPrimaryButton: React.FC = () => (
  <Flex gap="small" vertical>
    <PrimaryButtonLayout type="primary" leftIcon={<Dot fillColor="white" />}>
      Button CTA
    </PrimaryButtonLayout>
  </Flex>
);

export const IconPrimaryButton: React.FC = () => (
  <Flex gap="small" vertical>
    <PrimaryButtonLayout
      type="primary"
      leftIcon={<Sparkle fillColor="white" />}
    />
  </Flex>
);
