import { cn } from "@/lib/utils";

interface PasswordRequirementsProps {
  password: string;
}

export const PasswordRequirements = ({
  password,
}: PasswordRequirementsProps) => {
  const rules = [
    { label: "Más de 8 caracteres", valid: password.length >= 8 },
    { label: "Al menos una letra mayúscula", valid: /[A-Z]/.test(password) },
    { label: "Al menos una letra minúscula", valid: /[a-z]/.test(password) },
  ];

  return (
    <div className="flex flex-col items-start">
      <ul className="list-disc pl-5">
        {rules.map((rule, idx) => (
          <li
            key={idx}
            className={cn(
              "text-xs",
              rule.valid ? "text-[#16A34A]" : "text-[#991B1B]"
            )}
          >
            {rule.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
