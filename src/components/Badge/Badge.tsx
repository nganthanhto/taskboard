import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ExclamationTriangleIcon,
  ClockIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset transition-colors",
  {
    variants: {
      variant: {
        default: "bg-green-50 text-green-700 ring-green-600/20",
        warning: "bg-yellow-50 text-yellow-800 ring-yellow-600/20",
        error: "bg-red-50 text-red-700 ring-red-600/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const statusConfig = {
  default: {
    label: "Default",
    icon: DotFilledIcon,
  },
  warning: {
    label: "Due soon",
    icon: ClockIcon,
  },
  error: {
    label: "Overdue",
    icon: ExclamationTriangleIcon,
  },
} as const;

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  status?: keyof typeof statusConfig;
}

export function Badge({
  className,
  variant = "default",
  status = "default",
  ...props
}: BadgeProps) {
  const StatusIcon = statusConfig[status].icon;

  return (
    <div className={badgeVariants({ variant })} {...props}>
      <StatusIcon className="h-3.5 w-3.5" />
      <span>{statusConfig[status].label}</span>
    </div>
  );
}
