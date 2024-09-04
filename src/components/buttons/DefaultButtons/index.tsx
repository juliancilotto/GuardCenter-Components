import React from "react";
import { Flex } from "antd";
import { ButtonLayout } from "../buttonLayout";
import { Sparkle } from "@/assets/icons/Sparkle";
import { Dot } from "@/assets/icons/Dot";

export const DefaultButtons: React.FC = () => (
  <Flex gap="small" flex="horizontal">
    <DoubleIconDefaultButton />
    <OnlyIconDefaultButton />
    <IconDefaultButton />
  </Flex>
);

export const DoubleIconDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <ButtonLayout
      type="default"
      leftIcon={<Sparkle fillColor="black" />}
      rightIcon={<Sparkle fillColor="black" />}
    >
      Button CTA
    </ButtonLayout>
  </Flex>
);

export const OnlyIconDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <ButtonLayout type="default" leftIcon={<Dot fillColor="green" />}>
      Button CTA
    </ButtonLayout>
  </Flex>
);

export const IconDefaultButton: React.FC = () => (
  <Flex gap="small" vertical>
    <ButtonLayout type="default" leftIcon={<Sparkle fillColor="black" />} />
  </Flex>
);
