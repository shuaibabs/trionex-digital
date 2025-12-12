
'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import teamMembersImages from '@/lib/placeholder-images/team-members.json';
import aboutImages from '@/lib/placeholder-images/about.json';
import { team } from '@/lib/data/team-members';
import { TrendingUp, Handshake, Users, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import BirdsBackground from '@/components/birds-background';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const values = [
  { title: 'Innovation', description: 'We constantly push boundaries to find better solutions.', icon: <Lightbulb className="h-6 w-6 text-primary" /> },
  { title: 'Collaboration', description: 'We believe teamwork leads to the best outcomes.', icon: <Users className="h-6 w-6 text-primary" /> },
  { title: 'Integrity', description: 'We operate with transparency and honesty.', icon: <Handshake className="h-6 w-6 text-primary" /> },
  { title: 'Results', description: 'We are fiercely committed to driving client success.', icon: <TrendingUp className="h-6 w-6 text-primary" /> },
];

const whyChooseUs = [
  {
    title: 'Data-Driven Results',
    description: 'We leverage analytics to make informed decisions and deliver measurable ROI.',
    icon: <TrendingUp className="h-8 w-8" />
  },
  {
    title: 'Client-Centric Approach',
    description: 'Your success is our priority. We work as a true partner to understand and achieve your goals.',
    icon: <Handshake className="h-8 w-8" />
  },
  {
    title: 'Expert Team',
    description: 'Our team consists of passionate, skilled professionals who are leaders in their fields.',
    icon: <Users className="h-8 w-8" />
  },
  {
    title: 'Innovative Solutions',
    description: 'We stay ahead of the curve, using the latest technologies to build cutting-edge digital experiences.',
    icon: <Lightbulb className="h-8 w-8" />
  }
];


export default function AboutPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const ourStoryImageDark = aboutImages.aboutImages.find((img) => img.id === 'story-dark');
  const ourStoryImageLight = aboutImages.aboutImages.find((img) => img.id === 'story-light');

  const ourStoryImage = mounted
    ? theme === 'dark'
      ? ourStoryImageDark
      : ourStoryImageLight
    : null;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      {/* <WarpBackground> */}
      <BirdsBackground>
        <section className="relative w-full h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0" />
          <motion.div
            className="relative z-10 p-4"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.8 }}
          >

            <div className="bg-background/30 backdrop-blur-md p-6 rounded-2xl inline-block">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl glow-on-hover">
                Empowering Brands to Lead the Digital Future
              </h1>
              <p className="mt-6 max-w-xl mx-auto text-base text-black dark:text-white md:text-lg">
                We&apos;re more than a digital agency. We&apos;re your growth partners, shaping meaningful digital experiences that connect, convert, and inspire.
              </p>
            </div>
          </motion.div>
        </section>
        {/* </WarpBackground> */}

        {/* Stats Section */}
        <section >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-background/30 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold font-headline text-primary">15+</p>
                <p className="text-muted-foreground text-sm sm:text-base">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold font-headline text-primary">50+</p>
                <p className="text-muted-foreground text-sm sm:text-base">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold font-headline text-primary">100%</p>
                <p className="text-muted-foreground text-sm sm:text-base">Average ROI</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold font-headline text-primary">5+</p>
                <p className="text-muted-foreground text-sm sm:text-base">Years of Experience</p>
              </div>
            </div>
          </div>
        </section>

      </BirdsBackground>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 -mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {ourStoryImage && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105"
              >
                <Image
                  src={ourStoryImage.imageUrl}
                  alt={ourStoryImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={ourStoryImage.imageHint}
                />
              </motion.div>
            )}
            <div>
              <Badge variant="outline">Our Story</Badge>
              <h2 className="mt-2 font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Turning Sparks into Success
              </h2>
              <p className="mt-4 text-muted-foreground text-base md:text-lg">
                At Trionex Digital, we believe that digital experiences are more than just lines of code. They’re opportunities to transform businesses, captivate audiences, and drive real growth. What started as a small team of passionate developers, designers, and marketers has grown into a full-fledged digital agency dedicated to crafting innovative solutions tailored to each client’s vision.
              </p>
              <p className="mt-4 text-muted-foreground text-base md:text-lg">
                Our journey is driven by curiosity, creativity, and a commitment to excellence. From building sleek websites and intuitive apps to creating bold branding and strategic marketing campaigns, we merge technology with creativity to deliver results that matter.
              </p>
              <p className="mt-4 text-muted-foreground text-base md:text-lg">
                Every project tells a story, and ours is about helping brands thrive in an ever-evolving digital landscape. With Trionex, your vision isn’t just realized it’s elevated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-secondary/50 dark:bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline">Our Difference</Badge>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Trionex Digital?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
              We're more than just a vendor; we're your partner in growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, i) => (
              <motion.div
                key={reason.title}
                className="p-6 rounded-lg flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                variants={cardVariants}
              >
                <div className="bg-primary/10 p-4 rounded-full text-primary mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold font-headline">{reason.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline">Our Compass</Badge>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission &amp; Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
              Our mission is to empower businesses to thrive in the digital world through technology and creativity. These values guide every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                variants={cardVariants}
              >
                <Card className="text-center p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
                  <div className="mb-4 inline-block rounded-full bg-primary/10 p-4">
                    {value.icon}
                  </div>
                  <h3 className="font-headline text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline">Our Leaders</Badge>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
              The architects of your digital success.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => {
              const avatarImage = teamMembersImages.teamMembersImages.find(p => p.id === member.avatarId);
              return (
                <motion.div
                  key={member.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  variants={cardVariants}
                >
                  <Card className="text-center transform transition-transform duration-300 hover:shadow-2xl hover:scale-105 h-full">
                    <CardContent className="p-6">
                      {avatarImage && (
                        <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-secondary hover:border-primary transition-colors">
                          <AvatarImage src={avatarImage.imageUrl} alt={member.name} data-ai-hint={avatarImage.imageHint} />
                          <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                      )}
                      <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

