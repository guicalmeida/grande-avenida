export default function HTMLText({ text }: { text: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: text }}
      className="font-azeret text-xs md:text-base leading-[26px]"
    />
  );
}
