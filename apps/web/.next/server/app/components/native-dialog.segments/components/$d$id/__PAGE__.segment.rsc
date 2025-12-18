1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[182022,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeDialogDemo"]
d:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
e:"$Sreact.suspense"
3:Tcf1,"use client";

import {
  DialogDescription as BaseDialogDescription,
  DialogTitle as BaseDialogTitle,
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import * as React from "react";

const NativeDialog = Dialog;

const NativeDialogTrigger = DialogTrigger;

const NativeDialogPortal = DialogPortal;

const NativeDialogClose = DialogClose;

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
        <DialogClose className="absolute right-4 top-4 rounded-full p-1 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </motion.div>
    </DialogPrimitive.Content>
  </NativeDialogPortal>
));
NativeDialogContent.displayName = DialogPrimitive.Content.displayName;

const NativeDialogHeader = DialogHeader;
NativeDialogHeader.displayName = "NativeDialogHeader";

const NativeDialogFooter = DialogFooter;
NativeDialogFooter.displayName = "NativeDialogFooter";

const NativeDialogTitle = BaseDialogTitle;
NativeDialogTitle.displayName = "NativeDialogTitle";

const NativeDialogDescription = BaseDialogDescription;
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
5:T15d5,"use client";

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
6:Tcf1,"use client";

import {
  DialogDescription as BaseDialogDescription,
  DialogTitle as BaseDialogTitle,
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import * as React from "react";

const NativeDialog = Dialog;

const NativeDialogTrigger = DialogTrigger;

const NativeDialogPortal = DialogPortal;

const NativeDialogClose = DialogClose;

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
        <DialogClose className="absolute right-4 top-4 rounded-full p-1 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </motion.div>
    </DialogPrimitive.Content>
  </NativeDialogPortal>
));
NativeDialogContent.displayName = DialogPrimitive.Content.displayName;

const NativeDialogHeader = DialogHeader;
NativeDialogHeader.displayName = "NativeDialogHeader";

const NativeDialogFooter = DialogFooter;
NativeDialogFooter.displayName = "NativeDialogFooter";

const NativeDialogTitle = BaseDialogTitle;
NativeDialogTitle.displayName = "NativeDialogTitle";

const NativeDialogDescription = BaseDialogDescription;
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
7:T7fe,"use client";

import { NativeButton } from "@/components/native/base-ui/native-button-baseui";
import {
  NativeDialog,
  NativeDialogContent,
  NativeDialogDescription,
  NativeDialogFooter,
  NativeDialogHeader,
  NativeDialogTitle,
  NativeDialogTrigger,
} from "@/components/native/base-ui/native-dialog-baseui";

export function NativeDialogDemo() {
  return (
    <NativeDialog>
      <NativeDialogTrigger asChild>
        <NativeButton>Open Dialog BASE UI</NativeButton>
      </NativeDialogTrigger>
      <NativeDialogContent className="sm:max-w-[425px]">
        <NativeDialogHeader>
          <NativeDialogTitle>Edit Profile</NativeDialogTitle>
          <NativeDialogDescription>
            Make changes to your profile here. Click save when you're done.
          </NativeDialogDescription>
        </NativeDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="text-right text-sm font-medium">Name</span>
            <input
              className="col-span-3 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              defaultValue="Pedro Duarte"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="text-right text-sm font-medium">Username</span>
            <input
              className="col-span-3 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              defaultValue="@peduarte"
            />
          </div>
        </div>
        <NativeDialogFooter>
          <NativeButton glow onClick={() => {}}>
            Save changes
          </NativeButton>
        </NativeDialogFooter>
      </NativeDialogContent>
    </NativeDialog>
  );
}
8:T813,"use client";

import { NativeButton } from "@/components/native/shadcn-ui/native-button-shadcnui";
import {
  NativeDialog,
  NativeDialogContent,
  NativeDialogDescription,
  NativeDialogFooter,
  NativeDialogHeader,
  NativeDialogTitle,
  NativeDialogTrigger,
} from "@/components/native/shadcn-ui/native-dialog-shadcnui";

