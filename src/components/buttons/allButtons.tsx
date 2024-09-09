import { Flex } from "antd";
import { GrayDefaultButtons } from "./DefaultButtons/GrayDefaultButtons";
import { DisablePrimaryButtons } from "./PrimaryButtons/DisabledPrimaryButtons";
import { DisableGrayDefaultButtons } from "./DefaultButtons/GrayDefaultButtons/DisabledGrayDefaultButtons";
import { PrimaryButtons } from "./PrimaryButtons/PrimaryButton";
import { GreenDefaultButtons } from "./DefaultButtons/GreenDefaultButtons";
import { GreenDisableDefaultButtons } from "./DefaultButtons/GreenDefaultButtons/DisabledGreenDefaultButton";

export const AllButtons: React.FC = () => (
  <Flex gap="small" vertical>
    <PrimaryButtons />
    <DisablePrimaryButtons />
    <GrayDefaultButtons />
    <DisableGrayDefaultButtons />
    <GreenDefaultButtons />
    <GreenDisableDefaultButtons />
  </Flex>
);
