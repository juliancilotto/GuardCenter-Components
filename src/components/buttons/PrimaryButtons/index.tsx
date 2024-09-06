import React from "react";
import { Flex } from "antd";
import { ButtonLayout } from "../buttonLayout";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";

export const PrimaryButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconPrimaryButton />
    <OnlyIconPrimaryButton />
    <IconPrimaryButton />
  </Flex>
);

export const DoubleIconPrimaryButton: React.FC = () => (
  <Flex gap="small" vertical>
    <ButtonLayout
      type="primary"
      leftIcon={<Sparkle fillColor="white" />}
      rightIcon={<Sparkle fillColor="white" />}
    >
      Button CTA
    </ButtonLayout>
  </Flex>
);

export const OnlyIconPrimaryButton: React.FC = () => (
  <Flex gap="small" vertical>
    <ButtonLayout type="primary" leftIcon={<Dot fillColor="white" />}>
      Button CTA
    </ButtonLayout>
  </Flex>
);

export const IconPrimaryButton: React.FC = () => (
  <Flex gap="small" vertical>
    <ButtonLayout type="primary" leftIcon={<Sparkle fillColor="white" />} />
  </Flex>
);
