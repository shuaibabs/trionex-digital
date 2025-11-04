
'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { placeholderImages, team } from '@/lib/data';
import { CheckCircle, TrendingUp, Handshake, Users, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const aboutHeroImage = placeholderImages.find((img) => img.id === 'about-hero');
const ourStoryImage = placeholderImages.find((img) => img.id === 'our-story');

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
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        {aboutHeroImage && (
          <Image
            src={aboutHeroImage.imageUrl}
            alt={aboutHeroImage.description}
            fill
            className="object-cover"
            data-ai-hint={aboutHeroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          className="relative z-10 p-4"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="text-sm py-1 px-4 sm:text-base bg-white/10 text-white border-white/20">Our Journey</Badge>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mt-4">
            Crafting Digital Excellence, Driving Real Growth
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-base text-white/80 md:text-lg">
              We&apos;re a passionate team of developers, designers, and marketers dedicated to building exceptional digital experiences that fuel success.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary/70 dark:bg-secondary/20 py-12 transform -translate-y-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-background p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold font-headline text-primary">150+</p>
              <p className="text-muted-foreground text-sm sm:text-base">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold font-headline text-primary">200+</p>
              <p className="text-muted-foreground text-sm sm:text-base">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold font-headline text-primary">300%</p>
              <p className="text-muted-foreground text-sm sm:text-base">Average ROI</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold font-headline text-primary">5+</p>
              <p className="text-muted-foreground text-sm sm:text-base">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>


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
                From a Spark to Synergy
              </h2>
              <p className="mt-4 text-muted-foreground text-base md:text-lg">
                Founded in a small garage by a developer and a marketer, Trionex Digital was born from a simple idea: what if technology and creativity worked in perfect harmony? We saw businesses struggling with disconnected digital efforts—beautiful websites that nobody saw, and marketing campaigns that didn't convert.
              </p>
              <p className="mt-4 text-muted-foreground text-base md:text-lg">
                We set out to build an agency that bridges that gap. Today, we are a full-service digital powerhouse, but our core mission remains the same: to be a true partner, creating synergistic solutions that deliver tangible results.
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
              const avatarImage = placeholderImages.find(p => p.id === member.avatarId);
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
            )})}
          </div>
        </div>
      </section>
    </div>
  );
}

    