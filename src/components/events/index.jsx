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

const EventPage = () => {
  const [activeTab, setActiveTab] = useState("info");

  const eventDetails = {
    gallery: {
      mainImage: "/assets/imageSlider.png",
      secondaryImage: "/assets/imageSlider02.png",
      additionalPhotos: 2,
    },
    header: {
      title: "Road to the Football Finals",
      venue: "Bashundhara Sports Complex",
      datetime: "Mar 14 from 7:30 PM - 9:30 PM",
    },
    tags: [
      { label: "Football", type: "activity", color: "#E6F8F8" },
      { label: "Relay", type: "swimming", color: "#E6F8F8" },
      { label: "Female", type: "gender", color: "#FFE8F0" },
      { label: "Age: Below 25", type: "age", color: "#EFEDFF" },
    ],
    difficulty: {
      level: "beginner",
      value: 1,
    },
    description:
      "Learn about the capital’s first beavers in 400 years from the Ealing Beaver project, make your own mushroom growing starter kit with urban agriculture experts, before joining Roma the Engineer to get into the nuts and bolts of tomorrow’s high-rise buildings.",
    location: {
      name: "NDE Field",
      address:
        "Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois",
    },
    host: {
      name: "Alex Mercer",
      activitiesHosted: 23,
      rating: 4.5,
      image: "/assets/avatar.png",
    },
    booking: {
      spotsLeft: 6,
      price: 320,
      priceNote: "(both)",
    },
  };
  return (
    <main className=" mt-10">
      <PhotoGallery {...eventDetails.gallery} />
      <div className="mt-12">
        <div className="flex flex-wrap gap-10 w-full">
          <div className="flex-1 shrink basis-12 min-w-60">
            <EventHeader {...eventDetails.header} />
            <div className="md:hidden block">
              <BookingCard {...eventDetails.booking} />
            </div>
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "info" && (
              <section>
                <div className="px-10">
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
          </div>
          <div className="sticky top-10 right-10 self-start">
            <BookingCard {...eventDetails.booking} />
          </div>
        </div>
        {activeTab === "info" && <SimilarEvents />}
      </div>
    </main>
  );
};

export default EventPage;
