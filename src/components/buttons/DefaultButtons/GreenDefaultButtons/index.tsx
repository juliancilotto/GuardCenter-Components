import React from "react";
import { Flex } from "antd";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";
import { DefaultButtonLayout } from "../defaultButtonLayout";

export const GreenDefaultButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconGreenDefaultButton />
    <OnlyIconGreenDefaultButton />
    <IconGreenDefaultButton />
  </Flex>
);

export const DoubleIconGreenDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <DefaultButtonLayout
      type="default"
      leftIcon={<Sparkle fillColor="black" />}
      rightIcon={<Sparkle fillColor="black" />}
      isGreen
    >
      Button CTA
    </DefaultButtonLayout>
  </Flex>
);

export const OnlyIconGreenDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <DefaultButtonLayout
      type="default"
      isGreen
      leftIcon={<Dot fillColor="green" />}
    >
      Button CTA
    </DefaultButtonLayout>
  </Flex>
);

export const IconGreenDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <DefaultButtonLayout
      type="default"
      leftIcon={<Sparkle fillColor="black" />}
      isGreen
    />
  </Flex>
);
