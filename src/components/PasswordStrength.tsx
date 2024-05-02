import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
  input?: string;
}

function hasLowerCaseAndUpperCase(str: string) {
  return /[a-z]/.test(str) && /[A-Z]/.test(str);
}

function hasNumber(str: string) {
  return /\d/.test(str);
}

function hasSpecialCharacter(str: string) {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str);
}

function hasMinimum(input: string) {
  if (input.length < 8) {
    return "invisible";
  }
  return;
}

function calculateScore(input: string) {
  let calc = 0;

  if (input) {
    if (input.length >= 8) {
      calc += 1;
    } else {
      return 0;
    }

    if (hasLowerCaseAndUpperCase(input)) {
      calc += 1;
    }

    if (hasNumber(input)) {
      calc += 1;
    }

    if (hasSpecialCharacter(input)) {
      calc += 1;
    }

    return calc;
  }
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ input = "" }) => {
  const [score, setScore] = useState<any>(0);

  useEffect(() => {
    return setScore(calculateScore(input));
  }, [input]);

  function isChecked(score: number, threshold: number) {
    if (score >= threshold) {
      return "bg-green-400";
    }

    return "";
  }

  function strengthLabel(score: Number) {
    switch (score) {
      case 0:
        return "";
      case 1:
      case 2:
        return "Fraca";
      case 3:
        return "Média";
      case 4:
        return "Forte";
    }
    return;
  }

  if (!input) return null;

  return (
    <div className="w-full h-8 flex flex-col">
      <div className="w-full h-2 flex justify-start items-center transparent gap-1">
        <span
          className={cn(
            "w-1/3 h-2 transition border border-black bg-red-400",
            isChecked(score, 1),
            hasMinimum(input)
          )}
        />
        <span
          className={cn(
            "w-1/3 h-2 transition border border-black bg-red-400",
            isChecked(score, 3),
            hasMinimum(input)
          )}
        />
        <span
          className={cn(
            "w-1/3 h-2 transition border border-black bg-red-400",
            isChecked(score, 4),
            hasMinimum(input)
          )}
        />
      </div>
      {score != 0 ? (
        <label className="self-end text-xs">
          Força da senha: <strong>{strengthLabel(score)}</strong>
        </label>
      ) : (
        <></>
        // <label className="self-end text-xs">
        //   Insira pelo menos 8 caracteres
        // </label>
      )}
    </div>
  );
};

export { PasswordStrength };
