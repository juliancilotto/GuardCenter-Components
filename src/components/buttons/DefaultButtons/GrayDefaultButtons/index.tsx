import React from "react";
import { Flex } from "antd";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import { DefaultButtonLayout } from "../defaultButtonLayout";

export const GrayDefaultButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconGrayDefaultButton />
    <OnlyIconGrayDefaultButton />
    <IconGrayDefaultButton />
  </Flex>
);

export const DoubleIconGrayDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <DefaultButtonLayout
      type="default"
      leftIcon={<Sparkle fillColor="black" />}
      rightIcon={<Sparkle fillColor="black" />}
    >
      Button CTA
    </DefaultButtonLayout>
  </Flex>
);

export const OnlyIconGrayDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <DefaultButtonLayout type="default" leftIcon={<Dot fillColor="green" />}>
      Button CTA
    </DefaultButtonLayout>
  </Flex>
);

export const IconGrayDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <DefaultButtonLayout
      type="default"
      leftIcon={<Sparkle fillColor="black" />}
    />
  </Flex>
);
