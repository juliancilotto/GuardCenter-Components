import React from "react";
import { Flex } from "antd";
import { ButtonLayout } from "../../buttonLayout";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";

export const DisableDefaultButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconDisableDefaultButton />
    <OnlyIconDisabledDefaultButton />
    <IconDisabledDefaultButton />
  </Flex>
);

export const DoubleIconDisableDefaultButton: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <ButtonLayout
      type="primary"
      leftIcon={<Sparkle fillColor="white" isDisabled />}
      rightIcon={<Sparkle fillColor="white" isDisabled />}
      isDisabled
      isDefault
    >
      Button CTA
    </ButtonLayout>
  </Flex>
);

export const OnlyIconDisabledDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <ButtonLayout
      type="primary"
      leftIcon={<Dot fillColor="white" isDisabled />}
      isDisabled
      isDefault
    >
      Button CTA
    </ButtonLayout>
  </Flex>
);

export const IconDisabledDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <ButtonLayout
      isDisabled
      isDefault
      type="primary"
      leftIcon={<Sparkle fillColor="white" isDisabled />}
    />
  </Flex>
);
