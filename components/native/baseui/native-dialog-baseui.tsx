"use client";

import { cn } from "@/lib/utils";
import { Dialog } from "@base-ui/react/dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import * as React from "react";

const NativeDialog = Dialog.Root;

const NativeDialogTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Dialog.Trigger> & { asChild?: boolean }
>(({ asChild, children, ...props }, ref) => {
  if (asChild && React.isValidElement(children)) {
    return (
      <Dialog.Trigger
        ref={ref}
        {...props}
        render={(triggerProps) => {
          return React.cloneElement(children, {
            ...triggerProps,
            // @ts-ignore - Explicitly handling the merge
             ...children.props,
             className: cn(triggerProps.className, (children as any).props.className),
             // Combined refs are handled by cloneElement if ref is present on children,
             // but triggerProps also has a ref. React merge refs might be needed generally,
             // but strictly Base UI render prop passes the necessary event handlers and ref.
          });
        }}
      />
    );
  }
  return (
    <Dialog.Trigger ref={ref} {...props}>
      {children}
    </Dialog.Trigger>
  );
});
NativeDialogTrigger.displayName = "NativeDialogTrigger";

const NativeDialogPortal = Dialog.Portal;

const NativeDialogClose = Dialog.Close;

const NativeDialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Dialog.Backdrop>
>(({ className, ...props }, ref) => (
  <Dialog.Backdrop
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/20 backdrop-blur-sm", className)}
    render={(backdropProps, state) => {
      const {
        onDrag,
        onDragStart,
        onDragEnd,
        onAnimationStart,
        onAnimationEnd,
        onTransitionEnd,
        ...motionProps
      } = backdropProps;
      return (
        <motion.div
          {...(motionProps as any)}
          initial={{ opacity: 0 }}
          animate={{ opacity: state.open ? 1 : 0 }}
          exit={{ opacity: 0 }}
        />
      );
    }}
    {...props}
  />
));
NativeDialogOverlay.displayName = "NativeDialogOverlay";

const NativeDialogContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Dialog.Popup>
>(({ className, children, ...props }, ref) => (
  <NativeDialogPortal>
    <NativeDialogOverlay />
    <Dialog.Popup
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl p-6 shadow-2xl sm:rounded-2xl",
        className
      )}
      render={(popupProps, state) => {
        const {
          onDrag,
          onDragStart,
          onDragEnd,
          onAnimationStart,
          onAnimationEnd,
          onTransitionEnd,
          ...motionProps
        } = popupProps;
        return (
          <motion.div
            {...(motionProps as any)}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{
              opacity: state.open ? 1 : 0,
              scale: state.open ? 1 : 0.95,
              filter: state.open ? "blur(0px)" : "blur(10px)",
            }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
          >
            {children}
            <Dialog.Close className="absolute right-4 top-4 rounded-full p-1 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </motion.div>
        );
      }}
      {...props}
    />
  </NativeDialogPortal>
));
NativeDialogContent.displayName = "NativeDialogContent";

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
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, ref) => (
  <Dialog.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
NativeDialogTitle.displayName = "NativeDialogTitle";

const NativeDialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof Dialog.Description>
>(({ className, ...props }, ref) => (
  <Dialog.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
NativeDialogDescription.displayName = "NativeDialogDescription";

export {
  NativeDialog,
  NativeDialogClose,
  NativeDialogContent,
  NativeDialogDescription,
  NativeDialogFooter,
  NativeDialogHeader,
  NativeDialogOverlay,
  NativeDialogPortal,
  NativeDialogTitle,
  NativeDialogTrigger,
};
