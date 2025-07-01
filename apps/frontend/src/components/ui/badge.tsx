interface BadgeProps {
   text: string;
}

const Badge = ({ text }: BadgeProps) => {
   return (
      <span className="bg-primary/20 text-primary inline-block rounded-full px-2 py-1 text-sm leading-none font-semibold">
         {text}
      </span>
   );
};

export { Badge };
