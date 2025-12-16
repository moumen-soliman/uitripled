"use client";

import { NativeTabs } from "@/components/native/baseui/native-tabs-baseui";

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
