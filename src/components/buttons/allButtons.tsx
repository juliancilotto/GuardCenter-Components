import { Flex } from "antd";
import { DefaultButtons } from "./DefaultButtons";
import { PrimaryButtons } from "./PrimaryButtons";
import { DisablePrimaryButtons } from "./PrimaryButtons/DisabledPrimaryButtons";
import { DisableDefaultButtons } from "./DefaultButtons/DisabledDefaultButtons";

export const AllButtons: React.FC = () => (
  <Flex gap="small" vertical>
    <PrimaryButtons />
    <DisablePrimaryButtons />
    <DefaultButtons />
    <DisableDefaultButtons />
  </Flex>
);
