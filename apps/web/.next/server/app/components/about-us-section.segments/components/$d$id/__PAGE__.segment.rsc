1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:Te2c,"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { Award, Heart, Target, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver exceptional solutions that drive growth and innovation for our clients.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A diverse group of talented professionals dedicated to excellence.",
  },
  {
    icon: Award,
    title: "Our Excellence",
    description:
      "Recognized for outstanding quality and innovation in everything we do.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, transparency, and commitment to our clients success.",
  },
];

export function AboutUsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-background px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge className="mb-4">About Us</Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Who We Are
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We are a team of passionate professionals committed to delivering
            excellence and driving innovation in everything we do.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div key={value.title} variants={itemVariants}>
                <Card className="group h-full border-2 p-6 transition-all hover:border-primary hover:shadow-lg">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-lg border-2 border-primary/20 bg-primary/5 p-8 text-center"
        >
          <h3 className="mb-4 text-2xl font-bold">Join Our Journey</h3>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We're always looking for talented individuals to join our growing
            team. Let's build something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
4:Ted8,"use client";

import { motion, Variants } from "framer-motion";
import { Award, Heart, Target, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver exceptional solutions that drive growth and innovation for our clients.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A diverse group of talented professionals dedicated to excellence.",
  },
  {
    icon: Award,
    title: "Our Excellence",
    description:
      "Recognized for outstanding quality and innovation in everything we do.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, transparency, and commitment to our clients success.",
  },
];

export function AboutUsSectionBaseui() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-background px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            About Us
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Who We Are
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We are a team of passionate professionals committed to delivering
            excellence and driving innovation in everything we do.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div key={value.title} variants={itemVariants}>
                <div className="group h-full rounded-lg border-2 border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:border-primary hover:shadow-lg">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-lg border-2 border-primary/20 bg-primary/5 p-8 text-center"
        >
          <h3 className="mb-4 text-2xl font-bold">Join Our Journey</h3>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We're always looking for talented individuals to join our growing
            team. Let's build something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
5:Te2c,"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { Award, Heart, Target, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver exceptional solutions that drive growth and innovation for our clients.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A diverse group of talented professionals dedicated to excellence.",
  },
  {
    icon: Award,
    title: "Our Excellence",
    description:
      "Recognized for outstanding quality and innovation in everything we do.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, transparency, and commitment to our clients success.",
  },
];

export function AboutUsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-background px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge className="mb-4">About Us</Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Who We Are
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We are a team of passionate professionals committed to delivering
            excellence and driving innovation in everything we do.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div key={value.title} variants={itemVariants}>
                <Card className="group h-full border-2 p-6 transition-all hover:border-primary hover:shadow-lg">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-lg border-2 border-primary/20 bg-primary/5 p-8 text-center"
        >
          <h3 className="mb-4 text-2xl font-bold">Join Our Journey</h3>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We're always looking for talented individuals to join our growing
            team. Let's build something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"about-us-section","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
