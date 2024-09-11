import React from "react";
import { Flex } from "antd";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import { TextButtonLayout } from "../textButtonLayout";

export const GrayTextButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconGrayTextButton />
    <OnlyIconGrayTexttButton />
    <IconGrayTextButton />
  </Flex>
);

export const DoubleIconGrayTextButton: React.FC = () => (
  <Flex gap="small" vertical>
    <TextButtonLayout
      type="text"
      leftIcon={<Sparkle fillColor="black" />}
      rightIcon={<Sparkle fillColor="black" />}
    >
      Button CTA
    </TextButtonLayout>
  </Flex>
);

export const OnlyIconGrayTexttButton: React.FC = () => (
  <Flex gap="small" vertical>
    <TextButtonLayout type="text" leftIcon={<Dot fillColor="green" />}>
      Button CTA
    </TextButtonLayout>
  </Flex>
);

export const IconGrayTextButton: React.FC = () => (
  <Flex gap="small" vertical>
    <TextButtonLayout type="text" leftIcon={<Sparkle fillColor="black" />} />
  </Flex>
);
