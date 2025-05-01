"use client";
import { useState } from "react";
import { PhotoGallery } from "./PhotoGallery";
import { EventHeader } from "./EventHeader";
import { TabNavigation } from "./TabNavigation";
import { EventDetails } from "./EventDetails";
import { HostProfile } from "./HostProfile";
import { BookingCard } from "./BookingCard";
import GoodToKnowSection from "./GoodToKnowSection";
import SimilarEvents from "./SimilarEvents";
import PlayersList from "./Players";
import CommentThread from "./CommentThread";
import { PaymentPopup } from "./JoinEvents";
import { eventDetails } from "@/lib/constant";
const EventPage = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const handleJoinEvent = () => {
    setShowPaymentPopup(true);
  };
  return (
    <main className=" md:mt-10 mt-5">
      {showPaymentPopup && (
        <PaymentPopup onClose={() => setShowPaymentPopup(false)} />
      )}
      <PhotoGallery {...eventDetails.gallery} />
      <div className="mt-12">
        <div className="flex flex-wrap gap-10 w-full">
          <div className="flex-1 shrink basis-12 min-w-60">
            <EventHeader {...eventDetails.header} />
            <div className="md:hidden block">
              <BookingCard
                {...eventDetails.booking}
                onJoinClick={handleJoinEvent}
              />
            </div>
            <TabNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {activeTab === "info" && (
              <section>
                <div className="md:px-10 px-5">
                  <EventDetails details={eventDetails} />
                  <GoodToKnowSection />
                  <HostProfile host={eventDetails.host} />
                </div>
              </section>
            )}
            {activeTab === "player" && (
              <section>
                <PlayersList />
              </section>
            )}
            {activeTab === "comments" && (
              <section className="px-10">
                <CommentThread />
              </section>
            )}
          </div>
          <div className="sticky top-10 right-10 self-start hidden md:block">
            <BookingCard
              {...eventDetails.booking}
              onJoinClick={handleJoinEvent}
            />
          </div>
        </div>
        {activeTab === "info" && <SimilarEvents />}
      </div>
    </main>
  );
};

export default EventPage;
