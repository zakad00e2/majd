/**
 * Decorative gold divider line – used between sections.
 */
export default function DividerLine({ className = "" }: { className?: string }) {
  return (
    <div className={`gold-divider w-full my-12 md:my-16 ${className}`} role="separator" />
  );
}
