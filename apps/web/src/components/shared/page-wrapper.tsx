export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-24 md:mt-28 mb-12">{children}</div>;
}
