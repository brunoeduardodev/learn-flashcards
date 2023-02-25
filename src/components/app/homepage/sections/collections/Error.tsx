import { SectionMessageContainer } from "../../section/SectionMessageContainer";

type Props = {
  message?: string;
};

export const Error = ({ message }: Props) => {
  return (
    <SectionMessageContainer>
      <p>Couldn&apos;t retrieve collections</p>
      <p className={"text-sm"}>{message}</p>
    </SectionMessageContainer>
  );
};
