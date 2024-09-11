import React from "react";
import { Flex } from "antd";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import { TextButtonLayout } from "../textButtonLayout";

export const GreenTextButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconGreenTextButton />
    <OnlyIconGreenTexttButton />
    <IconGreenTextButton />
  </Flex>
);

export const DoubleIconGreenTextButton: React.FC = () => (
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

export const OnlyIconGreenTexttButton: React.FC = () => (
  <Flex gap="small" vertical>
    <TextButtonLayout type="text" leftIcon={<Dot fillColor="green" />}>
      Button CTA
    </TextButtonLayout>
  </Flex>
);

export const IconGreenTextButton: React.FC = () => (
  <Flex gap="small" vertical>
    <TextButtonLayout type="text" leftIcon={<Sparkle fillColor="black" />} />
  </Flex>
);