export function NativeDialogDemo() {
  return (
    <NativeDialog>
      <NativeDialogTrigger asChild>
        <NativeButton>Open Dialog</NativeButton>
      </NativeDialogTrigger>
      <NativeDialogContent className="sm:max-w-[425px]">
        <NativeDialogHeader>
          <NativeDialogTitle>Edit Profile</NativeDialogTitle>
          <NativeDialogDescription>
            Make changes to your profile here. Click save when you're done.
          </NativeDialogDescription>
        </NativeDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="text-right text-sm font-medium">Name</span>
            <input
              className="col-span-3 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-1 focus-visible:ring-ring"
              defaultValue="Pedro Duarte"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="text-right text-sm font-medium">Username</span>
            <input
              className="col-span-3 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              defaultValue="@peduarte"
            />
          </div>
        </div>
        <NativeDialogFooter>
          <NativeButton glow onClick={() => {}}>
            Save changes
          </NativeButton>
        </NativeDialogFooter>
      </NativeDialogContent>
    </NativeDialog>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","relatedComponents":[{"id":"default","name":"Default","description":"Standard usage of Native Dialog","component":"$4","code":"<NativeDialog>\n  <NativeDialogTrigger asChild>\n    <NativeButton>Open Dialog</NativeButton>\n  </NativeDialogTrigger>\n  <NativeDialogContent className=\"sm:max-w-[425px]\">\n    <NativeDialogHeader>\n      <NativeDialogTitle>Edit Profile</NativeDialogTitle>\n      <NativeDialogDescription>\n        Make changes to your profile here. Click save when you're done.\n      </NativeDialogDescription>\n    </NativeDialogHeader>\n    <div className=\"grid gap-4 py-4\">\n      <div className=\"grid grid-cols-4 items-center gap-4\">\n        <span className=\"text-right text-sm font-medium\">Name</span>\n        <input className=\"...\" defaultValue=\"Pedro Duarte\" />\n      </div>\n      <div className=\"grid grid-cols-4 items-center gap-4\">\n        <span className=\"text-right text-sm font-medium\">Username</span>\n        <input className=\"...\" defaultValue=\"@peduarte\" />\n      </div>\n    </div>\n    <NativeDialogFooter>\n      <NativeButton glow>Save changes</NativeButton>\n    </NativeDialogFooter>\n  </NativeDialogContent>\n</NativeDialog>"}],"variantCodes":{"default":"<NativeDialog>\n  <NativeDialogTrigger asChild>\n    <NativeButton>Open Dialog</NativeButton>\n  </NativeDialogTrigger>\n  <NativeDialogContent className=\"sm:max-w-[425px]\">\n    <NativeDialogHeader>\n      <NativeDialogTitle>Edit Profile</NativeDialogTitle>\n      <NativeDialogDescription>\n        Make changes to your profile here. Click save when you're done.\n      </NativeDialogDescription>\n    </NativeDialogHeader>\n    <div className=\"grid gap-4 py-4\">\n      <div className=\"grid grid-cols-4 items-center gap-4\">\n        <span className=\"text-right text-sm font-medium\">Name</span>\n        <input className=\"...\" defaultValue=\"Pedro Duarte\" />\n      </div>\n      <div className=\"grid grid-cols-4 items-center gap-4\">\n        <span className=\"text-right text-sm font-medium\">Username</span>\n        <input className=\"...\" defaultValue=\"@peduarte\" />\n      </div>\n    </div>\n    <NativeDialogFooter>\n      <NativeButton glow>Save changes</NativeButton>\n    </NativeDialogFooter>\n  </NativeDialogContent>\n</NativeDialog>"},"baseId":"native-dialog","baseuiCode":"$5","shadcnuiCode":"$6","baseuiDemoCode":"$7","shadcnuiDemoCode":"$8"}],["$L9","$La","$Lb"],"$Lc"]}],"loading":null,"isPartial":false}
9:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
a:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
b:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
c:["$","$Ld",null,{"children":["$","$e",null,{"name":"Next.MetadataOutlet","children":"$@f"}]}]
f:null
