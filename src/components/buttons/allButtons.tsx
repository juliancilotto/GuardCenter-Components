import { Flex, Typography } from "antd";
import { GrayDefaultButtons } from "./DefaultButtons/GrayDefaultButtons";
import { DisablePrimaryButtons } from "./PrimaryButtons/DisabledPrimaryButtons";
import { DisableGrayDefaultButtons } from "./DefaultButtons/GrayDefaultButtons/DisabledGrayDefaultButtons";
import { PrimaryButtons } from "./PrimaryButtons/PrimaryButton";
import { GreenDefaultButtons } from "./DefaultButtons/GreenDefaultButtons";
import { GreenDisableDefaultButtons } from "./DefaultButtons/GreenDefaultButtons/DisabledGreenDefaultButton";
import { GrayTextButtons } from "./TextButtons/GrayTextButtons";
import { DisabledGrayTextButtons } from "./TextButtons/GrayTextButtons/DisabledGrayTextButtons";
import { GreenTextButtons } from "./TextButtons/GreenTextButtons";
import { DisabledGreenTextButtons } from "./TextButtons/GreenTextButtons/DisabledGreenTextButtons";
const { Title } = Typography;
export const AllButtons: React.FC = () => (
  <Flex gap={100}>
    <Flex gap="small" vertical>
      <Title level={5}>Primary Buttons</Title>
      <PrimaryButtons />
      <DisablePrimaryButtons />
      <Title level={5}>Default Buttons</Title>

      <GrayDefaultButtons />
      <DisableGrayDefaultButtons />
      <Title level={5}>Green Default Buttons</Title>

      <GreenDefaultButtons />
      <GreenDisableDefaultButtons />
    </Flex>
    <Flex gap="small" vertical>
      <Title level={5}>Text Buttons</Title>

      <GrayTextButtons />
      <DisabledGrayTextButtons />
      <Title level={5}>Green Text Buttons</Title>

      <GreenTextButtons />
      <DisabledGreenTextButtons />
    </Flex>
  </Flex>
);
