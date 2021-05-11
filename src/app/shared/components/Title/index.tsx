type Props = {
  title: string;
};
export const TitleComponent: React.FC<Props> = ({ title }: Props) => (
  <h4>{title}</h4>
);
