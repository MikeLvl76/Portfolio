"use client";

import { XIcon } from "lucide-react";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

type ToastType = "success" | "error";

type ToastContextType = {
  toast: (message: string, type: ToastType, timeout: number) => void;
};

const ToastContext = createContext<ToastContextType>({
  toast: () => {},
});

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw Error("Cannot use context outside provider.");
  }

  return context;
};

type Toast = {
  id: string;
  type: ToastType;
  message: string;
  date: Date;
};

type Props = {
  children: ReactNode;
};

export function ToastProvider({ children }: Props) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(
    (message: string, type: ToastType = "success", timeout: number = 3000) => {
      const id = Math.random().toString(16).substring(2);
      const date = new Date();

      setToasts((prev) => [...prev, { id, type, message, date }]);

      setTimeout(
        () => setToasts((prev) => prev.filter((t) => t.id !== id)),
        timeout
      );
    },
    []
  );

  const removeToast = (id: string) =>
    setToasts((prev) => prev.filter((t) => t.id !== id));

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}

      <div className="fixed z-9999 flex flex-col gap-3 bottom-4 left-1/2 -translate-x-1/2 w-[92%] sm:left-auto sm:translate-x-0 sm:right-4 sm:w-80">
        {toasts.map(({ id, message, type, date }) => (
          <div
            key={id}
            className={`group relative overflow-hidden rounded-xl border dark:bg-bg-dark/30 bg-bg-light/80 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-xl
                    ${
                      type === "success" ? "border-green-400" : "border-red-400"
                    }
                `}
          >
            <div
              className={`h-1 w-full ${
                type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <div className="p-3 sm:p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wide
                    ${type === "success" ? "text-green-600" : "text-red-600"}
                    `}
                >
                  {type}
                </span>
                <XIcon
                  onClick={() => removeToast(id)}
                  className="size-4 sm:size-5 text-text-dark dark:text-text-light cursor-pointer transition shrink-0"
                />
              </div>
              <p className="text-sm sm:text-[15px] text-text-dark dark:text-text-light leading-relaxed wrap-break-word whitespace-normal">
                {message}
              </p>
              <span className="text-[10px] sm:text-xs text-text-dark dark:text-text-light self-end">
                {date.toUTCString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
