import { Service } from "@/types";
import { FadeUp } from "./motion";

interface ServiceCardProps {
  service: Service;
  index: number;
}

/**
 * Service card with thin geometric frame and gold accents.
 */
export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <FadeUp delay={index * 0.1}>
      <div className="blueprint-frame p-6 md:p-8 h-full transition-all duration-300 hover:border-gold/30 group">
        {/* Icon + title row */}
        <div className="flex items-center gap-4 mb-4">
          <div className="text-gold opacity-80 group-hover:opacity-100 transition-opacity">
            <service.icon size={32} strokeWidth={1} />
          </div>
          <div>
            <span className="text-gold/40 font-heading text-xs tracking-wider block mb-1">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-xl text-white group-hover:text-gold transition-colors">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider w-full mb-4" />

        {/* Description */}
        <p className="text-warm-gray text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="space-y-2" aria-label={`مميزات ${service.title}`}>
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-warm-gray-dark text-xs"
            >
              <span className="block w-1.5 h-1.5 bg-gold/40 rotate-45 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  );
}
