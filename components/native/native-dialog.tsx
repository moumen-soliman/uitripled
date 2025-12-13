import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const NativeDialog = DialogPrimitive.Root;

const NativeDialogTrigger = DialogPrimitive.Trigger;

const NativeDialogPortal = DialogPrimitive.Portal;

const NativeDialogClose = DialogPrimitive.Close;

const NativeDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} asChild {...props}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "fixed inset-0 z-50 bg-black/20 backdrop-blur-sm",
        className
      )}
    />
  </DialogPrimitive.Overlay>
));
NativeDialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const NativeDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <NativeDialogPortal>
    <NativeDialogOverlay />
    <DialogPrimitive.Content ref={ref} asChild {...props}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl p-6 shadow-2xl sm:rounded-2xl",
          className
        )}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-1 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </motion.div>
    </DialogPrimitive.Content>
  </NativeDialogPortal>
));
NativeDialogContent.displayName = DialogPrimitive.Content.displayName;

const NativeDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
NativeDialogHeader.displayName = "NativeDialogHeader";

const NativeDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
NativeDialogFooter.displayName = "NativeDialogFooter";

const NativeDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
NativeDialogTitle.displayName = DialogPrimitive.Title.displayName;

const NativeDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
NativeDialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  NativeDialog,
  NativeDialogPortal,
  NativeDialogOverlay,
  NativeDialogTrigger,
  NativeDialogClose,
  NativeDialogContent,
  NativeDialogHeader,
  NativeDialogFooter,
  NativeDialogTitle,
  NativeDialogDescription,
};
