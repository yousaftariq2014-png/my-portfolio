/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofStrip } from './components/ProofStrip';
import { DoorsSection } from './components/DoorsSection';
import { DoorDetailView } from './components/DoorDetailView';
import { TimelineSection } from './components/TimelineSection';
import { ContactFooter } from './components/ContactFooter';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { ResumeModal } from './components/ResumeModal';
import { WittyBioModal } from './components/WittyBioModal';
import { StrategyCallModal } from './components/StrategyCallModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { DoorPortalTransition } from './components/DoorPortalTransition';
import { SERVICE_DOORS } from './data/portfolioData';
import { ServiceDoor, ServiceId } from './types';

export default function App() {
  const [activeDoor, setActiveDoor] = useState<ServiceDoor | null>(null);
  const [portalTransitionDoor, setPortalTransitionDoor] = useState<ServiceDoor | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<ServiceId | undefined>(undefined);
  const [isStrategyCallModalOpen, setIsStrategyCallModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isWittyBioModalOpen, setIsWittyBioModalOpen] = useState(false);

  const handleEnterDoor = (door: ServiceDoor) => {
    if (portalTransitionDoor) return;
    setPortalTransitionDoor(door);

    // 700ms cinematic portal walk-through zoom & whoosh audio before mounting room
    setTimeout(() => {
      setActiveDoor(door);
      setPortalTransitionDoor(null);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 700);
  };

  const handleSelectDoorById = (id: ServiceId) => {
    const door = SERVICE_DOORS.find((d) => d.id === id);
    if (door) {
      handleEnterDoor(door);
    }
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
        onBookCall={() => setIsStrategyCallModalOpen(true)}
        onNavigateHome={handleNavigateHome}
        onNavigateStory={handleNavigateStory}
      />

      <main>
        {activeDoor ? (
          /* Dedicated Discipline Studio Showcase */
          <DoorDetailView
            door={activeDoor}
            onBackToDoors={handleBackToDoors}
            onOpenContact={() => handleOpenContact(activeDoor.id)}
          />
        ) : (
          /* Main Interactive Experience */
          <>
            {/* Hero Section with Spiral Flip-Board */}
            <Hero
              onStartProject={() => handleOpenContact()}
              onBookStrategyCall={() => setIsStrategyCallModalOpen(true)}
              onExploreWork={handleExploreWork}
              onOpenWittyBio={() => setIsWittyBioModalOpen(true)}
            />

            {/* Quantitative Proof & Credibility Matrix (Compels clients to hire) */}
            <ProofStrip
              onOpenConsultation={() => handleOpenContact()}
              onViewForexProof={() => handleSelectDoorById('forex-trading')}
              onViewWebProof={() => handleSelectDoorById('web-development')}
            />

            {/* Signature Feature: 3D Doors */}
            <DoorsSection onEnterDoor={handleEnterDoor} />

            {/* Time Machine: "Let's go back in time" */}
            <TimelineSection />
          </>
        )}
      </main>

      {/* Footer & Collaboration CTA */}
      <ContactFooter
        onStartProject={() => handleOpenContact()}
        onBookStrategyCall={() => setIsStrategyCallModalOpen(true)}
        onSelectDoor={handleSelectDoorById}
        onNavigateHome={handleNavigateHome}
        onNavigateStory={handleNavigateStory}
      />

      {/* Modals */}
      <ProjectInquiryModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        defaultService={selectedServiceForQuote}
        onSwitchToStrategyCall={() => {
          setIsProjectModalOpen(false);
          setIsStrategyCallModalOpen(true);
        }}
      />

      <StrategyCallModal
        isOpen={isStrategyCallModalOpen}
        onClose={() => setIsStrategyCallModalOpen(false)}
        onOpenProjectProposal={() => {
          setIsStrategyCallModalOpen(false);
          setIsProjectModalOpen(true);
        }}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <WittyBioModal
        isOpen={isWittyBioModalOpen}
        onClose={() => setIsWittyBioModalOpen(false)}
      />

      {/* Floating 1-Click WhatsApp Direct Chat */}
      <WhatsAppFloatingButton />

      {/* Cinematic 3D First-Person Portal Walk-Through Transition */}
      <DoorPortalTransition door={portalTransitionDoor} />
    </div>
  );
}
