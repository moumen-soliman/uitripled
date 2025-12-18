1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[909720,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"NativeTabsDemo"]
f:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
10:"$Sreact.suspense"
3:T926,"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface NativeTabsProps {
  items: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  defaultValue?: string;
  className?: string;
}

export function NativeTabs({
  items,
  defaultValue,
  className,
}: NativeTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0].id);

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className={cn("w-full max-w-md", className)}
    >
      <TabsList className="relative flex w-full items-center gap-1 rounded-xl bg-muted/50 p-1 border border-black/5 dark:border-white/5">
        {items.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="relative z-10 flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 z-[-1] rounded-lg bg-background shadow-sm border border-black/5 dark:border-white/5"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {items.map((item) => (
        <TabsContent
          key={item.id}
          value={item.id}
          className="mt-4 overflow-hidden rounded-xl border bg-background p-6 shadow-sm"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            {item.content}
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
5:T8e9,"use client";

import { cn } from "@/lib/utils";
import { Tabs } from "@base-ui/react/tabs";
import { motion } from "framer-motion";
import { useState } from "react";

interface NativeTabsProps {
  items: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  defaultValue?: string;
  className?: string;
}

export function NativeTabs({
  items,
  defaultValue,
  className,
}: NativeTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0].id);

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={(val) => setActiveTab(val as string)}
      className={cn("w-full max-w-md", className)}
    >
      <Tabs.List className="relative flex w-full items-center gap-1 rounded-xl bg-muted/50 p-1 border border-black/5 dark:border-white/5">
        {items.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Tabs.Tab
              key={tab.id}
              value={tab.id}
              className="relative z-10 flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-selected:text-foreground text-muted-foreground hover:text-foreground bg-transparent border-0"
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab-baseui"
                  className="absolute inset-0 z-[-1] rounded-lg bg-background shadow-sm border border-black/5 dark:border-white/5"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </Tabs.Tab>
          );
        })}
      </Tabs.List>
      {items.map((item) => (
        <Tabs.Panel
          key={item.id}
          value={item.id}
          className="mt-4 overflow-hidden rounded-xl border bg-background p-6 shadow-sm focus:outline-none"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            {item.content}
          </motion.div>
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}
6:T926,"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface NativeTabsProps {
  items: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  defaultValue?: string;
  className?: string;
}

export function NativeTabs({
  items,
  defaultValue,
  className,
}: NativeTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0].id);

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className={cn("w-full max-w-md", className)}
    >
      <TabsList className="relative flex w-full items-center gap-1 rounded-xl bg-muted/50 p-1 border border-black/5 dark:border-white/5">
        {items.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="relative z-10 flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 z-[-1] rounded-lg bg-background shadow-sm border border-black/5 dark:border-white/5"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {items.map((item) => (
        <TabsContent
          key={item.id}
          value={item.id}
          className="mt-4 overflow-hidden rounded-xl border bg-background p-6 shadow-sm"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            {item.content}
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
7:T82a,"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface NativeTabsProps {
  items: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  defaultValue?: string;
  className?: string;
}

export function NativeTabs({
  items,
  defaultValue,
  className,
}: NativeTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0].id);

  return (
    <div className={cn("w-full max-w-md", className)}>
      <div className="relative flex w-full items-center gap-1 rounded-xl bg-muted/50 p-1 border border-black/5 dark:border-white/5">
        {items.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative z-10 flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 z-[-1] rounded-lg bg-background shadow-sm border border-black/5 dark:border-white/5"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border bg-background p-6 shadow-sm">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
        >
          {items.find((item) => item.id === activeTab)?.content}
        </motion.div>
      </div>
    </div>
  );
}
8:T561,"use client";

import { NativeTabs } from "@/components/native/base-ui/native-tabs-baseui";

export function NativeTabsDemo() {
  return (
    <NativeTabs
      items={[
        {
          id: "account",
          label: "Account",
          content: (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Account Settings</h3>
              <p className="text-muted-foreground">
                Manage your account credentiale here.
              </p>
            </div>
          ),
        },
        {
          id: "notifications",
          label: "Notifications",
          content: (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">
                Notification Preferences
              </h3>
              <p className="text-muted-foreground">
                Choose what updates you want.
              </p>
            </div>
          ),
        },
        {
          id: "billing",
          label: "Billing",
          content: (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Billing Information</h3>
              <p className="text-muted-foreground">
                View your invoices and manage payment methods.
              </p>
            </div>
          ),
        },
      ]}
    />
  );
}
9:T565,"use client";

import { NativeTabs } from "@/components/native/shadcn-ui/native-tabs-shadcnui";

export function NativeTabsDemo() {
  return (
    <NativeTabs
      items={[
        {
          id: "account",
          label: "Account",
          content: (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Account Settings</h3>
              <p className="text-muted-foreground">
                Manage your account credentiale here.
              </p>
            </div>
          ),
        },
        {
          id: "notifications",
          label: "Notifications",
          content: (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">
                Notification Preferences
              </h3>
              <p className="text-muted-foreground">
                Choose what updates you want.
              </p>
            </div>
          ),
        },
        {
          id: "billing",
          label: "Billing",
          content: (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Billing Information</h3>
              <p className="text-muted-foreground">
                View your invoices and manage payment methods.
              </p>
            </div>
          ),
        },
      ]}
    />
  );
}
a:T565,"use client";

import { NativeTabs } from "@/components/native/shadcn-ui/native-tabs-shadcnui";

export function NativeTabsDemo() {
  return (
    <NativeTabs
      items={[
        {
          id: "account",
          label: "Account",
          content: (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Account Settings</h3>
              <p className="text-muted-foreground">
                Manage your account credentiale here.
              </p>
            </div>
          ),
        },
        {
          id: "notifications",
          label: "Notifications",
          content: (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">
                Notification Preferences
              </h3>
              <p className="text-muted-foreground">
                Choose what updates you want.
              </p>
            </div>
          ),
        },
        {
          id: "billing",
          label: "Billing",
          content: (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Billing Information</h3>
              <p className="text-muted-foreground">
                View your invoices and manage payment methods.
              </p>
            </div>
          ),
        },
      ]}
    />
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","relatedComponents":[{"id":"default","name":"Default","description":"Standard usage of Native Tabs","component":"$4","code":"<NativeTabs\n  items={[\n    {\n      id: \"account\",\n      label: \"Account\",\n      content: (\n        <div className=\"flex flex-col gap-4\">\n          <h3 className=\"text-lg font-semibold\">Account Settings</h3>\n          <p className=\"text-muted-foreground\">Manage your account credentials and preferences here.</p>\n        </div>\n      ),\n    },\n    {\n      id: \"notifications\",\n      label: \"Notifications\",\n      content: (\n        <div className=\"flex flex-col gap-4\">\n          <h3 className=\"text-lg font-semibold\">Notification Preferences</h3>\n          <p className=\"text-muted-foreground\">Choose what updates you want to receive via email or push.</p>\n        </div>\n      ),\n    },\n    {\n      id: \"billing\",\n      label: \"Billing\",\n      content: (\n        <div className=\"flex flex-col gap-4\">\n          <h3 className=\"text-lg font-semibold\">Billing Information</h3>\n          <p className=\"text-muted-foreground\">View your invoices and manage payment methods.</p>\n        </div>\n      ),\n    },\n  ]}\n/>"}],"variantCodes":{"default":"<NativeTabs\n  items={[\n    {\n      id: \"account\",\n      label: \"Account\",\n      content: (\n        <div className=\"flex flex-col gap-4\">\n          <h3 className=\"text-lg font-semibold\">Account Settings</h3>\n          <p className=\"text-muted-foreground\">Manage your account credentials and preferences here.</p>\n        </div>\n      ),\n    },\n    {\n      id: \"notifications\",\n      label: \"Notifications\",\n      content: (\n        <div className=\"flex flex-col gap-4\">\n          <h3 className=\"text-lg font-semibold\">Notification Preferences</h3>\n          <p className=\"text-muted-foreground\">Choose what updates you want to receive via email or push.</p>\n        </div>\n      ),\n    },\n    {\n      id: \"billing\",\n      label: \"Billing\",\n      content: (\n        <div className=\"flex flex-col gap-4\">\n          <h3 className=\"text-lg font-semibold\">Billing Information</h3>\n          <p className=\"text-muted-foreground\">View your invoices and manage payment methods.</p>\n        </div>\n      ),\n    },\n  ]}\n/>"},"baseId":"native-tabs","baseuiCode":"$5","shadcnuiCode":"$6","carbonCode":"$7","baseuiDemoCode":"$8","shadcnuiDemoCode":"$9","carbonDemoCode":"$a"}],["$Lb","$Lc","$Ld"],"$Le"]}],"loading":null,"isPartial":false}
b:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
c:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
d:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
e:["$","$Lf",null,{"children":["$","$10",null,{"name":"Next.MetadataOutlet","children":"$@11"}]}]
11:null
