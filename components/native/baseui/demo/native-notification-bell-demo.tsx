"use client";

import { NativeNotificationBell } from "@/components/native/baseui/native-notification-bell-baseui";
import { MessageSquare } from "lucide-react";

export function NativeNotificationBellDefault() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeNotificationBell count={3} />
    </div>
  );
}

export function NativeNotificationBellEmpty() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeNotificationBell count={0} />
    </div>
  );
}

export function NativeNotificationBellCustomIcon() {
  return (
    <div className="flex items-center justify-center p-4">
      <NativeNotificationBell
        count={5}
        icon={<MessageSquare className="h-5 w-5" />}
      />
    </div>
  );
}

export function NativeNotificationBellDemo() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            With Count
          </h3>
          <NativeNotificationBellDefault />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">Empty</h3>
          <NativeNotificationBellEmpty />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold text-muted-foreground text-sm">
            Custom Icon
          </h3>
          <NativeNotificationBellCustomIcon />
        </div>
      </div>
    </div>
  );
}
