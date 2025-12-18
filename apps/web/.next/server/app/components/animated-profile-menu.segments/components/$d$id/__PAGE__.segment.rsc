1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
8:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
9:"$Sreact.suspense"
3:T192b,"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ChevronRight, LogOut, Settings, TrendingUp, User } from "lucide-react";
import { useCallback, useId, useState } from "react";

interface MenuItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const PROFILE_MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    icon: User,
    title: "Profile",
    description: "View your details",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Stats",
    description: "Track your activity",
  },
  {
    id: 3,
    icon: Settings,
    title: "Settings",
    description: "Manage preferences",
  },
  {
    id: 4,
    icon: LogOut,
    title: "Logout",
    description: "Sign out securely",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -16,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -16,
    scale: 0.92,
    transition: { duration: 0.18, ease: "easeInOut" },
  },
};

export function AnimatedProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const toggleMenu = useCallback(() => {
    setIsOpen((previous) => !previous);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav
      className="fixed preview:absolute not-preview:bottom-6 not-preview:left-6 z-50"
      role="navigation"
      aria-label="Profile quick actions"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="profile-menu"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute bottom-24 left-0 space-y-3"
            role="presentation"
          >
            <motion.ul
              id={menuId}
              role="list"
              aria-label="Profile actions"
              className="flex flex-col gap-3"
            >
              {PROFILE_MENU_ITEMS.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.li
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    role="listitem"
                  >
                    <motion.button
                      type="button"
                      onClick={closeMenu}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="group relative block w-full overflow-hidden rounded-2xl border border-border/40 bg-background/60 text-left shadow-[0_24px_80px_-32px_rgba(15,23,42,0.45)] backdrop-blur px-4 py-4 transition-all hover:border-border/60 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={`${item.title}: ${item.description}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

                      <div className="relative flex min-w-[240px] items-center gap-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/30 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20 group-hover:text-primary/90">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-foreground">
                            {item.title}
                          </h3>
                          <p className="text-xs text-foreground/60">
                            {item.description}
                          </p>
                        </div>
                        <ChevronRight
                          className="h-4 w-4 text-foreground/40 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </div>
                    </motion.button>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="group relative flex h-16 w-16 items-center justify-center"
        aria-label={isOpen ? "Close profile menu" : "Open profile menu"}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={menuId}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <Avatar className="relative h-16 w-16 cursor-pointer border-4 border-background shadow-xl ring-2 ring-border/40 transition-all duration-300 group-hover:ring-4 group-hover:ring-primary/40">
          <AvatarImage
            src="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTte8EAuCfSJKE21d4F6TYyNAxBGU3aRflMr5Sn"
            alt="User profile picture"
            className="object-cover"
          />
          <AvatarFallback className="bg-gradient-to-br from-primary/80 to-primary text-primary-foreground text-xl font-semibold">
            JD
          </AvatarFallback>
        </Avatar>
      </motion.button>

      <span className="sr-only" role="status" aria-live="polite">
        {isOpen ? "Profile menu expanded" : "Profile menu collapsed"}
      </span>
    </nav>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"animated-profile-menu"}],["$L4","$L5","$L6"],"$L7"]}],"loading":null,"isPartial":false}
4:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
5:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
6:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
7:["$","$L8",null,{"children":["$","$9",null,{"name":"Next.MetadataOutlet","children":"$@a"}]}]
a:null
