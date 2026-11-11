/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DoorsSection } from './components/DoorsSection';
import { DoorDetailView } from './components/DoorDetailView';
import { TimelineSection } from './components/TimelineSection';
import { ContactFooter } from './components/ContactFooter';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { ResumeModal } from './components/ResumeModal';
import { WittyBioModal } from './components/WittyBioModal';
import { SERVICE_DOORS } from './data/portfolioData';
import { ServiceDoor, ServiceId } from './types';

export default function App() {
  const [activeDoor, setActiveDoor] = useState<ServiceDoor | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<ServiceId | undefined>(undefined);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isWittyBioModalOpen, setIsWittyBioModalOpen] = useState(false);

  const handleSelectDoorById = (id: ServiceId) => {
    const door = SERVICE_DOORS.find((d) => d.id === id);
    if (door) {
      setActiveDoor(door);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleEnterDoor = (door: ServiceDoor) => {
    setActiveDoor(door);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDoors = () => {
    setActiveDoor(null);
    setTimeout(() => {
      const el = document.getElementById('doors-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateHome = () => {
    setActiveDoor(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateStory = () => {
    setActiveDoor(null);
    setTimeout(() => {
      const el = document.getElementById('my-story');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('doors-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (serviceId?: ServiceId) => {
    setSelectedServiceForQuote(serviceId);
    setIsProjectModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] text-slate-100 selection:bg-amber-400 selection:text-black">
      {/* Top Bar Navigation */}
      <Navbar
        onSelectDoor={handleSelectDoorById}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenContact={() => handleOpenContact()}
        onNavigateHome={handleNavigateHome}
        onNavigateStory={handleNavigateStory}
      />

      <main>
        {activeDoor ? (
          /* Dedicated Discipline Studio Showcase (From video Frame 00:07 - 00:10) */
          <DoorDetailView
            door={activeDoor}
            onBackToDoors={handleBackToDoors}
            onOpenContact={() => handleOpenContact(activeDoor.id)}
          />
        ) : (
          /* Main Interactive Experience */
          <>
            {/* Hero Section with Spiral Flip-Board (From video Frame 00:00 - 00:03) */}
            <Hero
              onStartProject={() => handleOpenContact()}
              onExploreWork={handleExploreWork}
              onOpenWittyBio={() => setIsWittyBioModalOpen(true)}
            />

            {/* Signature Feature: 3D Doors (From video Frame 00:04 - 00:06 & 00:11) */}
            <DoorsSection onEnterDoor={handleEnterDoor} />

            {/* Time Machine: "Let's go back in time" (From video Frame 00:12 - 00:14) */}
            <TimelineSection />
          </>
        )}
      </main>

      {/* Footer & Collaboration CTA (From video Frame 00:15) */}
      <ContactFooter
        onStartProject={() => handleOpenContact()}
        onSelectDoor={handleSelectDoorById}
        onNavigateHome={handleNavigateHome}
        onNavigateStory={handleNavigateStory}
      />

      {/* Modals */}
      <ProjectInquiryModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        defaultService={selectedServiceForQuote}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <WittyBioModal
        isOpen={isWittyBioModalOpen}
        onClose={() => setIsWittyBioModalOpen(false)}
      />
    </div>
  );
}
